import {NgModule, ModuleWithProviders} from '@angular/core';
import {
  FIREBASE_PROVIDERS, defaultFirebase, FirebaseAppConfig, AuthProviders, AuthMethods,
  firebaseAuthConfig
} from 'angularfire2';
import {TrajectService} from './traject.service';

@NgModule({
  providers: [
    TrajectService
  ]
})
export  class TrajectApiModule {

  static forRoot(config: FirebaseAppConfig): ModuleWithProviders {
    return {
      ngModule: TrajectApiModule,
      providers: [FIREBASE_PROVIDERS, defaultFirebase(config), firebaseAuthConfig({
        provider: AuthProviders.Google,
        method: AuthMethods.Redirect,
        scope: ['email']
      })]
    };
  }

}
