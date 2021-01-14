import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactus: any = {};
  contactForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group(
      {
        name: new FormControl('', { validators: [Validators.required] }),
        email: new FormControl('', { validators: [Validators.required, Validators.pattern('[^ @]*@[^ @]*')] })
      });
  }
  onSubmit() {
    if (this.contactForm.valid) {
      this.router.navigate(['/home']);
    }
    localStorage.setItem('Users', JSON.stringify(this.contactForm.value));
  }

  goBack() {
    this.router.navigate(['/home']);
  }
}


