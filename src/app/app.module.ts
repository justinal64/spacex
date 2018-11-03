import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { AppComponent } from "./app.component";
import { CardComponent } from "./components/card/card.component";
import { GridComponent } from "./components/grid/grid.component";
import { NavComponent } from "./components/nav/nav.component";
import { DraganddropComponent } from "./components/draganddrop/draganddrop.component";
import { CarouselComponent } from "./components/carousel/carousel.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

const appRoutes: Routes = [
  { path: "card", component: CardComponent },
  { path: "grid", component: GridComponent }
  // { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    GridComponent,
    NavComponent,
    DraganddropComponent,
    CarouselComponent
  ],
  imports: [
    DragDropModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
