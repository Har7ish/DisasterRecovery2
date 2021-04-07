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

  getMbyCode(id:any): Observable<any[]>{
    return this.http.get<any[]>(this._url+'machine/'+id)
   .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
   return throwError(error.message || "Server Error")
  }

  postMachine(mData:any): Observable<any[]>{
    return this.http.post<any[]>(this._url+'machine/', mData)
    .pipe(catchError(this.errorHandler));
}

  updateMachine(id: any, mData:any): Observable<any[]>{
    console.log(mData)
    console.log(this._url + 'machine/' + id)
    return this.http.put<any[]>(this._url + 'machine/' + id, mData)
    .pipe(catchError(this.errorHandler));
}

  deleteMachine(id: any) {
    return this.http.delete(this._url + 'machine/' + id);
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

getJob(): Observable<any[]>{
  return this.http.get<any[]>(this._url+'job')
  .pipe(catchError(this.errorHandler));
 }

getJbyCode(id:any): Observable<any[]>{
  return this.http.get<any[]>(this._url+'job/'+id)
 .pipe(catchError(this.errorHandler));
}



postJob(jData:any): Observable<any[]>{
  return this.http.post<any[]>(this._url+'job/', jData)
  .pipe(catchError(this.errorHandler));
}

updateJob(id: any, jData:any): Observable<any[]>{
  console.log(jData)
  console.log(this._url + 'job/' + id)
  return this.http.put<any[]>(this._url + 'job/' + id, jData)
  .pipe(catchError(this.errorHandler));
}

deleteJob(id: any) {
  return this.http.delete(this._url + 'job/' + id);
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

getTC(): Observable<any[]>{
  return this.http.get<any[]>(this._url+'timecard')
  .pipe(catchError(this.errorHandler));
 }

getTCbyCode(id:any): Observable<any[]>{
  return this.http.get<any[]>(this._url+'timecard/'+id)
 .pipe(catchError(this.errorHandler));
}



postTC(tcData:any): Observable<any[]>{
  return this.http.post<any[]>(this._url+'timecard/', tcData)
  .pipe(catchError(this.errorHandler));
}

updateTC(id: any, TCData:any): Observable<any[]>{
  console.log(TCData)
  console.log(this._url + 'timecard/' + id)
  return this.http.put<any[]>(this._url + 'timecard/' + id, TCData)
  .pipe(catchError(this.errorHandler));
}

// deleteJob(id: any) {
//   return this.http.delete(this._url + 'job/' + id);}

}
