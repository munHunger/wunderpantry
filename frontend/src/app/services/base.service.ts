import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { throwError as _throw } from "rxjs";

export class BaseService {
  protected getBaseUrl(): String {
    return "https://5p344rprm2.execute-api.eu-west-1.amazonaws.com/dev";
  }

  handleError(error: Response | any) {
    let errMsg: string;
    errMsg = `${error.status} - ${error.statusText || ""}`;
    console.error(errMsg);
    return _throw(errMsg);
  }
}
