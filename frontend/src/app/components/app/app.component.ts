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
  private input: string = "";
  private detail: Details;

  private list: Item[];

  constructor(private service: PantryService) {
    document.onkeypress = e => {
      var charCode = typeof e.which == "number" ? e.which : e.keyCode;
      if (charCode) {
        if (charCode == 13) {
          this.fetchDetailsFromId(this.input);
          this.input = "";
        } else this.input += String.fromCharCode(charCode);
      }
    };
    this.service.getList().subscribe(list => {
      console.log("List recieved: " + list);
      this.list = list;
    });
  }

  private fetchDetailsFromId(id: string) {
    this.service.getDetails(id).subscribe(details => (this.detail = details));
  }

  private fetchDetails(item: Item) {
    if (item.hasDetails) this.fetchDetailsFromId(item.id);
  }

  private getIcon(item: Item) {
    return item.name.substring(0, 1);
  }

  private getMain(): string {
    return this.detail.main;
  }

  private getSide(): string {
    return this.detail.side;
  }
}
