import { AfterViewInit, Component, Input } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Resolutions } from '../../../shared/types/types';

@Component({
  selector: 'app-image-menu-item',
  templateUrl: './image-item.component.html',
  styleUrls: ['./image-item.component.scss'],
})
export class ImageItemComponent implements AfterViewInit {
  @Input() image?: any;
  @Input() styles?: Resolutions;
  public imageBlob?: Blob;
  public imageURL?: SafeUrl;

  constructor(private h: HttpClient, private sanitizer: DomSanitizer) {}

  ngAfterViewInit() {
    console.log(this.styles);
    this.loadImage().subscribe((i) => {
      this.imageBlob = i;
      this.imageURL = this.sanitizer.bypassSecurityTrustUrl(
        URL.createObjectURL(this.imageBlob)
      );
    });
  }

  loadImage(): Observable<Blob> {
    return this.h.get(this.image, {
      responseType: 'blob',
    });
  }
}
