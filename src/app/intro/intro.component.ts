import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { PlatformLocation } from '@angular/common';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  constructor(private router: Router, private spinner: NgxSpinnerService, private authService : AuthService,
     private location: PlatformLocation) {
    // location.onPopState(() => {
    //   this.router.navigateByUrl('/');
    //   history.forward();
    // });
  }

  ngOnInit() {

    this.spinner.show();
    this.authService.signIn();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
    localStorage.setItem('userLoggedIn', null);
  }

  openHome() {
    this.router.navigate(['/home']);
  }
}



