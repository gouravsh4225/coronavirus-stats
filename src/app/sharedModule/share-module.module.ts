import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./Header/Header.component";
import { SearchFilterComponent } from "./SearchFilter/SearchFilter.component";
import { CoronaMatTableComponent } from "./corona-mat-table/corona-mat-table.component";
import { MaterialModule } from "./material-module.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { CardStatsComponent } from "./card-stats/card-stats.component";

const ImportExportComponent = [
  HeaderComponent,
  SearchFilterComponent,
  CoronaMatTableComponent,
  CardStatsComponent,
];
@NgModule({
  declarations: ImportExportComponent,
  imports: [CommonModule, MaterialModule, FlexLayoutModule],
  exports: ImportExportComponent,
})
export class ShareModule {}
