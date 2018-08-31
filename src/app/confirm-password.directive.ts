import { Validator, NG_VALIDATORS, AbstractControl } from "@angular/forms";
import { Directive, Input } from "@angular/core";

@Directive({
    selector: '[appConfirmPassword]',
    providers:[{
        provide: NG_VALIDATORS,
        useExisting: ConfirmPassword,
        multi: true
    }]
})
export class ConfirmPassword implements Validator{
    @Input() appConfirmPassword: string;
    validate(control: AbstractControl): {[key: string]: any} | null{
        const toCompare = control.parent.get(this.appConfirmPassword);
        if(toCompare && toCompare.value !== control.value){
            return {'notEqual': true};
        }
        return null;
    }
}