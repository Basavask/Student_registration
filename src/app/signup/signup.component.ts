import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { RegisterService } from './signup.service';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: any = {};
  signupForm: FormGroup;
  constructor(private router: Router, private signupService: RegisterService, private spinner: NgxSpinnerService,
    private userService: UserService) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup(
      {
        firstName: new FormControl('', { validators: [Validators.required] }),
        lastName: new FormControl('', { validators: [Validators.required] }),
        userName: new FormControl('', { validators: [Validators.required] }),
        password: new FormControl('', { validators: [Validators.required, Validators.minLength(6)] })
      });
  }


  onSubmit() {
    this.spinner.show();
    this.user = Object.assign(this.user, this.signupForm.value);
    this.signupService.registerUser(this.user).subscribe(returnData => {
      this.spinner.hide();
      if (returnData) {
        this.router.navigate(['/login']);
      } else {
        alert('user not registered , pls try again...')
        this.router.navigate(['/signup']);
      }
    }, err => {
      this.spinner.hide();
      console.log('err in registering the data...', err);
      alert('user not registered , pls try again...')
      this.router.navigate(['/signup']);
    });
  }

  reset() {
    this.signupForm.reset();
  }

  goBack() {
    this.router.navigate(['/']);
  }
}






