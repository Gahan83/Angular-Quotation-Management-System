import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RfqService } from '../../service/rfq.service';
import { Rfq } from '../../common/Rfq';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-createRfq',
  templateUrl: './createRfq.component.html',
  imports:[ReactiveFormsModule], 
  styleUrls: ['./createRfq.component.css']
})
export class CreateRfqComponent implements OnInit {

  rfqForm:FormGroup=new FormGroup({});
  rfqService=inject(RfqService);
  userService=inject(UserService);

  constructor() {}

  ngOnInit() {
    this.createForm();
  }

  createForm()
  {
    this.rfqForm=new FormGroup({
      rfqId: new FormControl(0),
      manufacturerId: new FormControl(this.userService.loggedUserData?.userId),
      partName: new FormControl(""),
      rfqName: new FormControl(""),
      description: new FormControl(""),
      quantity: new FormControl(""),
      dimension: new FormControl(""),
      requiredByDate: new FormControl(""),
      status: new FormControl(""),
      createdDate: new FormControl(new Date()),
    })
  }

  onSave()
  {
    const formObj=this.rfqForm.value;
    this.rfqService.createRFQ(formObj).subscribe((res:Rfq)=>{
      alert("Rfq created successfully")
    },error=>{
      alert(error.error);
    }
  )
  }

}
