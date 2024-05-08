import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { JsonPipe, KeyValuePipe, NgFor, NgForOf, NgIf } from '@angular/common';

import {NglModule} from 'ng-lightning'
// import {NglModule} from '../modules/ng-lightning'

@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.css'],
  standalone: true,
  imports: [JsonPipe, KeyValuePipe, NgFor, NgForOf, NgIf, NglModule],
})
export class ViewDataComponent implements OnInit {
  documentData: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getDocumentData()
      .subscribe(data => {
        console.log('data: ', data)
        this.documentData = data;
      });
  }

}
