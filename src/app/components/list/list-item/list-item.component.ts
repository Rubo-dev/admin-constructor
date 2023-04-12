import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-list-menu-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent {
  @Input() props: string[] = [];
  @Input() headerText: string | undefined;
  //
  // ngOnChanges(changes: SimpleChanges) {
  //   console.log(this.props);
  // }
}
