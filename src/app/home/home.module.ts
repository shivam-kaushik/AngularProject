import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms'

import { MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  declarations: [MatSidenavModule],
  imports: [
    CommonModule,
    FormsModule,
    MatSidenavModule
  ]
})
export class HomeModule { }
