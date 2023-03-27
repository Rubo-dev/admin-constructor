import {Pipe, PipeTransform} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Pipe({
  name: 'formValidator',
  pure: false,
  standalone: true
})
export class FormValidatorPipe implements PipeTransform {

  transform(form: FormGroup, field: any): boolean | undefined {
    return (
      (!form.get(field)?.valid && form.get(field)?.touched) ||
      (form.get(field)?.untouched)
    );
  }

}
