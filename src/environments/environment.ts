// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

import {FirebaseAppConfig} from 'angularfire2';

export interface BikeToWorkEnvironment {
  production: boolean;
  fireBaseConfig: FirebaseAppConfig
}

export const environment: BikeToWorkEnvironment = {
  production: false,
  fireBaseConfig: {
    apiKey: "AIzaSyAXPRQ3atudmIkKCA_GOftfYbaqLF0_ST4",
    authDomain: "bike-to-work-454e8.firebaseapp.com",
    databaseURL: "https://bike-to-work-454e8.firebaseio.com",
    storageBucket: "bike-to-work-454e8.appspot.com"
  }
};
