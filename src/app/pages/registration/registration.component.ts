import { Component, inject, Inject, OnInit, signal } from '@angular/core';
import { Register } from '../../model/Register';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { IApiRegister } from '../../Interface/Register';
import { IApiLogin } from '../../Interface/Login';
import { Login } from '../../model/Login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  imports:[FormsModule],
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  isLoginVisible=signal<boolean>(true);
  registerObj:Register=new Register();
  loginObj:Login=new Login();
  userService=inject(UserService);
  router=inject(Router);
  constructor() { }

  ngOnInit() {
  }



  public setRole(role:string):void
  {
      this.registerObj.role=role;
  }

  public onSignUp():void
  {
      this.userService.onRegister(this.registerObj).subscribe((res:IApiRegister)=>{
        if(res.result)
        {
          alert('Successfully Registered!')
          this.registerObj=new Register();
        }
        else
        {
          alert(res.message);
        }
      })
  }

  public onLogin()
  {
    this.userService.onLogin(this.loginObj).subscribe((res:IApiLogin)=>{
      if(res.result)
      {
        alert('Successfully Registered!')
        sessionStorage.setItem("RfqUser", JSON.stringify(res.data));
        this.userService.setUserData();
        this.router.navigateByUrl("/home")
      }
      else
      {
        alert(res.message);
      }
    })
  }
}
