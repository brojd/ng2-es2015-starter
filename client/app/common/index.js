import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { PtSpinnerComponent } from './components/pt-spinner/pt-spinner.component';

@NgModule({
  imports: [ CommonModule, FormsModule ],
  declarations: [ PtSpinnerComponent ],
  exports:      [ PtSpinnerComponent ]
})
export class PtCommonModule { }
