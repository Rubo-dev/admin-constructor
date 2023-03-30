import {ComponentRef, Directive, Input, OnChanges, ViewContainerRef} from '@angular/core';
import {ButtonItemComponent} from "../components/button/button-item/button-item.component";

const components = {
  component: ButtonItemComponent,
};

@Directive({
  selector: '[appLayoutItem]'
})
export class LayoutItemDirective implements OnChanges {
  @Input() componentRef: any;
  component!: ComponentRef<any>;

  constructor(
    private container: ViewContainerRef,
  ) {
  }

  ngOnChanges(): void {
    // @ts-ignore
    const component = components[this.componentRef];

    if (component) {
      this.component = this.container.createComponent(component);
    }
  }
}
