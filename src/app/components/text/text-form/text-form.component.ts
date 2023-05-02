import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Output, inject, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text-form',
  templateUrl: './text-form.component.html',
  styleUrls: ['./text-form.component.scss'],
})
export class TextFormComponent implements OnInit {
  private FormBuilder = inject(FormBuilder);
  public form!: FormGroup;
  @Output() public save = new EventEmitter();

  public fontFamilies = [
    {
      helvetica: 'Helvetica',
      arial: 'Arial',
      arialBlack: 'Arial Black',
      verdana: 'Verdana',
      tahoma: 'Tahoma',
      trebuchetMS: 'Trebuchet MS',
      impact: 'Impact',
      comicSansMS: 'Comic Sans MS',
    },
  ];

  ngOnInit(): void {
    this.initForm();
  }
  public submit(): void {
    if (!this.form.valid) {
      this.form.markAsTouched();
    } else {
      this.save.emit({});
    }
  }

  private initForm(): void {
    this.form = this.FormBuilder.group({
      text: ['', Validators.required],
      fontSize: '',
      fontWeight: '',
      fontFamily: 'Arial',
      color: '#000',
      backgroundColor: '#fff',
    });
  }
}
