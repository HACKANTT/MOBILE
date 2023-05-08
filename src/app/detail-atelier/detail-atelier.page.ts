import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-detail-atelier',
  templateUrl: './detail-atelier.page.html',
  styleUrls: ['./detail-atelier.page.scss'],
})
export class DetailAtelierPage implements OnInit {
  @ViewChild(IonModal) modal!: IonModal;
  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  nom!: string;
  prenom!: string;
  email!: string;
  evenement: any;
  atelier: any;
  favoris: any;
  hack:any;
  constructor(
    private router: Router,
    private http: HttpClient,
    private activeRoute: ActivatedRoute
  ) {
    this.activeRoute.queryParams.subscribe((params) => {
      let item: any = this.router.getCurrentNavigation()?.extras.state;
      this.atelier = item.evenement;
      this.hack = item.hack;
      console.log(this.atelier);
    });
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.nom, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
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

  inscription(atelier:any)
  {
    //on vérifie si l'utilisateur est connecté
    /*this.storage.get('user').then((val) => {
        if (val) {
          //on a déjà des favoris
          if (val.indexOf(this.atelier) > -1) {
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

  addFav(atelier: any) {
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
