import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridComponent } from './components/grid/grid.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ButtonComponent } from './components/button/button.component';
import { CdkDropList, CdkDrag } from '@angular/cdk/drag-drop';
import { ContextMenuComponent } from './components/context-menu/context-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    ButtonComponent,
    ContextMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatTableModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatSortModule,
    MatPaginatorModule,
    CdkDropList, 
    CdkDrag,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
