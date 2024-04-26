import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProvinceDetails } from '../../interface/province-details';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
  constructor(private router: Router){}
  
  signOut(){
    localStorage.clear();
    this.router.navigate(['login']);
  }

  goProvinces(){
    this.router.navigate(['home/provinces']);
  }

  goDistricts(){
    this.router.navigate(['home/provinces/districts']);
  }

  goHome(){
    this.router.navigate(['/home']);
  }

    provinceDetails: ProvinceDetails = {
    id: 1,
    name: "Denizli",
    vehicle_registration_plate: 20,
    region_location: "Ege",
    popular_edible_foods: "Pide",
    popular_produced_items: "Kiraz,Havlu",
    population: 1062612,
    capital_city: false,
  };
}
