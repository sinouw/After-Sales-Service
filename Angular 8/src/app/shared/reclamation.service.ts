import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  constructor(private http : HttpClient) { }
  BaseUrl = environment.apiUrl;
  private subject = new Subject<any>();

  addreclamation(ReclamationBody : any){
    return this.http.post(this.BaseUrl+"/reclamations",ReclamationBody)
  }
  getReclamations(){
    return this.http.get(this.BaseUrl+"/reclamations")
  }
  deleteReclamation(id){
    return this.http.delete(this.BaseUrl+"/reclamations/"+id)
  }
  
  editReclamation(ReclamationBody){
    return this.http.put(this.BaseUrl+"/reclamations/"+ReclamationBody.Id,ReclamationBody)
  }
  SendReclamationSubcription(body){
    this.subject.next(body)
  }
  

  getReclamationSubcription(): Observable<any>{
  return this.subject.asObservable();
  }


}
