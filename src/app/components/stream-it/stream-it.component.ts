import { Component } from '@angular/core';
import { Stream } from 'src/app/interfaces/stream.interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-stream-it',
  templateUrl: './stream-it.component.html',
  styleUrls: ['./stream-it.component.scss'],
})
export class StreamItComponent {
  public listStreams?: Stream[];

  constructor(private data: DataService) {
    this.listStreams = this.data.listStreams;
  }
}
