import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DefaultLayoutComponent } from "./default-layout.component";
import { ShareModule } from "../../sharedModule/share-module.module";
import {HomeComponent} from "../../Components/home/home.component";
import {RouterModule} from "@angular/router";
import {ContactComponent} from "../../Components/contact/contact.component";
import {CardsComponent} from "../../Widgets/cards/cards.component";
import {MaterialModule} from "../../sharedModule/material-module.module";

@NgModule({
  declarations: [DefaultLayoutComponent,CardsComponent,
    HomeComponent, ContactComponent],
  imports: [CommonModule, ShareModule, RouterModule,MaterialModule],

})
export class DefaultLayoutModule {}
