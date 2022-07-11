import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProvaService } from './prova.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptInterceptor } from './intercept.interceptor';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ProvaService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptInterceptor, multi: true },
  ]
})
export class CoreModule { }
