import { AppModule } from 'src/app/app.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { provideAnimations } from '@angular/platform-browser/animations';

platformBrowserDynamic()
  .bootstrapModule(AppModule, {
    providers: [provideAnimations()],
  })
  .catch((err) => console.log(err));
