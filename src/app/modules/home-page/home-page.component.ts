import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  usersList: Observable<{ users: User[] }>;

  constructor(private _store: Store<{ userDetails: { users: User[] } }>) { }

  ngOnInit(): void {
    this.usersList = this._store.select('userDetails');
  }

}
