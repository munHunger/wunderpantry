import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BaseService } from "./base.service";
import { map, catchError } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Item } from "../models/item.model";
import { Details } from "../models/details.model";

@Injectable()
export class PantryService extends BaseService {
  constructor(private http: HttpClient) {
    super();
  }

  public getList(): Observable<Item[]> {
    console.log("Fetching list");
    return this.http.get<Item[]>(this.getBaseUrl() + "/list").pipe(
      map((data: Item[]) => {
        return data;
      }),
      catchError(error => {
        return this.handleError(error);
      })
    );
  }

  public getDetails(id: string): Observable<Details> {
    return this.http.get<Details>(this.getBaseUrl() + "/item/" + id).pipe(
      map((data: Details) => {
        return data;
      }),
      catchError(error => {
        return this.handleError(error);
      })
    );
  }
}
