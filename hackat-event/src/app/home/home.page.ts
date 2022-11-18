import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  lsthackathons:any;
  constructor(private http : HttpClient, private router: Router) {
    this.http.get('http://localhost:8001/api/hackathons').subscribe(results => {
      results=this.lsthackathons;
    });
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
    this.router.navigate(['/detail'], navExtras);


  }*/

}
