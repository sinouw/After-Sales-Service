import { FormBuilder, FormGroup, Validators, FormGroupDirective } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { EntrepriseService } from 'src/app/shared/entreprise.service';

@Component({
  selector: 'app-entreprise-services-add',
  templateUrl: './entreprise-services-add.component.html',
  styleUrls: ['./entreprise-services-add.component.css']
})
export class EntrepriseServicesAddComponent {

  serviceFromBody : FormGroup;

  constructor(private entrepriseService : EntrepriseService,private fromBuilder : FormBuilder) {
    this.createServiceFormGroup()
  }

  createServiceFormGroup(){
    this.serviceFromBody = this.fromBuilder.group({
      'Label':['',Validators.required],
      'Description':['',Validators.required],
      'ImageUrl':''
    })
  }


  submit(){
    this.entrepriseService.addService(this.serviceFromBody.value)
    .subscribe(response=>{
      console.log(response)
      this.serviceFromBody.reset()
    })
  }

}
