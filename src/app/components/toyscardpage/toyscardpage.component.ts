import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-toyscardpage',
  templateUrl: './toyscardpage.component.html',
  styleUrls: ['./toyscardpage.component.css']
})
export class ToyscardpageComponent implements OnInit{
  public toysInfo: any;
  public constructor(private http: HttpClient){}
  public ngOnInit(): void {
    const url: string = 'http://localhost:3000/minions/';
    this.http.get(url).subscribe((response) => this.toysInfo = response)
  }
 
}
