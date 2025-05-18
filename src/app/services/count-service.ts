import { Injectable, signal } from "@angular/core";

@Injectable({ providedIn: "root" })
export class CountService {
  private _count = signal(0);

  // Expose the signal getter for reading
  count = this._count.asReadonly();

  increment() {
    this._count.set(this._count() + 1);
  }

  decrement() {
    this._count.set(this._count() - 1);
  }
}
