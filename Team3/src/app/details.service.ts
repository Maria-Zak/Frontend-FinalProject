import { Injectable } from '@angular/core';
import { IPortfolio } from './IPortfolio';
import { portfolioPictures } from './portfolio';
@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  portPics: IPortfolio[] = portfolioPictures;

  constructor() { }
}
