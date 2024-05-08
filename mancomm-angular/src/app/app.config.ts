import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { JsonPipe } from '@angular/common';

import { NGL_ICON_CONFIG, NglIconConfig } from './modules/ng-lightning';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), provideHttpClient(), JsonPipe,
    { provide: NGL_ICON_CONFIG, useValue: <NglIconConfig>{ svgPath: '/my/path' } }
  ]
};
