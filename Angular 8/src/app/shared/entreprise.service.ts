import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {

  constructor(private http : HttpClient) { }
  BaseUrl = environment.apiUrl;

  private subject = new Subject<any>();

  getServices(){
    return this.http.get(this.BaseUrl+"/services")
  }

  addService(ServiceBody : any){
    return this.http.post(this.BaseUrl+"/services",ServiceBody)
  }

  editService(ServiceBody){
    return this.http.put(this.BaseUrl+"/services/"+ServiceBody.Id,ServiceBody)
  }

  deleteService(id){
    return this.http.delete(this.BaseUrl+"/services/"+id)
  }

  SendServiceSubcription(body){
    this.subject.next(body)
  }

  getServiceSubcription(): Observable<any>{
  return this.subject.asObservable();
  }
}
