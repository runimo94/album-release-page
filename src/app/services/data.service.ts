import { Injectable } from '@angular/core';
import { Artist } from '../interfaces/artist.interface';
import { Song } from '../interfaces/song.interface';
import { Stream } from '../interfaces/stream.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  //Datos main component
  public releaseData: string = 'Uncaged - Released January 30,2023';
  public releaseImgUrl: string = '../assets/images/600.webp';
  public releaseName: string = 'Hit my line';
  public subText: string = 'Skyler';
  public listArtirst: Artist[] = [
    {
      name: 'Skyler',
      imgUrl: '../assets/images/artist1.webp',
    },
    {
      name: 'Goiko',
      imgUrl: '../assets/images/artist2.webp',
    },
  ];

  //Datos stream it component
  public listStreams: Stream[] = [
    {
      name: 'Bandcamp',
      urlImg: '../assets/social/monstercatplayer.svg',
      url: '',
    },
    {
      name: 'Soundcloud',
      urlImg: '../assets/social/monstercatplayer.svg',
      url: '',
    },
    {
      name: 'Apple music',
      urlImg: '../assets/social/monstercatplayer.svg',
      url: '',
    },
    {
      name: 'Youtube',
      urlImg: '../assets/social/monstercatplayer.svg',
      url: '',
    },
    {
      name: 'Spotify',
      urlImg: '../assets/social/monstercatplayer.svg',
      url: '',
    },
  ];

  //Datos track list component
  public trackList: Song[] = [
    {
      name: 'The small things',
      artistName: 'Skyler',
      duration: 120,
    },
    {
      name: 'Without your love',
      artistName: 'Skyler',
      duration: 164,
    },
    {
      name: 'Therapy',
      artistName: 'Skyler',
      duration: 195,
    },
    {
      name: 'Fighters',
      artistName: 'Skyler',
      duration: 180,
    },
    {
      name: 'Way up',
      artistName: 'Skyler',
      duration: 245,
    },
    {
      name: 'Waiting',
      artistName: 'Skyler',
      duration: 210,
    },
  ];
}
