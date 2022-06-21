import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IPortfolioC, IPortfolioPic } from '../IPortfolio';
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  portCat: IPortfolioC[] = this.DS.portCat
  portPics: IPortfolioPic[] = this.DS.portCatTemp;
  index: number = 0;
  constructor(private route: ActivatedRoute, public DS: DetailsService) { }

  ngOnInit(): void {
    this.DS.chosenCategory(this.DS.categoryC)
  }
  ngDoCheck(): void {
    this.portPics = this.DS.portCatTemp
  }
  changeCat(aCategory:string) {
    this.DS.categoryC = aCategory;
    this.index = 0;
  }
  changePic(picNumber:number) {
    this.index = picNumber;
  }
  indexPlus(){
    this.index++;
    if (this.index == this.portPics.length){
      this.index = 0;
    }
  }
  indexMinus(){
    if (this.index < 1){
      this.index = this.portPics.length - 1
    } else {
      this.index--;
    }
  }
}
