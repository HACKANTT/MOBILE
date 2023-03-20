import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';



@Component({
  selector: 'app-detail-hack',
  templateUrl: './detail-hack.page.html',
  styleUrls: ['./detail-hack.page.scss'],
})
export class DetailHackPage implements OnInit {

  mapURL: SafeResourceUrl;
  hack: any;
  constructor(public sanitizer:DomSanitizer, private router: Router, private http: HttpClient, private activeRoute: ActivatedRoute) {
    
    let url =
      'https://www.google.com/maps/embed/v1/place?key=AIzaSyBBsM0iiWw3EHaTaHnRYtYPWq5GeBEM2pE&q=Eiffel+Tower,Paris+France&zoom=8';
    this.mapURL = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    this.activeRoute.queryParams.subscribe(params => {
    let item:any = this.router.getCurrentNavigation()?.extras.state;
    this.hack= item.hack;
    console.log(this.hack);
  }
  )}

  sanitizeUrl(url:any){
    return  this.sanitizer.bypassSecurityTrustUrl(url);
  }



  ngOnInit() {
  }

}
