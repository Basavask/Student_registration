import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor(private router: Router) { }
  @Input() myFriend: string;
  @Output() onClick = new EventEmitter();


  ngOnInit() {
  }
  openHome(){
    this.router.navigate(['/home']);
  }

}
