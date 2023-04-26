import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private dataUrl = 'assets/countries.json';
  constructor(private http: HttpClient) { }

  getCountries() {
    return this.http.get(this.dataUrl);
  }
}
