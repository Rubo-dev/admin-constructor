import { Injectable } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { UUID } from 'angular2-uuid';
import { IComponent } from '../shared/types/types';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  public options: GridsterConfig = {
    draggable: {
      enabled: true,
    },
    pushItems: true,
    resizable: {
      enabled: true,
    },
  };
  public layout: GridsterItem[] = [];
  public components: IComponent[] = [];
  private dropId: string = '';

  public addItem(): string {
    let id = UUID.UUID();
    this.layout.push({
      cols: 1,
      id,
      rows: 1,
      x: 0,
      y: 0,
    });
    return id;
  }

  public deleteItem(id: string): void {
    const item = this.layout.find((d) => d['id'] === id);
    if (item) {
      this.layout.splice(this.layout.indexOf(item), 1);
    }
    const comp = this.components.find((c) => c['id'] === id);
    if (comp) {
      this.components.splice(this.components.indexOf(comp), 1);
    }
  }

  public setDropId(dropId: string): void {
    this.dropId = dropId;
  }

  public dropItem(data: {
    componentRef: any;
    styles?: any;
    props?: any;
    text?: string;
  }): void {
    const { components } = this;
    const comp: IComponent | undefined = components.find(
      (c) => c.id === this.dropId
    );
    const updateIdx: number = comp
      ? components.indexOf(comp)
      : components.length;
    const componentItem: IComponent = {
      id: this.dropId,
      componentRef: data.componentRef,
      styles: data.styles ?? '',
      props: data.props ?? [],
      text: data.text ?? '',
    };
    this.components = Object.assign([], components, {
      [updateIdx]: componentItem,
    });
  }

  public getComponent(id: string): any | null {
    const comp = this.components.find((c) => c.id === id);
    return comp ?? null;
  }
}
