import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Component, OnInit, Output, inject, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text-form',
  templateUrl: './text-form.component.html',
  styleUrls: ['./text-form.component.scss'],
})
export class TextFormComponent implements OnInit {
  @Output() public save = new EventEmitter();
  public form!: FormGroup;
  public text: FormControl = new FormControl<string>(
    'Sample text',
    Validators.required
  );
  public fontFamilies = [
    { name: 'Arial', code: 'arial' },
    { name: 'Helvetica', code: 'helvetica' },
    { name: 'Arial Black', code: 'arialBlack' },
    { name: 'Verdana', code: 'verdana' },
    { name: 'Paris', code: 'tahoma' },
    { name: 'Trebuchet MS', code: 'trebuchetMS' },
    { name: 'Impact', code: 'impact' },
    { name: 'Comic Sans MS', code: 'comicSansMS' },
  ];
  private FormBuilder = inject(FormBuilder);

  ngOnInit(): void {
    this.initForm();
  }
  public submit(): void {
    if (!this.form.valid) {
      this.form.markAsTouched();
    } else {
      this.save.emit({
        styles: this.form.getRawValue(),
        text: this.text.getRawValue(),
      });
      this.form.reset();
      this.text.reset();
    }
  }

  private initForm(): void {
    this.form = this.FormBuilder.group({
      fontSize: '16px',
      fontWeight: '600',
      fontFamily: this.fontFamilies[0],
      padding: '10px',
      color: 'black',
      backgroundColor: 'white',
    });
  }
}
