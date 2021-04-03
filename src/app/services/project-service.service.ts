import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService {

  readonly _url: string = "http://127.0.0.1:8000/";

  constructor(private http: HttpClient) { }

  getMachine(): Observable<any[]>{
    return this.http.get<any[]>(this._url+'machine')
    .pipe(catchError(this.errorHandler));
   }

  getMbyCode(id:number): Observable<any[]>{
    return this.http.get<any[]>(this._url+'machine/'+id)
   .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
   return throwError(error.message || "Server Error")
  }
///////////
  postMachine(mData:any): Observable<any[]>{
    return this.http.post<any[]>(this._url+'machine/', mData)
    .pipe(catchError(this.errorHandler));
}

  updateMachine(id: number, mData:any): Observable<any[]>{
    console.log(mData)
    console.log(this._url + '/' + id)
    return this.http.put<any[]>(this._url + 'machine/' + id, mData)
    .pipe(catchError(this.errorHandler));
}

  deleteMachine(id: number) {
    return this.http.delete(this._url + 'machine/' + id);
}
}
