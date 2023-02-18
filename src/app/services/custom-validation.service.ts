import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import validator from 'validator';
@Injectable({
  providedIn: 'root',
})
export class CustomValidationService {
  constructor() {}

  // Check If Input Contains Valid Email
  static isEmail(control: AbstractControl): ValidationErrors | null {
    if (!control.value) {
      return null;
    }
    const value = control.value.trim() as string;
    if (value && !validator.isEmail(value)) {
      return { notEmail: true };
    }
    return null;
  }

  // Check If Input Contains Numbers Only
  static isNumber(control: AbstractControl): ValidationErrors | null {
    if (!control.value) {
      return null;
    }
    const value: string = control.value.trim().toString();
    if (value && !validator.isNumeric(value, { no_symbols: true })) {
      return { notNumber: true };
    }

    return null;
  }
  // Check If Input Contains Valid Mobile Number
  static isPhone(control: AbstractControl): ValidationErrors | null {
    if (!control.value) {
      return null;
    }
    const value = control.value.trim() as string;
    if (value && !validator.isMobilePhone(value, 'ar-EG')) {
      return { notPhone: true };
    }
    return null;
  }
}
