import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IPortfolioC, IPortfolioPic } from '../IPortfolio';
import { DetailsService } from '../details.service';
import { portfolioPictures, portfolioCategories } from '../portfolio';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  portCat: IPortfolioC[] = this.DS.portCat
  portPics: IPortfolioPic[] = this.DS.portCatTemp;
  id: number = 0;
  constructor(private route: ActivatedRoute, public DS: DetailsService) { }

  ngOnInit(): void {
    this.DS.chosenCategory(this.DS.categoryC)
    // this.route.params.subscribe((params: Params) => {
    //   this.id = +params['picId'];
    //   this.portPic = this.DS.portCat[this.id];
    // });
  }
  ngDoCheck(): void {
    this.portPics = this.DS.portCatTemp
  }
  changeCat(aCategory:string) {
    this.DS.categoryC = aCategory;
  }

}
