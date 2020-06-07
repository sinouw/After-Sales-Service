import { Component, OnInit } from '@angular/core';
import { EntrepriseService } from '../shared/entreprise.service';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent implements OnInit {

  servicesList : any = []
  constructor(private entrepriseService: EntrepriseService) { 
    this.getServices()
  }
  ngOnInit() {
  }

  getServices(){
    this.entrepriseService.getServices()
    .subscribe((response  :any)=>{
      console.log("response",response)
      this.servicesList = response
    })
  }

}
