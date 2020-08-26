import { AbstractControl } from '@angular/forms';

export function PasswordValidator(control: AbstractControl) : { [key:string]: boolean } | null {
// this function accepts control as a parameter, and returns an object or null, based on weather the validation passed or failed
   const password = control.get('password');
   const confirmPassword = control.get('confirmPassword');
   return password && confirmPassword && password.value != confirmPassword.value ?
       { 'misMatch' : true } : null;
}