import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { API } from "aws-amplify";
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports.js';
import { Auth } from 'aws-amplify';

Amplify.configure({
  Auth: {
      // REQUERIDO para Autenticación Federada, id del Identity Pool
      identityPoolId: 'sa-east-1:3fb2f327-899c-4074-bbe2-5751a3ed5c5a',
      
      // REQUERIDO - Amazon Cognito Region
      region: 'sa-east-1',

      // OPCIONAL - Amazon Cognito Identity Pool Region 
      identityPoolRegion: 'sa-east-1',

      // OPCIONAL - Amazon Cognito User Pool ID
      userPoolId: 'sa-east-1_AGaF4NLb6',

      // OPCIONAL - Amazon Cognito Web Client ID
      userPoolWebClientId: '1fvq0folkvmhqm2k7vubr6s7bv',

      // OPCIONAL - Enforce user authentication prior to accessing AWS resources or not
      mandatorySignIn: false,
      
      // OPCIONAL - Authentication flow type. Por defecto 'USER_SRP_AUTH'
      authenticationFlowType: 'USER_PASSWORD_AUTH',      
  },
  API: {
    endpoints: [
        {
            name: "ClonAPIEstadoCuentaCSC",
            endpoint: "https://95u5ottkrk.execute-api.sa-east-1.amazonaws.com/prod", //revisar el endpoint
            // custom_header: async () => ({
            //   Authorization: `Bearer ${(await Auth.currentSession())
            //     .getAccessToken()
            //     .getJwtToken()}`,
            // }),
        }
    ]
  }
});
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
