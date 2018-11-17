import { Component, OnInit, Input } from "@angular/core";
import { CarouselData } from "src/app/data";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"]
})
export class CardComponent implements OnInit {
  @Input()
  Cards = CarouselData;
  constructor() {}

  ngOnInit() {}
}
