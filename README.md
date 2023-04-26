
## Custom Countries Dial Phone Codes

An angular component that has an country dial code selection and mask phone number input.

## Installation

Use npm to install the package

  ```terminal
  $ npm i ng-countries-phone --save 
  ```

## Import

You must add into your module `imports` the `CountryPhoneModule` in order to use component.

  ```typescript
import { CountryPhoneModule } from 'ng-countries-phone';
  
  @NgModule({
   // ...
   imports: [
     // ...
     CountryPhoneModule
   ]
  })
  ```

## How to use
You can use component like below. 

* Your component form

```ts
testForm: FormGroup;

ngOnInit(): void {
   this.createForm();
}

createForm() {
  this.testForm = this.fb.group({
    code: ['',Validators.required],
    phone: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(40)]],
  });
}

get codeControl() { return this.testForm.get('code'); }
get phoneControl() { return this.testForm.get('phone'); }

onSubmit(){
  const formData=this.testForm.getRawValue();
  //.. Do some busines..
}
```
```html
<form [formGroup]="testForm" (submit)="onSubmit()">
    <!-- you can use inside your form. But you have to bind your testForm with parentForm attribute-->
    <app-phone
     [parentForm]="testForm" 
     [codeFormControlName]="'code'" 
     [phoneFormControlName]="'phone'"
     [codeControl]="codeControl"
     [phoneControl]="phoneControl"
     [defaultSelectedCountry]="'+90'">
     </app-phone>
</form>
```
![alt text](https://github.com/ismailkasan/countries-phone/blob/main/projects/ng-countries-phone/assets/countries-phone.png?raw=true)
## Attributes

You can customize component with our own css classes and you can give some configration. There are some details in the below tables.

| Attribute                  |    Description   |
| :---                       |    :----:        |
| **codeClass**              | class of country selection. It has boostrap "**.form-select**" class default. But, you can set your own class.|
| **phoneClass**             | class of phone input. It has boostrap "**.form-control**" class default. But, you can set your own class.|
| **formGroupClass**         | class of parent div of country selection and phone input. It has boostrap "**.form-group**" class default. But, you can set your own class.|
| **codeControl**            | **FormControl** of **parentForm** for country selection.|
| **phoneControl**           | **FormControl** of **parentForm** for phone input.|
| **parentForm**             | Your form component.|
| **phoneLabelText**         | Phone input label. It has default "**Phone Number**" value.|
| **codeLabelText**          | Country selection label. It has default "**Country Code**" value.|
| **codeFormControlName**    | **FormControlName** of your component form for country selection code.|
| **phoneFormControlName**   | **FormControlName** of your component form for phone input.|
| **codeValidationMessage**  | Custom validation message for country selection.|
| **defaultSelectedCountry** | Default selected country code is "**+90**" **Turkey**. You can set your own.|
| **phoneValidationMessage** | Custom validation message for phone input.|

## Contributing And Issues

* Before adding any new feature or a fix make sure to open an issue first!
* Make sure you have `angular-cli` installed globally.

```bash
$ npm install -g angular-cli
```

* Clone the project, and install dependencies.

```bash
$ git clone https://github.com/ismailkasan/countries-phone.git
$ npm install
```

* Create a new branch

```bash
$ git checkout -b feat/someFeature
```

 * Make sure everything is running properly
 * Commit & push, and make a pull request!
