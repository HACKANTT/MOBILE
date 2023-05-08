import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-conference',
  templateUrl: './detail-conference.page.html',
  styleUrls: ['./detail-conference.page.scss'],
})
export class DetailConferencePage implements OnInit {
  evenement: any;
  conference: any;
  favoris: any;
  constructor(
    private router: Router,
    private http: HttpClient,
    private activeRoute: ActivatedRoute
  ) {
    this.activeRoute.queryParams.subscribe((params) => {
      let item: any = this.router.getCurrentNavigation()?.extras.state;
      this.conference = item.evenement;
      console.log(this.conference);
    });
  }

  isFav() {

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

  inscription(conference:any)
  {
    //on vérifie si l'utilisateur est connecté
    /*this.storage.get('user').then((val) => {
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

  ngOnInit() {}
}
