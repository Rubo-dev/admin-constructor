import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-list-form',
  templateUrl: './list-form.component.html',
  styleUrls: ['./list-form.component.scss'],
})
export class ListFormComponent implements OnInit {
  @Output() public save = new EventEmitter();
  public form!: FormGroup;
  public items: string[] = [];
  public newTask: string = '';
  private formBuilder = inject(FormBuilder);

  ngOnInit(): void {
    this.initForm();
  }

  public submit(): void {
    if (!this.form.valid) {
      this.form.markAsTouched();
    } else {
      this.save.emit({
        header: this.form.get('header')?.value,
        inputItems: this.items,
      });
    }
  }

  public addToList() {
    if (this.newTask == '') {
    } else {
      this.items.push(this.newTask);
      this.newTask = '';
    }
  }

  public deleteTask(index: number) {
    this.items.splice(index, 1);
  }

  private initForm(): void {
    this.form = this.formBuilder.group({
      header: 'Header',
    });
  }
}
