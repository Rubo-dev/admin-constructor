import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-menu-form',
  templateUrl: './menu-form.component.html',
  styleUrls: ['./menu-form.component.scss'],
})
export class MenuFormComponent implements OnInit {
  @Output() public save = new EventEmitter();
  public inputForm!: FormGroup;
  public menuItems?: FormArray;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.inputForm = this.formBuilder.group({
      menuItems: this.formBuilder.array([this.createItem()]),
    });
  }

  public addItem(): void {
    this.menuItems = this.inputForm?.get('menuItems') as FormArray;
    this.menuItems.push(this.createItem());
  }

  public removeRow(index: number) {
    (<FormArray>this.inputForm?.get('menuItems')).removeAt(index);
  }

  public submit() {
    if (!this.inputForm.valid) {
      this.inputForm.markAsTouched();
    } else {
      this.save.emit(this.inputForm.getRawValue().menuItems);
    }
  }

  private createItem(): FormGroup {
    return this.formBuilder.group({
      menuName: '',
      icon: '',
    });
  }
}
