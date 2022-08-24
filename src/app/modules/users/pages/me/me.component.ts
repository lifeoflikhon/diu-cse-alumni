import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {Observable} from "rxjs";
import {User} from "../../models/user";
import {AuthService} from "../../../auth/services/auth.service";

export interface MenuGroup {
  menus: Menu[];
  title: string;
}

export interface Menu {
  title: string;
  url: string;
  icon: string;
}

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.scss']
})
export class MeComponent implements OnInit {
  me$: Observable<User> = this.user.me();
  menuGroups: MenuGroup[] = [
    {
      title: 'My Profile',
      menus: [
        { title: 'Edit My Profile', icon: 'user-pen', url: '/users/me/edit' },
        { title: 'My Blogs', icon: 'books', url: '/blogs/authors/me' },
        { title: 'My Events', icon: 'smile', url: '/events/me' },
        { title: 'My Mails', icon: 'envelope', url: '/contact/me' },
        { title: 'My Payments', icon: 'dollar', url: '/payment/me' },
      ]
    },
    {
      title: 'Users',
      menus: [
        { title: 'Approved Users', icon: 'user-check', url: '/users/approved' },
        { title: 'Pending Users', icon: 'user-times', url: '/users/pending' },
      ]
    },
    {
      title: 'Payment',
      menus: [
        { title: 'All Payment', icon: 'dollar', url: '/payment/all' },
        { title: 'Confirmed Payment', icon: 'check-circle', url: '/payment/confirmed' },
      ]
    },
    {
      title: 'Blogs',
      menus: [
        { title: 'All Blogs', icon: 'books', url: '/blogs/all' },
        { title: 'All Authors', icon: 'users', url: '/blogs/authors' },
      ]
    },
    {
      title: 'Events',
      menus: [
        { title: 'Past Events', icon: 'reply-clock', url: '/events/past' },
        { title: 'Future Events', icon: 'hourglass-clock', url: '/events/future' },
      ]
    },
    {
      title: 'Contact',
      menus: [
        { title: 'All Mail', icon: 'envelope', url: '/contact/all' },
      ]
    }
  ];

  constructor(
    private user: UserService,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
  }

}
