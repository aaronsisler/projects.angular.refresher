projects.angular.refresher

## TODOs

- See how the app layout should be folders wise i.e. where should pages go? How do routes play into this?
- Get the count store working with `npm install @ngrx/signals`. Example code below.
- Think about making a call to Event Service as a POC for how RxJS works

From ChatGPT:

```typescript
// counter.store.ts
import { Injectable, computed, signal } from "@angular/core";
import {
  signalStore,
  withState,
  withMethods,
  withComputed,
} from "@ngrx/signals";

@Injectable({ providedIn: "root" })
export class CounterStore {
  // Create the store using the signalStore() function
  readonly store = signalStore(
    // Initial state
    { count: 0 },
    // Methods for updating state
    withMethods((state) => ({
      increment: () => state.update((s) => ({ count: s.count + 1 })),
      decrement: () => state.update((s) => ({ count: s.count - 1 })),
      reset: () => state.set({ count: 0 }),
    })),
    // Derived state
    withComputed((state) => ({
      isEven: computed(() => state().count % 2 === 0),
    }))
  );

  // Expose signals and actions
  count = this.store.state.select((s) => s.count);
  isEven = this.store.isEven;
  increment = this.store.increment;
  decrement = this.store.decrement;
  reset = this.store.reset;
}
```
