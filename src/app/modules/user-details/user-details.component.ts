import { PaymentService } from './../../services/payment.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import codes from 'country-telephone-data';
import { ToastrService } from 'ngx-toastr';
import { Country } from 'src/app/models/country.model';
import { CustomValidator } from 'src/app/validators/custom.validator';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userForm: FormGroup;
  countryCodes: Country[] = [];
  selectedCountryCode: string = '91';

  constructor(private _fb: FormBuilder,
    private _paymentService: PaymentService,
    private _toastr: ToastrService) { }

  ngOnInit(): void {
    this.countryCodes = codes.allCountries;
    this.createUserForm();
  }

  createUserForm() {
    this.userForm = this._fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      budget: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, CustomValidator.contactNumberValidation]]
    })
  }

  changeCountryCode(data) {
    console.log(data.target.value);
    this.selectedCountryCode = data.target.value;
  }

  get f() {
    return this.userForm.controls;
  }

  submit() {
    if (this.userForm.valid) {
      this.userForm.patchValue({
        phoneNumber: this.selectedCountryCode + this.userForm.value.phoneNumber
      });
      this._paymentService.submitUserData(this.userForm.value).subscribe(res => {
        // operate data;
        this.createUserForm();
        this.selectedCountryCode = '91';
        this._toastr.success("Request Completed");
      }, err => console.log(err));
    } else {
      this._toastr.error("Please fill valid details")
    }
  }

}
