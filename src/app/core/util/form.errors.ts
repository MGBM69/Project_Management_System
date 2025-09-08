import { AbstractControl } from "@angular/forms";

export class FormValidationError{
    static getFormControllErrorMsg(ctrl:AbstractControl,name:string):string{
        if(ctrl.hasError('required')){
            return`${name} is required!`;
        }

        if(ctrl.hasError('min')){
            return `${name} need minimum value!`
        }

        
        return``;
    }
}