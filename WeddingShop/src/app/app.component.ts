import { Component, HostListener, OnInit } from '@angular/core';
import { FirebaseService } from './services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'firebase-angular-auth';

  constructor(public firebaseService: FirebaseService){}
  ngOnInit(){

  }

   /*@HostListener('window:beforeunload', ['$event'])
  unloadHandler(event: any) {
    this.firebaseService.logout();
    this.firebaseService.isLoggedIn = false;
  }*/

}