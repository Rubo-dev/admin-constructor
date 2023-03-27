import { BlockService } from '../services/block.service';
import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  QueryList,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
} from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import {
  ButtonConfigs,
  DomElement,
  ListStyles,
  Resolutions,
} from '../shared/types/types';
import { ButtonItemComponent } from '../components/button/button-item/button-item.component';
import { ImageItemComponent } from '../components/image/image-item/image-item.component';
import { ListItemComponent } from '../components/list/list-item/list-item.component';
import { MenuItemComponent } from '../components/menu/menu-item/menu-item.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [ConfirmationService, MessageService],
})
export class MainComponent implements AfterViewInit {
  @ViewChild('container', { static: false }) container!: ElementRef;
  @ViewChildren('dynamic', { read: ViewContainerRef })
  dynamic!: QueryList<ViewContainerRef>;
  public configs!: DomElement;
  public displayModal: boolean = false;
  public blockService = inject(BlockService);

  ngAfterViewInit(): void {
    this.blockService.domElements.subscribe((configs) => {
      this.displayModal = configs.display;
      this.configs = configs;
    });
  }

  public save(data: any) {
    switch (this.configs.tagName) {
      case 'image':
        this.addImage(data);
        break;
      case 'list':
        this.addList(data);
        break;
      case 'button':
        this.addButton(data);
        break;
      case 'menu':
        this.addMenu(data);
        break;
    }
  }

  private addList(data: {
    styles: ListStyles;
    inputItems: [];
    headerText: string;
  }): void {
    this.dynamic.map((vcr: ViewContainerRef) => {
      const element = vcr.createComponent<ListItemComponent>(ListItemComponent);
      element.instance.inputItems = data.inputItems;
      element.instance.headerText = data.headerText;
    });
  }

  private addMenu(data: any): void {
    this.dynamic.map((vcr: ViewContainerRef) => {
      const element = vcr.createComponent<MenuItemComponent>(MenuItemComponent);
      element.instance.menuItems = data;
      console.log(data);
      // element.instance.headerText = data.headerText;
    });
  }

  private addImage(data: { styles: Resolutions; imgUrl: string }): void {
    if (data) {
      this.dynamic.map((vcr: ViewContainerRef) => {
        const element =
          vcr.createComponent<ImageItemComponent>(ImageItemComponent);
        element.instance.styles = data.styles;
        element.instance.image = data.imgUrl;
      });
    }
  }

  private addButton(data: { styles: ButtonConfigs; text: string }): void {
    this.dynamic.map((vcr: ViewContainerRef) => {
      const element =
        vcr.createComponent<ButtonItemComponent>(ButtonItemComponent);
      element.instance.styles = data.styles;
      element.instance.text = data.text;
    });
  }
}
