import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {OfficeInterface} from "../interfaces/office.interface";

@Injectable({
  providedIn: "root"
})
export class OfficeService {
  constructor(private http: HttpClient) {
  }

  public getOfficeList(): Observable<OfficeInterface[]> {
    const url = `${environment.apiUrl}/office/get-all`
    return this.http.get<OfficeInterface[]>(url)
  }
}
