import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidationService } from 'src/app/services/custom-validation.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit, AfterViewInit {
  constructor(private builder: FormBuilder, private router: Router) {}
  loading: boolean = false;
  careersForm!: FormGroup;
  @ViewChild('avalibily') avalibily!: ElementRef;
  ngOnInit(): void {
    this.InitForm();
    console.log(this.careersForm.get('salary'));
  }
  sendApplication() {
    console.log(this.careersForm.get('salary'));
    this.careersForm.markAllAsTouched();
    if (!this.careersForm.valid) return;

    // since there is no endpoint api to post the form i had to semulate the proccess
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.router.navigate(['/thankyou']);
      this.careersForm.reset();
    }, 1000);
  }
  // get lement

  ngAfterViewInit(): void {
    console.log(this.avalibily);
  }
  //get todays' data
  getDate() {
    let today: any = new Date();
    const dd = ('0' + today.getDate()).slice(-2);
    const mm = ('0' + (today.getMonth() + 1)).slice(-2);
    const yyyy = today.getFullYear();
    return (today = yyyy + '-' + mm + '-' + dd);
  }

  // Init Form
  InitForm(): void {
    this.careersForm = this.builder.group({
      fullName: new FormControl(null, {
        validators: [Validators.required],
      }),
      email: new FormControl(null, {
        validators: [Validators.required, CustomValidationService.isEmail],
      }),
      phone: new FormControl(null, {
        validators: [Validators.required, CustomValidationService.isPhone],
      }),
      position: new FormControl(null, {
        validators: [Validators.required],
      }),
      birthDate: new FormControl(this.getDate(), {
        validators: [Validators.required],
      }),
      avalibility: new FormControl(this.getDate(), {
        validators: [Validators.required],
      }),
      address: new FormControl(null, {
        validators: [Validators.required],
      }),
      salary: new FormControl(null, {
        validators: [Validators.required, Validators.min(9000)], // ^^
      }),
      status: new FormControl(null, {
        validators: [Validators.required],
      }),
      cv: new FormControl(null, {
        validators: [Validators.required],
      }),
    });
  }
}
// Init Form
