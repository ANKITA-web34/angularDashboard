import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layout/default/default.component';
import { PostsComponent } from './modules/Drag-Drop/posts.component';
import { MapComponent } from './layout/default/map/map.component';
import { AgentListComponent } from './List/agent/agent-list/agent-list.component';
import { AddAgentComponent } from './List/agent/add-agent/add-agent.component';
import { CustomerListComponent } from './List/customer/customer-list/customer-list.component';
import { AddCustomerComponent } from './List/customer/add-customer/add-customer.component';
import { OrderListComponent } from './List/order/order-list/order-list.component';
import { AddOrderComponent } from './List/order/add-order/add-order.component';

const routes: Routes = [
  { path: '', component: DefaultComponent, 
    children: [
      { path:'', component: DashboardComponent }, 
      { path:'posts', component: PostsComponent },
      { path: 'map', component: MapComponent},
      { path: 'agent-list', component: AgentListComponent},
      { path: 'add-agent',  component: AddAgentComponent },
      { path: 'customer-list', component: CustomerListComponent },
      { path: 'add-customer', component: AddCustomerComponent},
      { path: 'order-list', component: OrderListComponent},
      { path: 'add-order', component: AddOrderComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
