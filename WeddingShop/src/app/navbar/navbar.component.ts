import { Component, OnInit} from '@angular/core';
import { SignupComponent } from '../pages/signup/signup.component';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [SignupComponent]

})
export class NavbarComponent implements OnInit {

  isSignedInA: boolean= false;
  constructor(public sign: SignupComponent) {
    
    this.isSignedInA = this.sign.isSignedIn;
    console.log(this.isSignedInA);
   }

  ngOnInit(): void {
  }

  
  
}
