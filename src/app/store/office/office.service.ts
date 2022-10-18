import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {OfficeInterface} from "../../shared/interfaces/office.interface";
import {CreateOfficeRequest} from "../../shared/interfaces/create.office.request.interfce";
import {UpdateRequestInterface} from "../../shared/interfaces/UpdateRequestInterface";

@Injectable({
  providedIn: "root"
})
export class OfficeService {
  private apiUrl = `${environment.apiUrl}/office`;
  public officeList: OfficeInterface[] = [];

  constructor(private http: HttpClient) {
  }

  public addOfficeRequest(office: CreateOfficeRequest): Observable<CreateOfficeRequest> {
    return this.http.post<CreateOfficeRequest>(`${this.apiUrl}/create`, office);
  }

  public getOfficeListRequest(): Observable<OfficeInterface[]> {
    return this.http.get<OfficeInterface[]>(`${this.apiUrl}/get-all`)
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
