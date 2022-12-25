import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DOMElementEnum } from '../shared/enums/enums';

@Injectable({
  providedIn: 'root',
})
export class BlockService {
  constructor() {}

  public $subject = new Subject<DOMElementEnum>();

  public initType() {
    return this.$subject.asObservable();
  }
}
