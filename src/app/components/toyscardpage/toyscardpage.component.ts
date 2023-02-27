// import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
// import toysInfo from '/home/seymademir/Development/angular/minions/db.json';

@Component({
  selector: 'app-toyscardpage',
  templateUrl: './toyscardpage.component.html',
  styleUrls: ['./toyscardpage.component.css'],
})
export class ToyscardpageComponent {
  // toys= toysInfo.minions;

  minionsNames = ["Stuart", "Phil", "Kevin", "Tim", "Dave", "Carl", "Bob"]
  //  public constructor() {}
  //  public ngOnInit(): void {
  //   const url: string = 'http://localhost:3000/minions/';
  //   this.http.get(url).subscribe((response) => this.toysInfo = response)
  // }

  minions=[
    {
        "id":0,
        "name":"Dave",
        "desciption": "Mocking Dave",
        "price": 14.00,
        "imgSrc":"assets/images/minion-images/dave/mockingdave.png"
    },
    {
        "id":1,
        "name":"Bob",
        "desciption": "Happy Bob",
        "price": 12.00,
        "imgSrc":"assets/images/minion-images/bob/happybob.png"
    },
    {
        "id":2,
        "name":"Carl",
        "desciption": "Vacation Carl",
        "price": 14.00,
        "imgSrc":"assets/images/minion-images/carl/carlholiday.png"
    },
    {
        "id":3,
        "name":"Carl",
        "desciption": "Happy Carl",
        "price": 12.00,
        "imgSrc":"assets/images/minion-images/carl/happycarl.png"
    },
    {
        "id":4,
        "name":"Kevin",
        "desciption": "Vacation Kevin",
        "price": 16.00,
        "imgSrc":"assets/images/minion-images/kevin/holidaykevin.png"
    },
    {
        "id":5,
        "name":"Stuart",
        "desciption": "Guitarist Stuart",
        "price": 17.00,
        "imgSrc":"assets/images/minion-images/stuart/guitariststuart.png"
    },
    {
        "id":6,
        "name":"Bob",
        "desciption": "Bob with Bear",
        "price": 13.00,
        "imgSrc":"assets/images/minion-images/bob/bobwithtoy.png"
    },
    {
        "id":7,
        "name":"Kevin",
        "desciption": "Annoyed Kevin",
        "price": 14.00,
        "imgSrc":"assets/images/minion-images/kevin/annoyedkevin.png"
    },
    {
        "id":8,
        "name":"Phil",
        "desciption": "Happy Phil",
        "price": 12.00,
        "imgSrc":"assets/images/minion-images/phil/happyphil.png"
    },
    {
        "id":9,
        "name":"Dave",
        "desciption": "Confused Dave",
        "price": 13.00,
        "imgSrc":"assets/images/minion-images/dave/saddave.png"
    },
    {
        "id":10,
        "name":"Kevin",
        "desciption": "Happy Kevin",
        "price": 12.00,
        "imgSrc":"assets/images/minion-images/kevin/happykevin.png"
    },
    {
        "id":11,
        "name":"Carl",
        "desciption": "Announcement Carl",
        "price": 15.00,
        "imgSrc":"assets/images/minion-images/carl/justcarl.png"
    },
    {
        "id":12,
        "name":"Kevin",
        "desciption": "Sportive Kevin",
        "price": 16.00,
        "imgSrc":"assets/images/minion-images/kevin/sportkevin.png"
    },
    {
        "id":13,
        "name":"Stuart",
        "desciption": "Vampire Stuart",
        "price": 17.00,
        "imgSrc":"assets/images/minion-images/stuart/vampirestuart.png"
    },
    {
        "id":14,
        "name":"Phil",
        "desciption": "Phil with Piglet",
        "price": 14.00,
        "imgSrc":"assets/images/minion-images/phil/pigletphil.png"
    },
    {
        "id":15,
        "name":"Tim",
        "desciption": "Wise Tim",
        "price": 16.00,
        "imgSrc":"assets/images/minion-images/tim/wisetim.png"
    },
    {
        "id":16,
        "name":"Dave",
        "desciption": "Happy Dave",
        "price": 12.00,
        "imgSrc":"assets/images/minion-images/dave/happydave.png"
    },
    {
        "id":17,
        "name":"Stuart",
        "desciption": "Sad Stuart",
        "price": 13.00,
        "imgSrc":"assets/images/minion-images/stuart/sadstuart.png"
    },
    {
        "id":18,
        "name":"Dave",
        "desciption": "Smiling Dave",
        "price": 13.00,
        "imgSrc":"assets/images/minion-images/dave/smiledave.png"
    },
    {
        "id":19,
        "name":"Phil",
        "desciption": "Phil with Idea",
        "price": 14.00,
        "imgSrc":"assets/images/minion-images/phil/studentphil.png"
    },
    {
        "id":20,
        "name":"Bob",
        "desciption": "Shy Bob",
        "price": 14.00,
        "imgSrc":"assets/images/minion-images/bob/shybob.png"
    }

]
}
