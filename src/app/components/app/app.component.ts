import { Component } from "@angular/core";
import { Details } from "src/app/models/details.model";
import { Item } from "src/app/models/item.model";
import { PantryService } from "src/app/services/pantry.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  private detail: Details;

  private list: Item[];

  constructor(private service: PantryService) {
    this.service.getList().subscribe(list => (this.list = list));
  }

  private fetchDetails(item: Item) {
    if (item.hasDetails)
      this.service
        .getDetails(item.id)
        .subscribe(details => (this.detail = details));
  }

  private getIcon(item: Item) {
    return item.name.substring(0, 1);
  }

  private getMain(): string {
    return "**main** and stuff";
  }

  private getSide(): string {
    return "_side_ and stuff";
  }
}
