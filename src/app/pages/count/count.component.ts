import { Component, inject } from "@angular/core";
import { CountStore } from "../../core/stores/count.store";

@Component({
  selector: "app-count",
  imports: [],
  templateUrl: "./count.component.html",
  styleUrl: "./count.component.scss",
  // providers: [CountStore],
})
export class CountComponent {
  readonly countStore = inject(CountStore);

  handleStore() {
    console.log(this.countStore);
  }
}
