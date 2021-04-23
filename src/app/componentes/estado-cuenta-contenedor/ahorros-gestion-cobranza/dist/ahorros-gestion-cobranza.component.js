"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AhorrosGestionCobranzaComponent = void 0;
var core_1 = require("@angular/core");
var AhorrosGestionCobranzaComponent = /** @class */ (function () {
    function AhorrosGestionCobranzaComponent() {
    }
    AhorrosGestionCobranzaComponent.prototype.ngOnInit = function () {
        this.colsAhorros = [
            { cabecera: 'Cuenta N॰' },
            { cabecera: 'Tipo de cuenta' },
            { cabecera: 'Cantidad' },
        ];
        this.colsGestion = [
            { cabecera: 'Sistema' },
            { cabecera: 'Capital' },
            { cabecera: 'Gastos Judiciales' },
            { cabecera: 'Honorarios' },
            { cabecera: 'Gastos admin' },
            { cabecera: 'Tipo' },
        ];
    };
    __decorate([
        core_1.Input()
    ], AhorrosGestionCobranzaComponent.prototype, "ahorros");
    __decorate([
        core_1.Input()
    ], AhorrosGestionCobranzaComponent.prototype, "gestionCobranza");
    AhorrosGestionCobranzaComponent = __decorate([
        core_1.Component({
            selector: 'app-ahorros-gestion-cobranza',
            templateUrl: './ahorros-gestion-cobranza.component.html',
            styleUrls: ['./ahorros-gestion-cobranza.component.scss']
        })
    ], AhorrosGestionCobranzaComponent);
    return AhorrosGestionCobranzaComponent;
}());
exports.AhorrosGestionCobranzaComponent = AhorrosGestionCobranzaComponent;
