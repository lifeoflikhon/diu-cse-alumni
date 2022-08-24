import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {Observable} from "rxjs";
import {User} from "../../models/user";
import {AuthService} from "../../../auth/services/auth.service";

export interface MenuGroup {
  menus: Menu[];
  title: string;
  shown?: string;
}

export interface Menu {
  title: string;
  url: string;
  icon: string;
  shown?: string;
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
      shown: 'emailVerified',
      menus: [
        { title: 'Edit My Profile', icon: 'user-pen', url: '/users/me/edit', shown: 'emailVerified' },
        { title: 'My Blogs', icon: 'books', url: '/blogs/authors/me', shown: 'approved' },
        { title: 'My Events', icon: 'smile', url: '/events/me', shown: 'approved' },
        { title: 'My Mails', icon: 'envelope', url: '/contact/me', shown: 'emailVerified' },
        { title: 'My Payments', icon: 'dollar', url: '/payment/me', shown: 'emailVerified' },
      ]
    },
    {
      title: 'Users',
      shown: 'admin',
      menus: [
        { title: 'Approved Users', icon: 'user-check', url: '/users/approved' },
        { title: 'Pending Users', icon: 'user-times', url: '/users/pending' },
      ]
    },
    {
      title: 'Payment',
      shown: 'treasurer',
      menus: [
        { title: 'All Payment', icon: 'dollar', url: '/payment/all' },
        { title: 'Confirmed Payment', icon: 'check-circle', url: '/payment/confirmed' },
      ]
    },
    {
      title: 'Blogs',
      shown: 'executiveMember',
      menus: [
        { title: 'All Blogs', icon: 'books', url: '/blogs/all' },
        { title: 'All Authors', icon: 'users', url: '/blogs/authors' },
      ]
    },
    {
      title: 'Events',
      shown: 'executiveMember',
      menus: [
        { title: 'Past Events', icon: 'reply-clock', url: '/events/past' },
        { title: 'Future Events', icon: 'hourglass-clock', url: '/events/future' },
      ]
    },
    {
      title: 'Contact',
      shown: 'admin',
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
