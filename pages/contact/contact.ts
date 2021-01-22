import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  styleUrls: ['contact.css']
})
export class ContactPage {
  feet: number;
  inches: number;
  sex: string;
  
  iwrobinson: number;
  iwmiller: number;
  iwhamwi: number;
  iwdevine: number;

  calculateIWC() {
    
    if (this.sex == 'male'){
     this.iwrobinson = 52;
     this.iwmiller = 56.2;
     this.iwhamwi = 48.0;
     this.iwdevine = 50.0;
      if (this.feet >= 5){
        this.iwrobinson = 52 + ((this.inches/5) * 1.9);
        this.iwmiller = 56.2 + ((this.inches/5) * 1.41);
        this.iwhamwi = 48 + ((this.inches/5) * 2.7);
        this.iwdevine = 50 + ((this.inches/5) * 2.3);
      }
    }

    if (this.sex == 'female'){
     this.iwrobinson = 49;
     this.iwmiller = 53.1;
     this.iwhamwi = 45.5;
     this.iwdevine = 45.5;
      if (this.feet >= 5){
        this.iwrobinson = 49 + ((this.inches/5) * 1.7);
        this.iwmiller = 53.1 + ((this.inches/5) * 1.36);
        this.iwhamwi = 45.5 + ((this.inches/5) * 2.2);
        this.iwdevine = 45.5 + ((this.inches/5) * 2.3);
      }

    }
  }
}
