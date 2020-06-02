import { Component, OnInit } from '@angular/core';
import { TeetimeService } from 'src/app/teetime.service';
import { Teetime } from 'src/app/teetime.model';


@Component({
  selector: 'app-book-time',
  templateUrl: './book-time.component.html',
  styleUrls: ['./book-time.component.css']
})
export class BookTimeComponent implements OnInit {

  constructor(private TeetimeService: TeetimeService) { }

  ngOnInit(): void {
  }

  date: string;
  time: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  hole: string;

  submit(){
    let newTime = {
      date: this.date,
      time: this.time,
      firstName: this.firstName,
      lastName: this.lastName,
      phone: this.phone,
      email: this.email,
      holes: this.hole,
      paid: false
    }
    this.date = '';
    this.time = '';
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.hole = '';
    this.phone = '';
    this.TeetimeService.createTeeTime(newTime);
  }

}
