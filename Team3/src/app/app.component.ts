import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Team3';
  onActivate(event: any) {
    // window.scroll(0,0);
  
    window.scroll({ 
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
     });
  
  }
}

