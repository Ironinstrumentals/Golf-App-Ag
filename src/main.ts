import { enableProdMode } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './modules/app/app.module';
import { environment } from './environments/environment';

//Bootstrap

//Bootstrap//

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
