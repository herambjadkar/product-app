// load the app module into browser
// bootstrap

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {AppModule} from './app/app.module'

platformBrowserDynamic().bootstrapModule(AppModule);
