import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  private getMain(): string {
    return "**main** and stuff";
  }

  private getSide(): string {
    return "_side_ and stuff";
  }
}
