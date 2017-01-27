import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PtCommonModule } from '../../common';
import { MyProfileComponent } from './components/my-profile/my-profile.component';

@NgModule({
  imports: [ CommonModule, PtCommonModule ],
  declarations: [ MyProfileComponent ],
  exports:      [ MyProfileComponent ]
})
export class MyProfileModule { }
