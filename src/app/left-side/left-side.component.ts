import { Component } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { ReactiveFormsModule, Validators } from "@angular/forms";
import { CountService } from "../services/count-service";

@Component({
  selector: "app-left-side",
  imports: [ReactiveFormsModule],
  templateUrl: "./left-side.component.html",
  styleUrl: "./left-side.component.scss",
})
export class LeftSideComponent {
  constructor(public countService: CountService) {}

  nameForm = new FormGroup({
    name: new FormControl("", Validators.required),
  });

  handleSubmit() {
    console.log(this.nameForm.value.name);
  }
}
