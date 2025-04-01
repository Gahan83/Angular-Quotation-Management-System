import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RfqService } from '../../service/rfq.service';
import { UserService } from '../../service/user.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-open-rfq',
  templateUrl: './open-rfq.component.html',
  imports:[DatePipe],
  styleUrls: ['./open-rfq.component.css']
})
export class OpenRfqComponent implements OnInit {
  currentRfqId:number=0;
  rfqService=inject(RfqService);
  userService=inject(UserService);
  rfqDetails:any;
  quotesList:any[]=[];

  constructor(private readonly activatedRoute:ActivatedRoute) { 
    this.activatedRoute.params.subscribe((res:any)=>{
      this.currentRfqId=res.id;
      this.getRfqDetails();
      this.getQuotes();
    })
  }

  ngOnInit() {
  }

  getRfqDetails()
  {
    this.rfqService.getRFQById(this.currentRfqId).subscribe((res:any)=>{
      this.rfqDetails=res;
    })
  }

  getQuotes()
  {
    this.rfqService.getAllQuotesByQfqId(this.currentRfqId).subscribe((res:any)=>{
      this.quotesList=res;
    })
  }
}
