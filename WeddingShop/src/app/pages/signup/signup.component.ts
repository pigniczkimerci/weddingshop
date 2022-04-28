import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { User } from 'src/app/model/user';

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
  constructor(public firebaseService : FirebaseService) { }

  ngOnInit(): void {
    if(localStorage.getItem('user')!== null)
    this.isSignedIn= true
    else
    this.isSignedIn = false
  }
  async onSignup(email:string,password:string){
    await this.firebaseService.signup(email,password)
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn = true
    this.users.push({email: email, password: password});
    localStorage.setItem('token',JSON.stringify(this.users));
  }
  async onSignin(email:string,password:string){
    await this.firebaseService.signin(email,password)
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn = true
    this.users.push({email: email, password: password});
    localStorage.setItem('token',JSON.stringify(this.users));
  }
  handleLogout(){
    this.isSignedIn = false
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

}
