import { Component } from '@angular/core';
import { CommonService } from './common.service';
import { generate } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'imggen';
  Search: string = ''
  image: any = 'https://via.placeholder.com/500'
  constructor(private ser:CommonService) {}

    generateImage() {
      console.log(this.Search);
      this.ser.GenerateImage(this.Search).subscribe({
        next:(data) => {
          alert("Get Image");
          console.log("data", data);
          this.image = data.data[0].url;
          console.log(this.image);
        }

      })
    }

  
}
