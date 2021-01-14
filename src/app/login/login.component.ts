import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { RegisterService } from '../signup/signup.service';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errMsg = '';
  isErrorOccured = false;

  constructor(private router: Router, private signUpService: RegisterService, private spinner: NgxSpinnerService,) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup(
      {
        userName: new FormControl('', { validators: [Validators.required] }),
        password: new FormControl('', { validators: [Validators.required, Validators.minLength(6)] })
      });
  }

  onSubmit(loginForm) {
    this.isErrorOccured = false;
    const errMsg = 'userName and password does not match..';
    this.spinner.show();
    const data = {
      userName: loginForm.value.userName
    };
    this.signUpService.fetchSingleUser(data).subscribe((returnData: any) => {
      this.spinner.hide();
      if (returnData !== null) {
        if (returnData.password === loginForm.value.password) {
          localStorage.setItem('userLoggedIn', 'true');
          this.router.navigate(['/home']);
        } else {
          this.goToError(errMsg);
        }
      } else {
        this.goToError(errMsg);
      }
    }, err => {
      this.spinner.hide();
      console.log('err in registering the data...', err);
      this.goToError(errMsg);
      this.router.navigate(['/login']);
    });
  }

  goToError(msg) {
    this.isErrorOccured = true;
    this.errMsg = msg;
  }

  goBack() {
    this.router.navigate(['/']);
  }

}
