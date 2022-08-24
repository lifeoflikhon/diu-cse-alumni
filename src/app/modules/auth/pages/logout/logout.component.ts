import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {LoaderService} from "../../../../core/services/loader.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private loader: LoaderService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loader.load(
      this.auth.signOut(),
      'Logging out...',
      'Logout succeeded!'
    )
      .subscribe({
        next: res => {
          this.router.navigate(['/auth/login']);
        },
        error: err => {}
      });
  }

}
