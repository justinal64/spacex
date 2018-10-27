import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.css"]
})
export class CarouselComponent implements OnInit {
  @Input()
  Carousel: any[];
  constructor() {}

  ngOnInit() {
    this.Carousel = [
      {
        src:
          "https://www.trbimg.com/img-5b846dd6/turbine/os-spacex-telstar18-launch-20180827",
        description: "Nasa Astronauts on crew dragon"
      },
      {
        src:
          "https://www.trbimg.com/img-5b846dd6/turbine/os-spacex-telstar18-launch-20180827",
        description: "First passanger on lunar bfr mission"
      },
      {
        src:
          "https://www.trbimg.com/img-5b846dd6/turbine/os-spacex-telstar18-launch-20180827",
        description: "Making life Multiplanetary"
      }
    ];
  }

  public test() {
    console.log("test worked!!!!");
  }
}
