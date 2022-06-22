import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../details.service';


@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent implements OnInit {
 
  constructor(public DS: DetailsService) { }

  ngOnInit(): void {
  }

goToPortfolio(){
  this.DS.categoryC = "All"
}
}
