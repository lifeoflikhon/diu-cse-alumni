import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.auth.registerOrLogin()
      .subscribe({
        next: (res) => {
          console.log(res)
        },
        error: err => {}
      });
  }
}
