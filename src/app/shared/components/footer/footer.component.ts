import { Component, OnInit } from '@angular/core';

export interface SocialLink {
  title: string;
  icon: string;
  url: string;
}

@Component({
  selector: 'footer[app-footer]',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  socialLinks: SocialLink[] = [
    { icon: 'facebook', url: 'https://facebook.com/diucsealumni', title: 'diucsealumni' },
    { icon: 'youtube', url: 'https://youtube.com/diucsealumni', title: 'diucsealumni' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
