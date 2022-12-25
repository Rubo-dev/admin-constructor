import { BlockService } from './../services/block.service';
import {
  Component,
  ViewContainerRef,
  OnInit,
  Renderer2,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { DOMElementEnum } from '../shared/enums/enums';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, AfterViewInit {
  constructor(
    private blockService: BlockService,
    private renderer: Renderer2,
    private viewContainerRef: ViewContainerRef
  ) {}
  public type: DOMElementEnum | undefined;
  @ViewChild('button', { read: ViewContainerRef }) button: any | undefined;

  ngOnInit(): void {
    this.blockService.$subject.subscribe((v) => {
      this.type = v;
      this.addElement(this.type);
    });
  }
  ngAfterViewInit(): void {
    console.log(this.viewContainerRef);
  }
  public addElement(type: DOMElementEnum): void {
    const elem = this.renderer.createElement(`${type}`);
    elem.innerHTML = 'button';
    this.viewContainerRef.insert(elem.innerHTML);
  }
}
