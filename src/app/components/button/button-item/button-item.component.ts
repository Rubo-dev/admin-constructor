import { Component, Input } from '@angular/core';
import { ButtonConfigs } from '../../../shared/types/types';

@Component({
  selector: 'app-button-menu-item',
  templateUrl: './button-item.component.html',
  styleUrls: ['./button-item.component.scss'],
})
export class ButtonItemComponent {
  @Input() text!: string;
  @Input() styles!: ButtonConfigs;
}
