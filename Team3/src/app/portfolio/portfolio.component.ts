import { Component, OnInit } from '@angular/core';
import { IPortfolioC } from '../IPortfolio';
import { ActivatedRoute, Params } from '@angular/router';
import { DetailsService } from '../details.service';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  portCat: IPortfolioC[] = this.DS.portCat;
  picId:string = "details"
  constructor(private route: ActivatedRoute, private DS: DetailsService)
    { }

  categoryF(categoryC:string){
    this.DS.categoryC = categoryC;
    localStorage.setItem("chosenCategory", this.DS.categoryC)
  }

  ngOnInit(): void {
  };

}
