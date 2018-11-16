import { Component, OnInit, Input } from "@angular/core";
import { CarouselData } from "src/app/data";

interface Item {
  src: string;
  description: string;
}

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.css"]
})
export class CarouselComponent implements OnInit {
  @Input()
  Carousel: any[];
  CarouselImgSrc = CarouselData[2].src;
  CarouselDesc = CarouselData[2].description;
  Iterate = 0;
  TransBg: any;
  constructor() {}

  ngOnInit() {
    this.Carousel = CarouselData;
    setInterval(() => {
      this.changeCarousel(this.Carousel[this.Iterate]);
      if (this.Iterate === this.Carousel.length - 1) {
        this.Iterate = 0;
      } else {
        this.Iterate++;
      }
    }, 10000);
  }

  public changeCarousel(item: Item) {
    this.TransBg = item;
    this.CarouselImgSrc = item.src;
    this.CarouselDesc = item.description;
  }
}
