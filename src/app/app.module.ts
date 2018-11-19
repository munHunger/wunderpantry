import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./components/app/app.component";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { PantryService } from "./services/pantry.service";

const appRoutes: Routes = [];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), HttpClientModule],
  providers: [PantryService],
  bootstrap: [AppComponent]
})
export class AppModule {}
