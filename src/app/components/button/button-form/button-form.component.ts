import {Component, EventEmitter, inject, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-button-form',
  templateUrl: './button-form.component.html',
  styleUrls: ['./button-form.component.scss']
})
export class ButtonFormComponent implements OnInit {
  public formSubmitAttempt = false;
  @Output() public save = new EventEmitter()
  public form!: FormGroup;
  public text: FormControl = new FormControl<string>('', Validators.required);
  private formBuilder = inject(FormBuilder)

  ngOnInit(): void {
    this.initForm()
  }

  public submit(): void {
    if (!this.form.valid) {
      this.formSubmitAttempt = true;
      this.form.markAsTouched();
    } else {
      this.save.emit(
        {
          styles: this.form.getRawValue(),
          text: this.text.getRawValue()
        }
      )
    }
  }

  private initForm(): void {
    this.form = this.formBuilder.group({
      color: ['', Validators.required],
      backgroundColor: '',
      width: '120px',
      height: '50px',
      padding: '10px'
    })
  }

}
