import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { bindCallback } from 'rxjs';

@Component({
  selector: 'app-detail-hack',
  templateUrl: './detail-hack.page.html',
  styleUrls: ['./detail-hack.page.scss'],
})
export class DetailHackPage implements OnInit {


  hack: any;
  constructor(private router: Router, private http: HttpClient, private activeRoute: ActivatedRoute) {
    this.activeRoute.queryParams.subscribe(params => {
    let item:any = this.router.getCurrentNavigation()?.extras.state;
    this.hack= item.hack;
    console.log(this.hack);
  }
  )}



  ngOnInit() {
  }

}
