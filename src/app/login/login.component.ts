import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/authentication.service';
import { UserService } from 'src/app/user.service';
import { User } from 'src/app/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;


  users: User[];
  constructor(private UserService: UserService, public authenticationService: AuthenticationService) { }

  ngOnInit() {
      this.UserService.getUsers().subscribe(data => {
        this.users = data.map(e => {
          return {
            id: e.payload.doc.id,
            ...e.payload.doc.data() as User}
        })
      });
    }

  create(user: User){
      this.UserService.createUser(user);
  }


  signUp() {
    this.authenticationService.SignUp(this.email, this.password);
    let newUser = {
      username: this.username,
      firstName: this.firstName,
      lastName: this.lastName,
      phoneNumber: this.phoneNumber,
      email: this.email,
      rank: "user"
    }
    this.create(newUser);

    this.email = '';
    this.password = '';
  }

  signIn() {
    this.authenticationService.SignIn(this.email, this.password)
    this.email = '';
    this.password = '';
  }

  signOut() {
    this.authenticationService.SignOut();
  }

}
