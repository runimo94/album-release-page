import { Component } from '@angular/core';
import { Song } from 'src/app/interfaces/song.interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.scss'],
})
export class TrackListComponent {
  public trackList?: Song[];

  constructor(private data: DataService) {
    this.trackList = this.data.trackList;
  }
}
