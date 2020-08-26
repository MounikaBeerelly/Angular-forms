

1. create project using ng new project_name
2. navigate to the path
3. Import ReactiveFormsModule in app.module.ts file and add into the imports array.
4. 

## 3 steps to create Reactive forms in Angular
   - Define HTML form in the component template
   - Define form model in the component class
   - Use the directives provided by ReactiveFormsModule to associate with the model and the view
   - formGroup.value will provide the value of the form which can be posted to the server, when required.

## Managing formControl values(setting values programatically)
  - by using setValue property to update data programatically
  - setValue method follow the formModel class. So we must add all formControls to the setValue method.
  - If you want to set few values of the formControl, use patchValue method.

## formBuilder:
  - formBuilder is a service, used to create formModel.
  - import FormBuilder and inject in the constructor function.
  - It is alternative for FormGroups and FormControls.

## Validations 
  - required
  - pattern
  - minValue
  - maxValue

performing built-in validations:
- import Validators class
- specify validation rules for each form field in component class.
- Providing visual feedback in the template file.
- Dispaly appropriate error messages

## Custom Validators
  - custom validator is a function, which can be define in the component class.
  - if we use these custom validators in different files, define custom validations in seperate file.
  
## cross field validation:
  - compare two fields at a time, use cross-field validations
  - example password & confirm password

## conditional validation
  - valueChanges
  - setValidators
  - clearValidators
  - updateValueAndValidators

## Dynamic form controls
  - import FormArray Class in the component class
  - define FormArray in the formModel
  - create a getter function
  - create a method in the component class
  - add button in the template
  - iterate over the array define ngFor directive.

## Post form data
 - bind ngSubmit method to the form element.
 - define onSubmit event in the component class
 - define new registration service
    - in the sevice, import HttpClient module and inject the module in constructor method
    - import HttpClientModule in the app.module.ts file and add it into the imports array.
    - defien URL property in the service to post the form data to the server.
    - create a method called register, which will make the post request.
    - subscribe to the observable in the component class
      - import service in the component class and inject into the constructor.
      - call the service in onSubmit method.
    - disable the registration button

#### Documentation of Reactive Forms is "https://www.youtube.com/watch?v=lgatKVd03_U&list=PLC3y8-rFHvwhwL-XH04cHOpJnkgRKykFi&index=16"