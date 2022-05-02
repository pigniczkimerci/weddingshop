import { trigger } from '@angular/animations';
import { Component, OnInit, Output, EventEmitter, HostBinding, HostListener} from '@angular/core';
import { SignupComponent } from '../pages/signup/signup.component';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']

})
export class NavbarComponent implements OnInit {

  public show:boolean = false;
  isFixedNavbar: any;
  @HostBinding('class.navbar-opened') navbarOpened = false;

  opened = false;

  constructor(public firebaseService: FirebaseService) {}

  ngOnInit(): void {
  }
  
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if(offset > 10) {
      this.isFixedNavbar = true;
    } else {
      this.isFixedNavbar = false;
    }
  }

  toggleNavbar() {
    this.navbarOpened = !this.navbarOpened;
  }
  get userInfo(){
    if(sessionStorage.length != 0) return true;
    return false;
  }
  
}
