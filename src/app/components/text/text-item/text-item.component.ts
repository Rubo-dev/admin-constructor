import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import {
  ButtonConfigs,
  TextareaStylesConfigs,
} from 'src/app/shared/types/types';

@Component({
  selector: 'app-text-item',
  templateUrl: './text-item.component.html',
  styleUrls: ['./text-item.component.scss'],
})
export class TextItemComponent {
  @Input() text!: string;
  @Input() styles!: TextareaStylesConfigs;
}
