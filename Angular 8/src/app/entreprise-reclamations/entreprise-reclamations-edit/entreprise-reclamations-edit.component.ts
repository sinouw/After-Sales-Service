import { Component, OnInit, Input } from '@angular/core';
import { ReclamationService } from 'src/app/shared/reclamation.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-entreprise-reclamations-edit',
  templateUrl: './entreprise-reclamations-edit.component.html',
  styleUrls: ['./entreprise-reclamations-edit.component.css']
})
export class EntrepriseReclamationsEditComponent implements OnInit {
  @Input() reclamationBody : any;

  constructor(private reclamationService : ReclamationService,private fromBuilder : FormBuilder) {
    this.createReclamationFormGroup()
  }

  ngOnInit() {
    console.log("reclamationBody",this.reclamationBody);
    this.fillForm()
  }
  
  ReclamationFromBody : FormGroup;


  createReclamationFormGroup(){
    this.ReclamationFromBody = this.fromBuilder.group({
      'Id':['',Validators.required],
      'Name':['',Validators.required],
      'Email': ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      'City':['',Validators.required],
      'Message':['',Validators.required],
    })
  }

  fillForm(){
    if (this.reclamationBody) {
      this.ReclamationFromBody.patchValue({
        'Id':this.reclamationBody.id,
        'Name':this.reclamationBody.name,
        'Email':this.reclamationBody.email,
        'City':this.reclamationBody.city,
        'Message':this.reclamationBody.message,
      })
    }
  }


  submit(){
    this.reclamationService.editReclamation(this.ReclamationFromBody.value)
    .subscribe(response=>{
      console.log(response)
    })
  }
}
