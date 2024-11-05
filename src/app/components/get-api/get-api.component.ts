import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.scss',
})
export class GetApiComponent implements OnInit {
  todosList: any = [];
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.getPhotos();
  }
  getPhotos() {
    this.http
      .get('https://jsonplaceholder.typicode.com/todos')
      .subscribe((e) => (this.todosList = e));
  }
}
