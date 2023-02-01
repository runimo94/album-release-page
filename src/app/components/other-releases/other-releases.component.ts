import { Component } from '@angular/core';
import { OtherRelease } from 'src/app/interfaces/other-release.interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-other-releases',
  templateUrl: './other-releases.component.html',
  styleUrls: ['./other-releases.component.scss'],
})
export class OtherReleasesComponent {
  public listOtherReleases?: OtherRelease[];

  constructor(private data: DataService) {
    this.listOtherReleases = this.data.listOtherReleases;
  }
}
