import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

/**
 * @title Select Reactive Forms
 * @order 10
 */
@Component({
  selector: 'sbb-select-reactive-forms-example',
  templateUrl: 'select-reactive-forms-example.html',
})
export class SelectReactiveFormsExample {
  form: FormGroup;
  formControl: FormControl;

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      value: '',
      optionDisabled: false,
      readonly: false,
    });
  }
}
