import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ViewDataComponent } from './view-data/view-data.component';

import { HttpClientModule } from '@angular/common/http';

import {NglModule} from './modules/ng-lightning';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ViewDataComponent, HttpClientModule, NglModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'mancomm-angular';
}
