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
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-campaign-form.component',
  templateUrl: './campaign-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CampaignFormComponent implements OnInit {
  public products: SelectItem[] = [
    { label: 'Product A', value: 'Product A' },
    { label: 'Product A', value: 'Product B' },
    { label: 'Product A', value: 'Product C' },
    { label: 'Product A', value: 'Product D' },
  ];
  public campaignForm = new FormGroup({
    campaignName: new FormControl('', [
      Validators.required,
      CustomValidators.isNotWhiteSpace,
    ]),
    eampId: new FormControl('', [
      Validators.required,
      this.isEampFormatCorrect,
    ]),
    startDate: new FormControl('', [Validators.required]),
    endDate: new FormControl('', [Validators.required]),
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

  public addCampaign() {}
}
