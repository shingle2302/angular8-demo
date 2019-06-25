import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string;
  address: {
    province: string;
    city: string
  };
  showSkills: boolean;
  skills: string[];


  constructor() {
    this.name = 'Seemlier';
    this.address = {
      province: '福建',
      city: '厦门'
    };
    this.showSkills = true;
    this.skills = ['AngularJS 1.x', 'Angular 2.x', 'Angular 4.x', 'Angular 8.x'];
  }

  toggleSkills() {
    this.showSkills = !this.showSkills;
  }

  addSkill(skill: string) {
    const sk = skill.trim();
    if (this.skills.indexOf(sk) === -1) {
      this.skills.push(sk);
    }
  }

  ngOnInit() {
  }

}
