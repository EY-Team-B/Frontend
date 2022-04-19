import { Component, OnInit } from '@angular/core';
import { Candidate } from '../create-candidate/candidate';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css'],
})
export class CandidateListComponent implements OnInit {
  candidates!: Candidate[];
  onClick(id: number) {}
  constructor() {}

  ngOnInit(): void {
    this.candidates = [
      {
        id: 1,
        name: 'Soumya',
        clgid: 'SRM_101',
        email: 'soumya@gmail.com',
        phone: 1234567891,
        resume: 'Resume.pdf',
        photo: 'photo.jpg',
      },
      {
        id: 2,
        name: 'Naman',
        clgid: 'SRM_203',
        email: 'naman@gmail.com',
        phone: 1987654321,
        resume: 'Resume1.pdf',
        photo: 'photo1.jpg',
      },
    ];
  }
}
