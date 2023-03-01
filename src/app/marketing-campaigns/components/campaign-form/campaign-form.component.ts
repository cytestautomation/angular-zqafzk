import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-campaign-form.component',
  templateUrl: './campaign-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CampaignFormComponent implements OnInit {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
  public ngOnInit(): void {}
}
