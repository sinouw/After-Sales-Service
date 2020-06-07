import { Component, OnInit } from '@angular/core';
import { ReclamationService } from 'src/app/shared/reclamation.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-entreprise-reclamations-list',
  templateUrl: './entreprise-reclamations-list.component.html',
  styleUrls: ['./entreprise-reclamations-list.component.css']
})
export class EntrepriseReclamationsListComponent implements OnInit {
  displayedColumns: string[] = ['Name', 'Email','City','Message','creationDate','actions'];
  dataSource : any = new MatTableDataSource();

  constructor(private reclamationService : ReclamationService) { 
    this.getReclamations()
  }

  ngOnInit() {
  }
  getReclamations(){
    this.reclamationService.getReclamations()
    .subscribe((response  :any)=>{
      console.log("response",response)
      this.dataSource = new MatTableDataSource(response)
    })
  }
  
  deleteReclamation(id,index){
    this.reclamationService.deleteReclamation(id)
    .subscribe(res=>{console.log("suppression doen")})
    console.log("id,index",id,index)
    this.dataSource.data.splice(index,1)
    this.dataSource = new MatTableDataSource(this.dataSource.data);
  }
  editReclamation(body,index){
    this.reclamationService.SendReclamationSubcription(body)
  }

}
