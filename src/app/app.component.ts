import { FrenteApiGatewayService } from './servicios/frente-api-gateway.service';
import { Component, NgZone } from '@angular/core';
import { FormFieldTypes } from '@aws-amplify/ui-components';
import {
  onAuthUIStateChange,
  CognitoUserInterface,
  AuthState,
} from '@aws-amplify/ui-components';
import { I18n } from 'aws-amplify';
import dict from './amplifyConfiguracion/traduccion.js';
import { FondoService } from './servicios/fondo.service';
import {
  EstadoCuenta,
  SocioSugerido,
} from './interfaces/estadoCuenta.interface';

I18n.setLanguage('es');

I18n.putVocabularies(dict);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'estadoCuenta';
  valorInterno = 'prueba';
  user!: CognitoUserInterface;
  authState!: AuthState;
  signup: FormFieldTypes;
  signin: FormFieldTypes;
  confimSignUp: FormFieldTypes;

  estadoCuenta!: EstadoCuenta;
  sociosSugeridos!: SocioSugerido[];
  socioSeleccionado!: any;

  hayError!: boolean;

  constructor(private store: FondoService, private _zone: NgZone) {
    this.signin = [
      {
        type: 'username',
        label: 'Usuario',
        placeholder: 'Ingrese su usuario',
        inputProps: { required: true, autocomplete: 'username' },
      },
      {
        type: 'password',
        label: 'Contraseña',
        placeholder: 'Ingrese su contraseña',
        inputProps: { required: true, autocomplete: 'password' },
      },
    ];
    this.signup = [
      {
        type: 'username',
        label: 'Usuario',
        placeholder: 'Ingrese su usuario',
        inputProps: { required: true, autocomplete: 'username' },
      },
      {
        type: 'password',
        label: 'Contraseña',
        placeholder: 'Ingrese su contraseña',
        inputProps: { required: true, autocomplete: 'new-password' },
      },
    ];

    this.confimSignUp = [
      {
        type: 'username',
        label: 'Usuario',
        placeholder: 'Ingrese su usuario',
        inputProps: { required: true, autocomplete: 'username' },
      },
      {
        type: 'code',
        label: 'Codigo de confirmación',
        placeholder: 'Ingrese su codigo',
        inputProps: { required: true, autocomplete: 'code' },
      },
    ];
  }

  ngOnInit(): void {
    onAuthUIStateChange((authState, authData) => {
      this._zone.run(() => {
        console.log(authState, authData);
        // set user data in the store
        this.store.authState = this.authState = authState;
        this.store.user = this.user = authData as CognitoUserInterface;

        // this.getIdTokenAndRedirect();
        // this.ref.detectChanges();
      });
    });
  }

  ngOnDestroy() {
    return onAuthUIStateChange;
  }
}
