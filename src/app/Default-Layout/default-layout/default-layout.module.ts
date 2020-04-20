import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DefaultLayoutComponent } from "./default-layout.component";
import { ShareModule } from "../../sharedModule/share-module.module";
import { HomeComponent } from "../../Components/home/home.component";
import { RouterModule } from "@angular/router";
import { CardsComponent } from "../../Widgets/cards/cards.component";
import { MaterialModule } from "../../sharedModule/material-module.module";
import { LoadingScreenComponent } from "../loading-screen/loading-screen.component";
import { CardStatsComponent } from "src/app/sharedModule/card-stats/card-stats.component";

const declarationsComponents = [
  DefaultLayoutComponent,
  CardsComponent,
  LoadingScreenComponent,
  HomeComponent,
];
const exportComponents = [
  CommonModule,
  ShareModule,
  RouterModule,
  MaterialModule,
];
@NgModule({
  declarations: declarationsComponents,
  imports: exportComponents,
})
export class DefaultLayoutModule {}
