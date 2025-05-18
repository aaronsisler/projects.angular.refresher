import { Component } from "@angular/core";
import { CountService } from "../services/count-service";

@Component({
  selector: "app-right-side",
  imports: [],
  templateUrl: "./right-side.component.html",
  styleUrl: "./right-side.component.scss",
})
export class RightSideComponent {
  constructor(public countService: CountService) {}
}
