import { signalStore, withState, withMethods, patchState } from "@ngrx/signals";

interface CounterState {
  count: number;
}

export const CountStore = signalStore(
  // { providedIn: "root" },
  withState<CounterState>({ count: 0 }),
  withMethods((store) => ({
    reset: (): void => patchState(store, (_state) => ({ count: 0 })),
    increment: (): void =>
      patchState(store, (state) => ({ count: state.count + 1 })),
    decrement: (): void =>
      patchState(store, (state) => ({ count: state.count - 1 })),
  }))
);
