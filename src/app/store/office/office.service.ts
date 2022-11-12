import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {OfficeInterface} from "../../shared/interfaces/office.interface";
import {CreateOfficeRequest} from "../../shared/interfaces/create.office.request.interfce";
import {UpdateRequestInterface} from "../../shared/interfaces/UpdateRequestInterface";
import {OfficeAddPayload} from "./interfaces/office-add-payload.interface";
import {OfficeUpdatePayload} from "./interfaces/office-update-payload.interface";
import {PageOfficeInterface} from "../../shared/interfaces/page/page-office.interface";

@Injectable({
  providedIn: "root"
})
export class OfficeService {
  private apiUrl = `${environment.apiUrl}/office`;
  public officeList: OfficeInterface[] = [];

  constructor(private http: HttpClient) {
  }

  public addOfficeRequest(office: OfficeAddPayload): Observable<OfficeInterface> {
    return this.http.post<OfficeInterface>(`${this.apiUrl}/create`, office);
  }

  public getOfficeListRequest(): Observable<PageOfficeInterface> {
    return this.http.get<PageOfficeInterface>(`${this.apiUrl}?page=0&size=10`)
  }

  public deleteOfficeRequest(id: string): Observable<string> {
    const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.delete<string>(`${this.apiUrl}` + '/' + id + '/delete', httpOptions)
  }

  public updateOfficeRequest(request: OfficeUpdatePayload): Observable<UpdateRequestInterface> {
    const url = `${this.apiUrl}/${request.id}/update`;
    return this.http.put<UpdateRequestInterface>(url, request);
  }
}
