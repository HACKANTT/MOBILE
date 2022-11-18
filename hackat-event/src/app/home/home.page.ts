import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  lsthackathons:any;
  constructor(private router: Router) {
    fetch('assets/json/films.json').then(res => res.json())
    .then(json => {
      this.lsthackathons = json;
    }
    );
  }

  /*affDetail(hackathon){
    console.log(hackathon);
    //ouvrir page detail
    //envoyer le param à la page detail
    let navExtras: NavigationExtras = {
      state: {
        film:hackathon
      }
    };
    this.router.navigate(['/detail'], navExtras);*/


  }

}
