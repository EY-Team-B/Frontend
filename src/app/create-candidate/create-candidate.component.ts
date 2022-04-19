import { Component, OnInit } from '@angular/core';
import { AngularFileUploaderModule } from 'angular-file-uploader';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-candidate',
  templateUrl: './create-candidate.component.html',
  styleUrls: ['./create-candidate.component.css'],
})
export class CreateCandidateComponent implements OnInit {
  constructor() {}
  afuConfig = {
    uploadAPI: {
      formatsAllowed: '.pdf',
      url: 'https://slack.com/api/files.upload',
    },
  };
  ngOnInit(): void {}
  onSubmit() {}
}
