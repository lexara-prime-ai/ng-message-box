import { NgModule } from '@angular/core';
import { AngularMessageBoxComponent } from './angular-message-box.component';
import { AngularMessageBoxService } from './angular-message-box.service';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [AngularMessageBoxComponent],
  imports: [CommonModule],
  providers: [AngularMessageBoxService],
  exports: [AngularMessageBoxComponent]
})
export class AngularMessageBoxModule { }
