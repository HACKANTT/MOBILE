import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonModal, AlertController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-detail-atelier',
  templateUrl: './detail-atelier.page.html',
  styleUrls: ['./detail-atelier.page.scss'],
})
export class DetailAtelierPage implements OnInit {
  @ViewChild(IonModal) modal!: IonModal;
  message =
    'This modal example uses triggers to automatically open a modal when the button is clicked.';
  nom!: string;
  prenom!: string;
  email!: string;
  evenement: any;
  atelier: any;
  favoris: any;
  hack: any;
  ionicForm!: FormGroup;
  submitted = false;
  alertmsg: any;
  showAlert = false;
  showToast = false;
  alertButtons = [
    {
      text: 'OK',
      handler: () => {
        this.showAlert = false;
      },
    },
  ];
  constructor(
    private router: Router,
    private http: HttpClient,
    private activeRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    private alertCtrl: AlertController
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

  inscription(atelier: any) {
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

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      nom: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          //on autorise les espaces et les tirets
          Validators.pattern('^[a-zA-Z- ]+$'),
        ],
      ],
      prenom: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('^[a-zA-Z]+$'),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        ],
      ],
    });
  }

  get errorControl() {
    return this.ionicForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.ionicForm.valid) {
      console.log('Veuillez bien remplir tous les champs');
      this.alertmsg = 'Veuillez bien remplir tous les champs :)';
      this.showAlert = true;
      return false;
    } else {
      console.log(this.ionicForm.value);
      //on va faire une requete post json vers /api/inscription/atelier
      this.http
  .post(
    'https://app.hackantt.me/api/inscription/atelier',
    {nom: this.ionicForm.value.nom,prenom: this.ionicForm.value.prenom,email: this.ionicForm.value.email,atelier: this.atelier.id}
  )
  //en fonction du code de la réponse on affiche l'error en json retournée par l'api, ou la réussite
  .subscribe({
    next: (response) => {
      console.log(response);
    },
    //si on recoit un code 200 on affiche le toast et ferme le modal
    complete: () => {
      //on modifie la valeur de {{atelier.nbInscrits}} à +1
      this.atelier.nbInscrits = this.atelier.nbInscrits + 1;
      this.showAlert = false;
      this.modal.dismiss();
      this.showToast = true;
    },
    error: (error) => {
      if (error.status == 400 || error.status == 404 || error.status == 500 || error.status == 403) {
        console.log(error);
        this.alertmsg = error.error.error;
        this.showAlert = true;
        this.showToast = false;
      }
    }
  });
    return;
  }
  }
}
