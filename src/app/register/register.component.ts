import { Component, Input, OnChanges, OnInit, SimpleChanges, AfterContentChecked, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { RegisterService } from '../signup/signup.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, AfterViewInit {
  constructor(private router: Router, private signUpService: RegisterService,
    private fb: FormBuilder, private spinner: NgxSpinnerService, private dialog: MatDialog) { }

  get email() {
    return this.regForm.get('email');
  }
  @ViewChild('label') label: ElementRef;
  name: string;
  user: any = {};
  regForm: FormGroup;
  showloader: Boolean;
  countryList = [
    { name: 'Afghanisthan' },
    { name: 'Bangladesh' },
    { name: 'India' },
    { name: 'Japan' }
  ];

  ngOnInit(): void {
    this.regForm = this.fb.group({
      username: new FormControl('', { validators: [Validators.required] }),
      dob: new FormControl('', { validators: [Validators.required] }),
      email: new FormControl('', { validators: [Validators.required, Validators.pattern('[^ @]*@[^ @]*')] }),
      nationality: new FormControl('', { validators: [Validators.required] }),
      gender: new FormControl('', { validators: [Validators.required] })
    });

    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
  }

  onSubmit() {
    if (this.regForm.valid) {
      this.user = Object.assign(this.user, this.regForm.value);
      this.signUpService.saveStudentInfo(this.user).subscribe(returnData => {
        if (returnData) {
          this.router.navigate(['/home']);
        } else {
          alert('user not registered , pls try again...')
          this.router.navigate(['/signup']);
        }
      }, err => {
        console.log('err in registering the data...', err);
        alert('user not registered , pls try again...')
        this.router.navigate(['/signup']);
      });
    }
  }

  reset() {
    this.regForm.reset();
  }
  setValue() {
    this.name = 'pranathi';
  }
  openDialog() {
    this.dialog.open(DialogComponent);
  }
  ngAfterViewInit() {
    console.log(this.label);
    this.label.nativeElement.setAttribute('style', 'color:red');

  }
}
