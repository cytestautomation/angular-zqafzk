import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { CustomValidators } from '../../../shared/validators/CustomValidators';

@Component({
  selector: 'app-campaign-form.component',
  templateUrl: './campaign-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CampaignFormComponent implements OnInit {
  public campaignForm = new FormGroup({
    campaignName: new FormControl('', [
      Validators.required,
      CustomValidators.isNotWhiteSpace,
    ]),
    eampId: new FormControl('', [
      Validators.required,
      this.isEampFormatCorrect,
    ]),
    startDate: new FormControl(''),
    endDate: new FormControl(''),
    productLine: new FormControl(''),
  });

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
  public ngOnInit(): void {}

  private isEampFormatCorrect(
    control: AbstractControl
  ): ValidationErrors | null {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { whitespace: true };
  }
}
