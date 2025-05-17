import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { LeftSideComponent } from "./left-side/left-side.component";
import { RightSideComponent } from "./right-side/right-side.component";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, LeftSideComponent, RightSideComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "refresher";
}
