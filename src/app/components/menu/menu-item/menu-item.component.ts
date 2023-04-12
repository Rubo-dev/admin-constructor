import {Component, Input} from '@angular/core';
import {MenuItems} from '../../../shared/types/types';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
})
export class MenuItemComponent {
  @Input() props?: MenuItems[];
}
