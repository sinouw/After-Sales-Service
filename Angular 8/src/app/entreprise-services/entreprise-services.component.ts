import { EntrepriseService } from 'src/app/shared/entreprise.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-entreprise-services',
  templateUrl: './entreprise-services.component.html',
  styleUrls: ['./entreprise-services.component.css']
})
export class EntrepriseServicesComponent implements OnInit {
  selectedComp : string = "Services List";
  buttonsList : string[] =  ["Services List","Add Service"]
  subscription: Subscription;
  serviceBody : any = {}

  constructor(private entrepriseService : EntrepriseService) { }

  ngOnInit() {

    this.subscription = this.entrepriseService.getServiceSubcription()
    .subscribe(body => {
      if (body) {
        console.log("body : ",body)
       this.serviceBody = body ;
       this.selectedComp="Edit Service"

      } 
    });


    this.selectComponent()
  }

 selectComponent(componentName : string = this.selectedComp) : void {
    this.selectedComp = componentName;

    console.log(componentName);
     
}


}
