import { Component, OnInit } from '@angular/core';
import { EntrepriseService } from 'src/app/shared/entreprise.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-entreprise-services-list',
  templateUrl: './entreprise-services-list.component.html',
  styleUrls: ['./entreprise-services-list.component.css']
})
export class EntrepriseServicesListComponent implements OnInit {
  displayedColumns: string[] = ['label', 'description','creationDate','actions'];
  dataSource : any = new MatTableDataSource();

  constructor(private entrepriseService : EntrepriseService) { 
    this.getServices()
  }

  ngOnInit() {
  }

  getServices(){
    this.entrepriseService.getServices()
    .subscribe((response  :any)=>{
      console.log("response",response)
      this.dataSource = new MatTableDataSource(response)
    })
  }

  deleteService(id,index){
    this.entrepriseService.deleteService(id)
    .subscribe(res=>{console.log("suppression doen")})
    console.log("id,index",id,index)
    this.dataSource.data.splice(index,1)
    this.dataSource = new MatTableDataSource(this.dataSource.data);
  }

  editService(body,index){
    this.entrepriseService.SendServiceSubcription(body)
  }

}
