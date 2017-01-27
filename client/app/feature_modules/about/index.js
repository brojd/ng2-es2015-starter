import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PtCommonModule } from '../../common';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  imports: [ CommonModule, PtCommonModule ],
  declarations: [ AboutComponent ],
  exports:      [ AboutComponent ]
})
export class AboutModule { }
