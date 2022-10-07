import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {OfficeInterface} from "../interfaces/office.interface";
import {CreateOfficeRequest} from "../interfaces/create.office.request.interfce";

@Injectable({
  providedIn: "root"
})
export class OfficeService {
  private apiUrl = `${environment.apiUrl}/office`

  constructor(private http: HttpClient) {
  }

  public addOfficeRequest(office: any): Observable<CreateOfficeRequest> {
    return this.http.post<CreateOfficeRequest>(`${this.apiUrl}/create`, office);
  }

  public getOfficeList(): Observable<OfficeInterface[]> {
    return this.http.get<OfficeInterface[]>(`${this.apiUrl}/get-all`)
  }

  public deleteOffice(id: string) {
    const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.delete(`${this.apiUrl}` + '/' + id + '/delete', httpOptions)
  }
}
