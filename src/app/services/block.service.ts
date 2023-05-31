import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {DomElement} from "../shared/types/types";

@Injectable({
  providedIn: 'root',
})
export class BlockService {
  private domElements$ = new Subject<DomElement>();
  public domElements = this.domElements$.asObservable();

  public setBlock(block: DomElement): void {
    return this.domElements$.next(block);
  }
}
