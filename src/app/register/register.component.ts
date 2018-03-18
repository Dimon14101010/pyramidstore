import {Component, OnInit} from "@angular/core";
import {FormGroup, Validators, FormControl} from "@angular/forms";
import {Router} from "@angular/router";
import {BackendService} from "../services/backend.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.css']
})


export class RegisterComponent implements OnInit {

  emailPattern: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  constructor(private router: Router, private backend: BackendService) {
  }

  public registerForm: FormGroup;

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
      ]),
      middleName: new FormControl('', [
        Validators.required,
      ]),
      lastName: new FormControl('', [
        Validators.required,
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(this.emailPattern)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      confirm: new FormControl('', [
          Validators.required,
          Validators.minLength(6)
      ])
    }, this.passwordMatchValidator);
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('password').value === g.get('confirm').value
      ? null : {'mismatch': true};
  }

  removeReadOnly(event) {
    const element = document.getElementById(event.srcElement.id);
    element.removeAttribute('readonly');
  }

  login() {
    if (this.registerForm.valid) {
      const data = Object.assign({}, this.registerForm.value);
      console.log(data);
      this.backend.register(data).subscribe(response => console.log(response));
      // this.router.navigate(['dashboard']);

      console.log('login complete', this.registerForm);
    } else {console.log('no validate !!!');}
  }
}
