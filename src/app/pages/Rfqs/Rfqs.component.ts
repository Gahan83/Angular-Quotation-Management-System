import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { RfqService } from '../../service/rfq.service';
import { MyRfq } from '../../common/Rfq';
import { DatePipe } from '@angular/common';
import { UserService } from '../../service/user.service';
import { Quotes } from '../../common/quotes';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-Rfqs',
  templateUrl: './Rfqs.component.html',
  imports:[DatePipe,FormsModule],
  styleUrls: ['./Rfqs.component.css']
})
export class RfqsComponent implements OnInit {
  @ViewChild('quoteModal') myquoteModal!:ElementRef;
  rfqService=inject(RfqService);
  userService=inject(UserService);
  rfqList:MyRfq[]=[];
  quoteobj:Quotes={
  "quoteId": 0,
  "rfqId": 0,
  "supplierId": 0,
  "quotedPrice": 0,
  "estimatedDeliveryDate": "",
  "additionalNotes": "",
  "createdDate": new Date()
  }
  constructor() { }

  ngOnInit() {
    this.getAllRfqs();
  }

  private getAllRfqs() {
    this.rfqService.getRFQs().subscribe((res) => {
      this.rfqList = res;
    });
  }

  public openQuotesModal(rfqId:number)
  {
    if(this.userService.loggedUserData)
    {
      this.quoteobj.rfqId=rfqId;
      this.quoteobj.supplierId=this.userService.loggedUserData.userId;
      if(this.myquoteModal)
      {
        this.myquoteModal.nativeElement.style.display="block"
      }
    }
    else
    {
      alert("Please Login to Quotes")
    }

  }

  public closeQuotesModal()
  {
      if(this.myquoteModal)
      {
        this.myquoteModal.nativeElement.style.display="none"
      }
  }

  public onSend()
  {
    this.rfqService.createQuotes(this.quoteobj).subscribe((res)=>{
      alert("Quote created by customer")
    },error=>{
      alert(error.error.message);
    })
  }
}
