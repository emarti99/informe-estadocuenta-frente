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
  public user!: CognitoUserInterface;
  username?: string;
  authState!: AuthState;
  signup: FormFieldTypes;
  signin: FormFieldTypes;
  requireNewPassword: FormFieldTypes;

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

    this.requireNewPassword = [
      {
        type: 'password',
        label: 'Contraseña',
        placeholder: 'Ingrese su contraseña',
        inputProps: { required: true, autocomplete: 'password' },
      },
    ];
  }

  ngOnInit(): void {
    onAuthUIStateChange((authState, authData) => {
      this._zone.run(() => {
        // guardar los datos en el almacen
        this.store.authState = this.authState = authState;
        this.store.user = this.user = authData as CognitoUserInterface;
        if (this.user) {
          this.username = this.user.username;
        }

        console.log(this.user);
      });
    });
  }

  ngOnDestroy() {
    return onAuthUIStateChange;
  }
}
