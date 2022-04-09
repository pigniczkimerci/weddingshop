import { Component, OnInit} from '@angular/core';
import { SignupComponent } from '../pages/signup/signup.component';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']

})
export class NavbarComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }

  
  
}
