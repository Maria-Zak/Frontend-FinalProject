import { Component, OnInit } from '@angular/core';
import { portfolioPictures } from '../portfolio';
import { IPortfolio } from '../IPortfolio';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  portPics : IPortfolio[] = []

  constructor() { }

  ngOnInit(): void {
  };

}
