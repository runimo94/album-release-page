import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  faAngleUp = faAngleUp;

  private sidenav?: HTMLElement | null;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.sidenav = document.getElementById('rightSideNav');
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.el.nativeElement.contains(event.target)) {
      this.close();
    }
  }

  close() {
    this.sidenav?.classList.add('hidden');
  }

  handleSideNav() {
    this.sidenav?.classList.toggle('hidden');
  }

  show(event: any) {
    const target = event.target as HTMLElement;
    const parent = target.closest('li');
    const ulElement = parent?.querySelector('ul.childList');
    const faIconElement = target.querySelector('fa-icon');

    ulElement?.classList.toggle('hidden');
    ulElement?.classList.toggle('flex');

    faIconElement?.classList.toggle('fa-rotate-90');
  }
}
