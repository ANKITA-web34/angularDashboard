import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { MapComponent } from './map/map.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card'
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardService } from 'src/app/modules/dashboard.service';
import { GoogleMapsModule } from '@angular/google-maps';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PostsComponent } from 'src/app/modules/Drag-Drop/posts.component';
import { DragDropDirective } from './drag-drop.directive';
import { AddAgentComponent } from 'src/app/List/agent/add-agent/add-agent.component';
import { AgentListComponent } from 'src/app/List/agent/agent-list/agent-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { AddCustomerComponent } from 'src/app/List/customer/add-customer/add-customer.component';
import { CustomerListComponent } from 'src/app/List/customer/customer-list/customer-list.component';
import { AddOrderComponent } from 'src/app/List/order/add-order/add-order.component';
import { OrderListComponent } from 'src/app/List/order/order-list/order-list.component';

@NgModule({
  declarations: [ DefaultComponent, DashboardComponent, PostsComponent, MapComponent, DragDropDirective, AddAgentComponent,
                  AgentListComponent, AddCustomerComponent, CustomerListComponent, AddOrderComponent, OrderListComponent   ],
  imports: [ CommonModule, RouterModule, SharedModule, MatSidenavModule, MatDividerModule, MatCardModule, FlexLayoutModule,
             GoogleMapsModule, DragDropModule, MatTableModule, MatPaginatorModule, MatFormFieldModule, MatInputModule, FormsModule],
  providers: [ DashboardService ],
})
export class DefaultModule { }
