import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  // @Output Moves Content in the parent elements
  @Output() onSubmitLoginEvent = new EventEmitter();
  @Output() onSubmitRegisterEvent = new EventEmitter();

  active: string = "login";
  firstName: string = "";
  lastName: string = "";
  email: string = "";
  userName: string = "";
  password: string = "";
  street: string = "";
  plz: string = "";
  country: string = "";
  tel: string = "";
  model: NgbDateStruct;
  birthdate: Date;

  // Method to switch between the forms
  onLoginTab(): void {
    this.active = "login";
  }

  onRegisterTab(): void {
    this.active = "register";
  }

  onSubmitLogin(): void {
    this.onSubmitLoginEvent.emit({"userName": this.userName, "password": this.password})
  }

  onSubmitRegister(): void {
    this.onSubmitRegisterEvent.emit({
      "firstName": this.firstName,
      "lastName": this.lastName,
      "userName": this.userName,
      "password": this.password
    })
  }

  constructor() { }

  ngOnInit(): void {
  }

}
