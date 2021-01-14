import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { RegisterService } from '../signup/signup.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {
  title = 'angular-demo';
  tabledata: any;
  isNoData = false;
  public dtOptions: DataTables.Settings = {};
  public dtTrigger = new Subject();

  constructor(private router: Router, private signUpService: RegisterService) {
  }

  checkUserLoggedIn() {
    if (localStorage.getItem('userLoggedIn') === null || localStorage.getItem('userLoggedIn') === 'null')  {
      this.router.navigate(['/']);
    } else {
      this.fetchAllUsers();
    }
  }

  ngOnInit(): void {
    this.checkUserLoggedIn();
    this.dtOptions = {
      pagingType: 'simple',
      pageLength: 10,
      dom: 'p',
      info: false,
      scrollY: '100px',
      scrollCollapse: true,
      // pagingType: 'numbers'
      // pagingType: 'simple_numbers'
      // pagingType: 'full'
      // pagingType: 'full_numbers'
      // pagingType: 'first_last_numbers'
      responsive: true,
    };
  }

  fetchAllUsers() {
    this.signUpService.fetchAllStudents().subscribe((returnData: any) => {
      if (returnData !== null) {
        this.tabledata = returnData;
      } else {
        this.isNoData = true;
      }
    }, err => {
      this.isNoData = true;
      console.log('err in registering the data...', err);
      this.dtTrigger.next();
    });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}




