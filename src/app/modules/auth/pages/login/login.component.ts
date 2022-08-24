import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {LoaderService} from "../../../../core/services/loader.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router,
    private loader: LoaderService
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.loader.load(
      this.auth.registerOrLogin(),
      'Logging in...',
      'Logged in successfully! Welcome back.'
    )
      .subscribe({
        next: (res) => {
          this.router.navigate(['/users/me']);
        },
        error: err => {}
      });
  }
}
