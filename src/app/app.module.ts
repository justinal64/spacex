import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppComponent } from "./app.component";
import { CardComponent } from "./components/card/card.component";
import { GridComponent } from "./components/grid/grid.component";

const appRoutes: Routes = [
  { path: "card", component: CardComponent },
  { path: "grid", component: GridComponent }
  // { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  declarations: [AppComponent, CardComponent, GridComponent],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
