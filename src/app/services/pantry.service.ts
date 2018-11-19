import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BaseService } from "./base.service";
import { Chat } from "../models/chat.model";
import { map, catchError } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class PantryService extends BaseService {
  constructor(private http: HttpClient) {
    super();
  }
}
