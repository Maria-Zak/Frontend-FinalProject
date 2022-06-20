import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { portfolioPictures } from '../portfolio';
import { IPortfolio } from '../IPortfolio';
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  portPic: IPortfolio = {} as IPortfolio;
  id: number = 0;
  constructor(private route: ActivatedRoute, private DS: DetailsService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['picId'];
      this.portPic = this.DS.portPics[this.id];
    });
  }

}
