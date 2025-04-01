import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MyRfq } from '../../common/Rfq';
import { RfqService } from '../../service/rfq.service';
import { UserService } from '../../service/user.service';
import { AsyncPipe, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-RfqList',
  templateUrl: './RfqList.component.html',
  imports:[AsyncPipe, DatePipe,RouterLink],
  styleUrls: ['./RfqList.component.css']
})
export class RfqListComponent implements OnInit {
  myRfqList$:Observable<MyRfq[]>=new Observable<MyRfq[]>();
  rfqService=inject(RfqService);
  userService=inject(UserService);

  constructor() { }

  ngOnInit() {
    if(this.userService.loggedUserData)
    {
      this.myRfqList$= this.rfqService.getRFQ(this.userService.loggedUserData.userId);
    }
  }

}
