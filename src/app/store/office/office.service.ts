// import {Injectable} from "@angular/core";
// import {HttpClient, HttpHeaders} from "@angular/common/http";
// import {environment} from "../../../environments/environment";
// import {Observable} from "rxjs";
// import {PageOfficeInterface} from "../../shared/interfaces/page/page-office.interface";
// import {OfficeResponse} from "../../shared/api/models/office-response";
// import {OfficeRequest} from "../../shared/api/models/office-request";
// import {PageOfficeResponse} from "../../shared/api/models/page-office-response";
// import {UpdateOfficeRequestInterface} from "../../shared/interfaces/update-office-request.interface";
//
// @Injectable({
//   providedIn: "root"
// })
// export class OfficeService {
//   private apiUrl = `${environment.apiUrl}/office`;
//   public officeList: OfficeResponse[] = [];
//
//   constructor(private http: HttpClient) {
//   }
//
//   public addOfficeRequest(office: OfficeRequest): Observable<OfficeRequest> {
//     return this.http.post<OfficeRequest>(`${this.apiUrl}/create`, office);
//   }
//
//   public getOfficeListRequest(): Observable<PageOfficeResponse> {
//     return this.http.get<PageOfficeResponse>(`${this.apiUrl}?page=0&size=10`)
//   }
//
//   public deleteOfficeRequest(id: string): Observable<string> {
//     const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
//     return this.http.delete<string>(`${this.apiUrl}` + '/' + id + '/delete', httpOptions)
//   }
//
//   public updateOfficeRequest({id, content}: UpdateOfficeRequestInterface): Observable<OfficeRequest> {
//     const url = `${this.apiUrl}/${id}/update`;
//     return this.http.put<OfficeRequest>(url, content);
//   }
// }
