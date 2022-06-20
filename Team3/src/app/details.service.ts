import { Injectable } from '@angular/core';
import { IPortfolioC, IPortfolioPic } from './IPortfolio';
import { portfolioCategories, portfolioPictures } from './portfolio';
@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  portCat: IPortfolioC[] = portfolioCategories;
  portCatTemp: IPortfolioPic[] = [];
  portPics: IPortfolioPic[] = portfolioPictures;
  categoryC:string = "All";
  constructor() { }

  chosenCategory(cCategory:string) {
    this.portCatTemp = [];
    if (this.categoryC == "All") {
      for (let cat of this.portPics) {
        this.portCatTemp.push(cat)
      }
    }
    for (let cat of this.portPics){
      if (cCategory == cat.category) {
        this.portCatTemp.push(cat)
      }
    }
    console.log(this.portCatTemp)
  }
}
