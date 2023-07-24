import { Component, Input } from '@angular/core';
import { packages } from './internet-packs';

@Component({
  selector: 'app-internet-plans',
  templateUrl: './internet-plans.component.html',
  styleUrls: ['./internet-plans.component.scss'],
})
export class InternetPlansComponent {
  @Input() isRegistryOk: boolean = false;
  
  internetPackages = packages;
  selectedPackageId: number | null = null;

  selectPackage(packageId: number) {
    this.selectedPackageId = packageId;
  }

  isPackageSelected(packageId: number): boolean {
    return this.selectedPackageId === packageId;
  }
}
