import {
  ComponentRef,
  Directive,
  Input,
  OnChanges,
  ViewContainerRef,
} from '@angular/core';
import { components } from '../shared/componentItems';
import { IComponent } from '../shared/types/types';

@Directive({
  selector: '[appLayoutItem]',
})
export class LayoutItemDirective implements OnChanges {
  @Input() componentInfo: IComponent | undefined;
  component!: ComponentRef<any>;

  constructor(private container: ViewContainerRef) {}

  ngOnChanges(): void {
    // @ts-ignore
    const component = components[this.componentInfo.componentRef];
    if (component && this.componentInfo) {
      this.component = this.container.createComponent(component);
      this.component.instance.styles = this.componentInfo.styles;
      this.component.instance.text = this.componentInfo.text;
      this.component.instance.props = this.componentInfo.props;
    }
  }
}
