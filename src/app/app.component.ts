import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { UserService } from './service/user.service';
import { IUser } from './Interface/User';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

 userService=inject(UserService);
 router=inject(Router);

 ngOnInit(): void {

}

public onLogOff()
{
  this.userService.loggedUserData=undefined;
  sessionStorage.removeItem("RfqUser");
  this.router.navigateByUrl("/home")
}

}
