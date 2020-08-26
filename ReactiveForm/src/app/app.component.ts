import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { forbiddenNameValidator, forbiddenNameValidator1 } from './shared/user-name.validator';
import { PasswordValidator } from './shared/password.validator';
import { RegistrationService } from './registration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'ReactiveForm';

  registrationForm: FormGroup;

  get password() {
    return this.registrationForm.get('password');
  }
  get email() {
    return this.registrationForm.get('email');
  }
  get alternateEmails() {
    return this.registrationForm.get('alternateEmails') as FormArray;
  }

  addAlternateEmail() {
    this.alternateEmails.push(this.fb.control(''));
  }

  constructor(private fb: FormBuilder,
              private _registrationService: RegistrationService) { }

  ngOnInit(): void {
  // using FormBuilder to create formModel
    this.registrationForm = this.fb.group({
      userName: ['',[Validators.required, Validators.minLength(3), forbiddenNameValidator1(/password/)]],
      password: ['',[Validators.required, Validators.minLength(8), Validators.maxLength(12)]],
      confirmPassword: [''],
      email: [''],
      subscribe: [false],
      address: this.fb.group({
        state: [''],
        city: [''],
        postalCode: ['']
      }),
      alternateEmails: this.fb.array([])
    }, { validator : PasswordValidator});

  /*
  // instance of the form(form Model) : using FormGroup and FormControl
    registrationForm = new FormGroup({
      userName: new FormControl('Mounika'),
      password: new FormControl(''),
      confirmPassword: new FormControl(''),
      address: new FormGroup({
        city: new FormControl(''),
        state: new FormControl(''),
        postalCode: new FormControl('')
      })
    });
  */

  this.registrationForm.get('subscribe').valueChanges
    .subscribe(checkValue => {
      const email = this.registrationForm.get('email');
      if(checkValue) {
        email.setValidators(Validators.required);
      } else {
        email.clearValidators();
      }
      email.updateValueAndValidity();
    });
  }

  loadApiData() {

      // setValue method
      this.registrationForm.setValue({
        userName: 'Mounika',
        password: 'mouni',
        confirmPassword: 'mouni',
        address: {
          state: 'Telangana',
          city: 'Hyderabad',
          postalCode: '500019'
        }
      });

      // patchValue method
    /*
    this.registrationForm.patchValue({
      userName: 'Mounika',
      password: 'mouni',
      confirmPassword: 'mouni'
    });
    */
    }

    onSubmit() {
      console.log(this.registrationForm.value);
      this._registrationService.register(this.registrationForm.value)
        .subscribe(
          response => console.log('Success!', response),
          error => console.error('Error!', error)
        );
    }

}