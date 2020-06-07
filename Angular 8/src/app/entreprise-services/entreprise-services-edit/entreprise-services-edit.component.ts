import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EntrepriseService } from 'src/app/shared/entreprise.service';

@Component({
  selector: 'app-entreprise-services-edit',
  templateUrl: './entreprise-services-edit.component.html',
  styleUrls: ['./entreprise-services-edit.component.css']
})
export class EntrepriseServicesEditComponent implements OnInit {

  @Input() serviceBody : any;

  constructor(private entrepriseService : EntrepriseService,private fromBuilder : FormBuilder) {
    this.createServiceFormGroup()
  }
  
  ngOnInit() {
    console.log("serviceBody",this.serviceBody);
    this.fillForm()
  }


  serviceFromBody : FormGroup;


  createServiceFormGroup(){
    this.serviceFromBody = this.fromBuilder.group({
      'Id':['',Validators.required],
      'Label':['',Validators.required],
      'Description':['',Validators.required],
    })
  }

  fillForm(){
    if (this.serviceBody) {
      this.serviceFromBody.patchValue({
        'Id':this.serviceBody.id,
        'Label':this.serviceBody.label,
        'Description':this.serviceBody.description,
      })
    }
  }


  submit(){
    this.entrepriseService.editService(this.serviceFromBody.value)
    .subscribe(response=>{
      console.log(response)
    })
  }
}
