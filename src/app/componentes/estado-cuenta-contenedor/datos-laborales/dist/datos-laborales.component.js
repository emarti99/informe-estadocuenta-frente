"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DatosLaboralesComponent = void 0;
var core_1 = require("@angular/core");
var DatosLaboralesComponent = /** @class */ (function () {
    function DatosLaboralesComponent(_estadoCuenta) {
        this._estadoCuenta = _estadoCuenta;
    }
    DatosLaboralesComponent.prototype.ngOnInit = function () {
        this.columnas = [
            {
                field: 'DALA_socio_empresa',
                header: 'Empresa'
            },
            {
                field: 'DALA_socio_direccion',
                header: 'Dirección'
            },
            {
                field: 'DALA_socio_telefono',
                header: 'Telefono'
            },
            {
                field: 'DALA_socio_salario',
                header: 'Salario'
            },
            {
                field: 'DALA_socio_fecha_ingreso',
                header: 'Fech. Ingreso'
            },
            {
                field: 'DALA_socio_fecha_egreso',
                header: 'Fech. Egreso'
            },
            {
                field: 'DALA_socio_fecha_grabacion',
                header: 'Fecha. Grabación'
            },
        ];
    };
    __decorate([
        core_1.Input()
    ], DatosLaboralesComponent.prototype, "estadoCuenta");
    DatosLaboralesComponent = __decorate([
        core_1.Component({
            selector: 'app-datos-laborales',
            templateUrl: './datos-laborales.component.html',
            styleUrls: ['./datos-laborales.component.scss']
        })
    ], DatosLaboralesComponent);
    return DatosLaboralesComponent;
}());
exports.DatosLaboralesComponent = DatosLaboralesComponent;
