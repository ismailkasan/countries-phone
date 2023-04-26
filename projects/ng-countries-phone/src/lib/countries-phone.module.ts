import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PhoneComponent } from './phone/phone.component';
import { MuskDirective } from './musk.directive';
import { CountriesService } from './countries-phone.service';



@NgModule({
  declarations: [
    PhoneComponent,
    MuskDirective
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule      
  ],
  providers: [CountriesService ],
  exports: [
    PhoneComponent
  ]
})
export class CountryPhoneModule { }
