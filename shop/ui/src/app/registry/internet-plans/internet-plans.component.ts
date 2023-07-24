import { Component, ElementRef, ViewChild } from '@angular/core';
import { packages } from './internet-packs';

@Component({
  selector: 'app-internet-plans',
  templateUrl: './internet-plans.component.html',
  styleUrls: ['./internet-plans.component.scss'],
})
export class InternetPlansComponent {
  internetPackages = packages;
  selectedPackageId: number | null = null;
  previousCard: ElementRef | null = null;

  @ViewChild('card', { static: false }) card!: ElementRef<HTMLDivElement>;

  selectPackage(packageId: number) {
    this.selectedPackageId = packageId;
  }

  isPackageSelected(packageId: number): boolean {
    return this.selectedPackageId === packageId;
  }
}
