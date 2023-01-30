import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  private sidenav?: HTMLElement | null;

  ngOnInit(): void {
    this.sidenav = document.getElementById('rightSideNav');
  }

  open() {
    // this.sidenav?.classList.add('animate__slideInRight');
    this.sidenav?.classList.remove('hidden');
    // this.sidenav?.classList.remove('animate__slideOutRight');
  }

  close() {
    // this.sidenav?.classList.add('animate__slideOutRight');
    // this.sidenav?.classList.remove('animate__slideInRight');
    this.sidenav?.classList.add('hidden');
  }
}
