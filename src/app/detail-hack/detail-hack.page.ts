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
  public alertButtons = ['OK'];
  hack: any;
  lstevenements:any;
  selectedType: string = 'all';
  mapUrl!: SafeResourceUrl;
  favoris:any;
  constructor(public sanitizer:DomSanitizer, private router: Router, private http: HttpClient, private activeRoute: ActivatedRoute) {
    this.activeRoute.queryParams.subscribe(params => {
    let item:any = this.router.getCurrentNavigation()?.extras.state;
    this.hack= item.hack;
    console.log(this.hack);
    //si hack est vide, on reviens à la page d'accueil
    if(this.hack == undefined){
      this.router.navigate(['/home']);
    };
    //on récupère les evenemnts liés au hackathon sur lequel on clique
    this.http.get('http://s.sc2ftxr9548.universe.wf/api/evenements/hackathon/'+this.hack.id).subscribe(
      data => {this.lstevenements = data;console.log(this.lstevenements);})
  })}

  sanitizeUrl(url:any){
    return  this.sanitizer.bypassSecurityTrustUrl(url);
  }

  filterEvents() {
    if (this.selectedType === 'all') {
      return this.lstevenements;
    } else {
      return this.lstevenements.filter((evenement:any) => {
        return evenement.type === this.selectedType;
      });
    }
  }


  sFav() {

    //on vérifie si le film est dans les favoris
    /*this.storage.get('favoris').then((val) => {
        if (val) {
          //on a déjà des favoris
          if (val.indexOf(this.conference) > -1) {
            //le film est déjà dans les favoris
            this.favoris = true;
          } else {
            //le film n'est pas dans les favoris
            this.favoris = false;
          }
        } else {
          //on n'a pas encore de favoris*/
    this.favoris = false;
  }

  addFav(conference: any) {
    //si il est dans favoris, on l'enlève, sinon on le met, on modifie aussi le bouton en conséquence
    /*this.storage.get('favoris').then((val) => {
            if (val) {
              //on a déjà des favoris
              if (val.indexOf(film) > -1) {
                //le film est déjà dans les favoris
                val.splice(val.indexOf(film), 1);
                this.storage.set('favoris', val);
                this.favoris = false;
              } else {
                //le film n'est pas dans les favoris
                val.push(film);
                this.storage.set('favoris', val);
                this.favoris = true;
              }
            } else {
              //on n'a pas encore de favoris
              this.storage.set('favoris', [film]);*/
    this.favoris = true;
  }

  ngOnInit(): void {
    // Remplacez {{hack.lieu}} par la valeur que vous voulez
    let url = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBBsM0iiWw3EHaTaHnRYtYPWq5GeBEM2pE&q=${this.hack.lieu}${this.hack.rue}&zoom=8`;
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  affDetailEvenement(evenement: any){
    //ouvrir page detail
    //envoyer le param à la page detail
    let navExtras: NavigationExtras = {
      state: {
        evenement:evenement,
        hack:this.hack
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
