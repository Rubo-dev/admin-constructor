import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-image-form',
  templateUrl: './image-form.component.html',
  styleUrls: ['./image-form.component.scss'],
})
export class ImageFormComponent implements OnInit {
  public form!: FormGroup;
  @Output() public save = new EventEmitter();
  private imgUrl: string = '';
  private formBuilder = inject(FormBuilder);
  private uploadRef: any;

  ngOnInit(): void {
    this.initForm();
  }

  public myUploader(event: any, fileUpload: any) {
    if (event.files && event.files[0]) {
      this.imgUrl = URL.createObjectURL(event.files[0]);
      this.uploadRef = fileUpload;
    }
  }

  public submit(): void {
    this.save.emit({ styles: this.form.getRawValue(), props: this.imgUrl });
    this.uploadRef.clear();
  }

  private initForm(): void {
    this.form = this.formBuilder.group({
      width: ['100px', Validators.required],
      height: ['100px', Validators.required],
    });
  }
}
