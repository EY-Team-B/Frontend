import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css'],
})
export class SchedulerComponent implements OnInit {
  constructor() {}
  round: any[] = ['Round1', 'Round2', 'Round3'];
  onSubmit() {}

  ngOnInit(): void {}
}
