import { Injectable } from '@angular/core';
import { Artist } from '../interfaces/artist.interface';
import { Song } from '../interfaces/song.interface';
import { Stream } from '../interfaces/stream.interface';
import { OtherRelease } from '../interfaces/other-release.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  //Datos main component
  public releaseData: string = 'Uncaged - Released January 30,2023';
  public releaseImgUrl: string = 'assets/images/600.webp';
  public releaseName: string = 'Hit my line';
  public subText: string = 'Skyler';
  public listArtirst: Artist[] = [
    {
      name: 'Skyler',
      imgUrl: 'assets/images/artist1.webp',
    },
    {
      name: 'Dani King',
      imgUrl: 'assets/images/artist2.webp',
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

  //Datos other release component
  public listOtherReleases: OtherRelease[] = [
    {
      imgUrl: 'assets/images/image_release_1.webp',
      name: 'Chasing stars',
      artist: 'Skyler Madison',
    },
    {
      imgUrl: 'assets/images/image_release_2.webp',
      name: 'Phoenix',
      artist: 'Skyler Madison feat. GLNNA',
    },
    {
      imgUrl: 'assets/images/image_release_3.webp',
      name: 'Be cool',
      artist: 'Bishu feat. Rue Melo',
    },
    {
      imgUrl: 'assets/images/image_release_4.webp',
      name: 'Solid ground',
      artist: 'Bishu & Casey Cook',
    },
    {
      imgUrl: 'assets/images/image_release_5.webp',
      name: 'Dream of you',
      artist: 'Bishu',
    },
    {
      imgUrl: 'assets/images/image_release_6.webp',
      name: 'Behind your eyes',
      artist: 'Bishu & Juneau',
    },
    {
      imgUrl: 'assets/images/image_release_7.webp',
      name: 'Hurt me too',
      artist: 'Bishu feat McCall',
    },
  ];
}
