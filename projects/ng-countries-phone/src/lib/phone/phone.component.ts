import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CountriesService } from '../countries-phone.service';
import { FormGroup } from '@angular/forms';

export interface Phone {
  name: string,
  dial_code: string,
  code: string
}

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnChanges {
  
  @Input() codeLabelText: string = 'Country Code';
  @Input() phoneLabelText: string = 'Phone Number';
  @Input() defaultSelectedCountry: string = '+93';
  @Input() codeValidationMessage: string;
  @Input() phoneValidationMessage: string;
  @Input() codeClass: string;
  @Input() phoneClass: string;
  @Input() formGroupClass: string;
  @Input() phoneControl: any;
  @Input() codeControl: any;
  @Input() phoneFormControlName: string;
  @Input() codeFormControlName: string;
  @Input() set parentForm(value: FormGroup) {
    this._parentForm = value;
  }
  _parentForm: FormGroup;
  
  countries: Phone[] = [];
  selectedCountry: any;
  phoneNumberMask = '(000) 000 0000';

  constructor(private countryService: CountriesService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.countryService.getCountries().subscribe(a => {
      this.countries = a as Phone[];
      this.setDefaults();
    });
  }

  setDefaults() {
    if (this.countries != null && this.countries?.length > 0) {
      // Default TR seçili gelecek

      let dial_code = this._parentForm.controls[this.codeFormControlName]?.value;
      if (dial_code == undefined || dial_code == "") {
        dial_code = this.defaultSelectedCountry;
      }
      this.selectedCountry = this.countries.find(a => a.dial_code == dial_code);
      this._parentForm.controls[this.codeFormControlName].setValue(this.selectedCountry.dial_code);
    }
  }

  onCountryChange(dial_code: any) {
    if (this._parentForm.controls[this.codeFormControlName]) {
      this._parentForm.controls[this.codeFormControlName].reset();
      this._parentForm.controls[this.codeFormControlName].setValue(dial_code);
    }
    const country = this.countries.find(a => a.dial_code == dial_code);
    this.selectedCountry = country;
  }

}
