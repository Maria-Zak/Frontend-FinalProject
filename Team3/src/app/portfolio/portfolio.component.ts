import { Component, OnInit } from '@angular/core';
import { portfolioPictures } from '../portfolio';
import { IPortfolio } from '../IPortfolio';
import { ActivatedRoute, Params } from '@angular/router';
import { DetailsService } from '../details.service';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  portPics: IPortfolio[] = this.DS.portPics;
  portPic: IPortfolio = {} as IPortfolio;
  id: number = 0;
  
  constructor(private route: ActivatedRoute, private DS: DetailsService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['picId'];
      this.portPic = this.DS.portPics[this.id];
    });
  };

}
