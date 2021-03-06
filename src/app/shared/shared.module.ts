import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { SidebarComponent } from 'src/app/shared/components/sidebar/sidebar.component';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { AreasComponent } from './widgets/areas/areas.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { CardsComponent } from './widgets/cards/cards.component';
import { PieComponent } from './widgets/pie/pie.component';


@NgModule({
  declarations: [ HeaderComponent, SidebarComponent, FooterComponent, AreasComponent, CardsComponent, PieComponent ],
  imports: [ CommonModule, MatDividerModule, MatToolbarModule, MatIconModule, MatButtonModule, FlexLayoutModule, MatMenuModule, MatListModule,
             RouterModule, HighchartsChartModule],
  exports: [ HeaderComponent, SidebarComponent, FooterComponent, AreasComponent, CardsComponent, PieComponent ]
})
export class SharedModule { }
