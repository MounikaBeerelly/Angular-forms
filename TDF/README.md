1. create the new angular application.
2. Add bootstrap style in the index.html file.
3. import FormsModule in app.module.ts file.
4. Create a Bootstrap form in the template.
5. Binding data with ngForm directive.
    - Along with ngModel directive "name" attribute is necessary.
    - In TDF binding data in a form, use 3 directives. i.e, ngModel, ngForm, ngModelGrpup
6. Binding data to a ngModel.
    - create model class
    - Define userModel instance in app.component.ts file
    - 
7. Track control state & validity
    - ng-touched/ untouched
    - dirty/pristine
    - valid/invalid
8. Validation with visual feedback
9. Displaying error messages.
10. While creating service
  - create service using ng g service serviceName
  - import HttpClient in the service file, then inject the service
  - import HttpClientModule in the app.module.ts file, then import the module

  #### Documentation of Template Driven Forms is "https://www.youtube.com/watch?v=1Zx2xb7F-c8&list=PLC3y8-rFHvwhwL-XH04cHOpJnkgRKykFi&index=2"