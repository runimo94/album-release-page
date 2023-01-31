import { Component } from '@angular/core';
import { Artist } from 'src/app/interfaces/artist.interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  public releaseData?: string;
  public releaseImgUrl?: string;
  public releaseName?: string;
  public subText?: string;
  public listArtist?: Artist[];

  constructor(private data: DataService) {
    this.releaseData = this.data.releaseData;
    this.releaseImgUrl = this.data.releaseImgUrl;
    this.releaseName = this.data.releaseName;
    this.subText = this.data.subText;
    this.listArtist = this.data.listArtirst;
  }
}
