import { Component, OnInit } from '@angular/core';
import { portfolioPictures } from '../portfolio';
import { IPortfolio } from '../IPortfolio';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  portPics : IPortfolio[] = portfolioPictures;
  portPic: IPortfolio = {} as IPortfolio;
  id: number = 0;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['picId'];
      this.portPic = this.portPics[this.id];
    });
  };

}
