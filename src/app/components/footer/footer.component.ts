import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  @ViewChild('formEmail') formEmail!: NgForm;

  initForm = {
    email: '',
  };

  submit() {
    this.formEmail.reset({
      email: '',
    });
  }
}
