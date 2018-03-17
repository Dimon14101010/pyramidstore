import {Component, OnInit, ViewChild} from "@angular/core";
import {FormGroup, Validators, FormControl} from "@angular/forms";
import {BackendService} from "../services/backend.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.css']
})


export class LoginComponent implements OnInit {

  emailPattern: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  constructor(private backend: BackendService, private router: Router) {
  }

  public loginForm: FormGroup;

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(this.emailPattern)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ])
    });
  }

  removeReadOnly(event) {
    const element = document.getElementById(event.srcElement.id);
    element.removeAttribute('readonly');
  }

  login() {
    if (this.loginForm.valid) {
      // this.backend.login().subscribe();
      this.onSuccessLogin();
    } else {
      console.log('no validate !!!');
    }
  }

  onSuccessLogin() {
    this.router.navigateByUrl('dashboard').then(() => console.log('perehod'));
  }
}
