import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras} from '@angular/router';

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';



@Component({
  selector: 'app-detail-hack',
  templateUrl: './detail-hack.page.html',
  styleUrls: ['./detail-hack.page.scss'],
})
export class DetailHackPage implements OnInit {

  mapURL: SafeResourceUrl;
  hack: any;
  lstevenements:any;
  constructor(public sanitizer:DomSanitizer, private router: Router, private http: HttpClient, private activeRoute: ActivatedRoute) {

    let url =
      'https://www.google.com/maps/embed/v1/place?key=AIzaSyBBsM0iiWw3EHaTaHnRYtYPWq5GeBEM2pE&q=Eiffel+Tower,Paris+France&zoom=8';
    this.mapURL = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    this.activeRoute.queryParams.subscribe(params => {
    let item:any = this.router.getCurrentNavigation()?.extras.state;
    this.hack= item.hack;
    console.log(this.hack);

    //on récupère les evenemnts liés au hackathon sur lequel on clique
    this.http.get('http://'+ window.location.hostname+':8001/api/evenements/hackathon/'+this.hack.id).subscribe(
      data => {this.lstevenements = data;console.log(this.lstevenements);})
  }
  )}

  sanitizeUrl(url:any){
    return  this.sanitizer.bypassSecurityTrustUrl(url);
  }

  ngOnInit() {
  }

  affDetailEvenement(evenement: any){
    console.log(evenement);
    //ouvrir page detail
    //envoyer le param à la page detail
    let navExtras: NavigationExtras = {
      state: {
        evenement:evenement
      }
    };
    //si c'est un atelier on va vers detail-atelier
    if(evenement.type == "atelier"){
      this.router.navigate(['detail-atelier'], navExtras);
    }
    //si c'est une conference on va vers detail-conference
    if(evenement.type == "conference"){
      this.router.navigate(['detail-conference'], navExtras);
    }


  }

}
