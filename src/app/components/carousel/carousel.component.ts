import { Component, OnInit, Input } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";

interface Item {
  src: string;
  description: string;
}

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.css"],
  animations: [
    trigger("openClose", [
      state(
        "open",
        style({
          height: "200px",
          opacity: 1,
          backgroundColor: "yellow"
        })
      ),
      state(
        "closed",
        style({
          height: "100px",
          opacity: 0.5,
          backgroundColor: "green"
        })
      ),
      transition("open => closed", [animate("2s")]),
      transition("closed => open", [animate("2.5s")])
    ]),
    trigger("slideIn", [
      state(
        "open",
        style({
          height: "200px",
          opacity: 1,
          backgroundColor: "yellow"
        })
      ),
      state(
        "closed",
        style({
          height: "100px",
          opacity: 0.5,
          backgroundColor: "green"
        })
      ),
      transition("open => closed", [animate("2s")]),
      transition("closed => open", [animate("2.5s")])
    ]),
    trigger("slide", [
      state("left", style({ transform: "translateX(0)" })),
      state("right", style({ transform: "translateX(-50%)" })),
      transition("* => *", animate(300))
    ])
  ]
})
export class CarouselComponent implements OnInit {
  @Input()
  Carousel: any[];
  CarouselImgSrc =
    "https://cdn.teslarati.com/wp-content/uploads/2017/09/SpaceX-Moon-Base-SpaceX.jpg";
  CarouselDesc = "First Passenger On Lunar BFR Mission";
  Iterate = 0;
  // test area
  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }
  // end test area
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
          // tslint:disable-next-line:max-line-length
          "https://img.purch.com/h/1000/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3My85MTUvb3JpZ2luYWwvZmFsY29uLWhlYXZleS1zcGFjZXgtYnVpbGRpbmcuanBn",
        description: "First passanger on lunar bfr mission"
      },
      {
        src:
          // tslint:disable-next-line:max-line-length
          "https://mediadc.brightspotcdn.com/dims4/default/b1b254f/2147483647/strip/true/crop/1920x1080+0+0/resize/1920x1080!/quality/90/?url=https%3A%2F%2Fmediadc.brightspotcdn.com%2F74%2F73%2F4c2b67b3e5e6fdc65dff3dedebb6%2F74aa12b9888e1ff8c6c5feb7f3f51268.jpg",
        description: "Making life Multiplanetary"
      }
    ];
    setInterval(() => {
      this.changeCarousel(this.Carousel[this.Iterate]);
      this.toggle();
      this.Iterate =
        this.Iterate === this.Carousel.length - 1 ? 0 : this.Iterate++;
    }, 3000);
  }

  public changeCarousel(item: Item) {
    this.CarouselImgSrc = item.src;
    this.CarouselDesc = item.description;
  }
}
