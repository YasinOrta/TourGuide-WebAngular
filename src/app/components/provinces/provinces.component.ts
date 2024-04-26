import { Component, Input } from '@angular/core';
import { ProvinceDetails } from '../../interface/province-details';

@Component({
  selector: 'app-provinces',
  templateUrl: './provinces.component.html',
  styleUrl: './provinces.component.scss'
})
export class ProvincesComponent {
  @Input() provinceDetails!: ProvinceDetails;
}