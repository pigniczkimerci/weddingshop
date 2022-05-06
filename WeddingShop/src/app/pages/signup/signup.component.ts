import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { User } from 'src/app/model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  users: Array<User> = [];
  public signUpForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })
  public signInForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })
  public isSignedIn = false
  constructor(public firebaseService : FirebaseService, private router: Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('user')!== null)
    this.isSignedIn= true
    else
    this.isSignedIn = false
  }

  async onSignup(email:string,password:string){
    await this.firebaseService.signup(email,password)
    .then(() => {
      this.isSignedIn = true
      this.users.push({email: email, password: password});
      sessionStorage.setItem('token',JSON.stringify(this.users));
      this.router.navigate(["/home"]);
    }).catch((error) => {
      switch (error.code) {
        case "auth/email-already-exists":
        {
            alert("E-mail cím már foglalt!");
            break;
        }
        case "auth/invalid-password":
        {
           alert("Nem megfelelő jelszó: legalább 6 karakter.");
           break;
        }
           default:
        {
            alert("Email cím már foglalt, vagy nem megfelelő jelszó!");
            break;
        }
      }
    });
  }
  async onSignin(email:string,password:string){
    await this.firebaseService.signin(email, password)
    .then(() => {
              this.isSignedIn = true
              this.users.push({email: email, password: password});
              sessionStorage.setItem('token',JSON.stringify(this.users));
              this.router.navigate(["/home"]);
    }).catch((error) => {
      switch (error.code) {
        case "auth/invalid-email":
        case "auth/wrong-password":
        case "auth/user-not-found":
        {
           alert("Nem megfelelő jelszó vagy e-mail");
           break;
        }
           default:
        {
            alert("Váratlan hiba törlént!");
            break;
        }
      }
    });
  }
}
