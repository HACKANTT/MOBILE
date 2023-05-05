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
    this.http.get('http://'+ window.location.hostname+':8001/api/hackathons').subscribe(results => {
      this.lsthackathons=results;
    });
  }

  affDetailHack(hack: any){
    console.log(hack);
    //ouvrir page detail
    //envoyer le param à la page detail
    let navExtras: NavigationExtras = {
      state: {
        hack:hack
      }
    };
    this.router.navigate(['/detail-hack'], navExtras);


  }

}
