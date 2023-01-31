import { Injectable } from '@angular/core';
import { Artist } from '../interfaces/artist.interface';

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
}
