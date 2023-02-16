// import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import toysInfo from '/home/seymademir/Development/angular/minions/db.json';

@Component({
  selector: 'app-toyscardpage',
  templateUrl: './toyscardpage.component.html',
  styleUrls: ['./toyscardpage.component.css'],
})
export class ToyscardpageComponent {
  toys= toysInfo;

  //  public constructor() {}
  //  public ngOnInit(): void {
  //   const url: string = 'http://localhost:3000/minions/';
  //   this.http.get(url).subscribe((response) => this.toysInfo = response)
  // }
}
