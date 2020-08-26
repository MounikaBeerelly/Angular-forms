import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Angular', 'React', 'Vue'];
  topicHasError = true;
  submitted = false;
  errorMsg = '';

  userModel = new User('Mouni', 'mouni@gmail.com', 9876543210, '', '', 'default', 'morning', true);

  constructor(private _enrollmentService: EnrollmentService){}

  validateTopic(value) {
    if(value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }

  onSubmit() {
    //console.log(this.userModel);
    this.submitted = true;
    this._enrollmentService.enroll(this.userModel)
      .subscribe(
        data => console.log('Success!', data),
        error => this.errorMsg = error.statusText
      )
  }
}
