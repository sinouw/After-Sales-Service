import { Component, OnInit } from '@angular/core';
import { ReclamationService } from 'src/app/shared/reclamation.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-entreprise-reclamations-add',
  templateUrl: './entreprise-reclamations-add.component.html',
  styleUrls: ['./entreprise-reclamations-add.component.css']
})
export class EntrepriseReclamationsAddComponent {
    ReclamationFromBody : FormGroup;
    
    constructor(private reclamationService : ReclamationService,private fromBuilder : FormBuilder) {
      this.createReclamationFormGroup()
    }


    
    createReclamationFormGroup(){
      this.ReclamationFromBody = this.fromBuilder.group({
        'Name':['',Validators.required],
        'Email': ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
        'City':['',Validators.required],
        'Message':['',Validators.required],
        'UploadFileUrl':''

      })
    }
    submit(){
      this.reclamationService.addreclamation(this.ReclamationFromBody.value)
      .subscribe(response=>{
        console.log(response)
        this.ReclamationFromBody.reset()
      })
    }
}
