import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {OfficeInterface} from "../../shared/interfaces/office.interface";
import {CreateOfficeRequest} from "../../shared/interfaces/create.office.request.interfce";
import {UpdateRequestInterface} from "../../shared/interfaces/UpdateRequestInterface";
import {OfficeAddPayload} from "./interfaces/office-add-payload.interface";

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

  public getOfficeListRequest(): Observable<OfficeInterface[]> {
    return this.http.get<OfficeInterface[]>(`${this.apiUrl}?page=0&size=10`)
  }

  public deleteOfficeRequest(id: string): Observable<string> {
    const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.delete<string>(`${this.apiUrl}` + '/' + id + '/delete', httpOptions)
  }

  public updateOfficeRequest(request: UpdateRequestInterface, id: any): Observable<UpdateRequestInterface> {
    const url = `${this.apiUrl}/${id}/update-data`;
    return this.http.patch<UpdateRequestInterface>(url, request);
  }
}
