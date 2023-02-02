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
    this.sidenav?.classList.remove('hidden');
  }

  close() {
    this.sidenav?.classList.add('hidden');
  }
}
