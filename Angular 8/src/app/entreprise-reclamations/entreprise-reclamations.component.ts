import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ReclamationService } from '../shared/reclamation.service';

@Component({
  selector: 'app-entreprise-reclamations',
  templateUrl: './entreprise-reclamations.component.html',
  styleUrls: ['./entreprise-reclamations.component.css']
})
export class EntrepriseReclamationsComponent implements OnInit {
  selectedComp : string = "Reclamations List";
  buttonsList : string[] =["Reclamations List","Add Reclamation"]
  subscription: Subscription;
  reclamationBody : any = {}

  
  constructor(private reclamationService : ReclamationService) { }

  ngOnInit() {

    this.subscription = this.reclamationService.getReclamationSubcription()
    .subscribe(body => {
      if (body) {
        console.log("body : ",body)
       this.reclamationBody = body ;
       this.selectedComp="Edit Reclamation"

      } 
    });


    this.selectComponent()
  }

    selectComponent(componentName : string = this.selectedComp) : void {
      this.selectedComp = componentName;
      console.log(componentName);
       
  }
  
  }


