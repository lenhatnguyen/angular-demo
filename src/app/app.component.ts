import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.name = 'Angular2';
    this.form = fb.group({
      name: ['', Validators.required]
    });
    this.form.statusChanges
        .subscribe( result => console.log(result));
  }
  remove() {
     this.form.patchValue({
      name: '',
    });
  }

   add() {
     this.form.patchValue({
      name: 'Nancy',
    });
  }
}
