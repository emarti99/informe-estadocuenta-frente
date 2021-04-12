"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DatosPersonalesComponent = void 0;
var core_1 = require("@angular/core");
var DatosPersonalesComponent = /** @class */ (function () {
    function DatosPersonalesComponent() {
        // datosPersonales: any[] = [
        //   {
        //     socio: 123456,
        //     nombre: 'Gustavo Elias Morán Martí',
        //     domicilio: 'Mcal Lopez y San Martin',
        //     conyuge: 'Fulana de tal',
        //     tasaPref: 2,
        //     telefono: 81123456,
        //     estado: 'activo',
        //     fechaIngreso: '24/enero/2021',
        //     ultimoAntecedente: 'ayer',
        //   },
        // ];
        this.DatoPersonalColumnaUno = [];
        this.DatoPersonalColumnaDos = [];
    }
    DatosPersonalesComponent.prototype.ngOnInit = function () {
        var _a, _b, _c, _d, _e;
        if (this.estadoCuenta)
            this.DatoPersonalColumnaUno = [
                {
                    titulo: 'Socio Nro',
                    valor: this.estadoCuenta.datos_personales.DAPE_socio_nro
                },
                {
                    titulo: 'Nombre',
                    valor: this.estadoCuenta.datos_personales.DAPE_nombre
                },
                { titulo: 'Dirección', valor: this.estadoCuenta.datos_personales.DAPE_direccion },
                { titulo: 'Telefono', valor: this.estadoCuenta.datos_personales.DAPE_telefono },
            ];
        this.DatoPersonalColumnaDos = [
            { titulo: 'Estado', valor: (_a = this.estadoCuenta) === null || _a === void 0 ? void 0 : _a.datos_personales.DAPE_estado },
            { titulo: 'Conyuge', valor: (_b = this.estadoCuenta) === null || _b === void 0 ? void 0 : _b.datos_personales.DAPE_conyuge },
            { titulo: 'Tasa Pref', valor: (_c = this.estadoCuenta) === null || _c === void 0 ? void 0 : _c.datos_personales.DAPE_tasa_pref },
            {
                titulo: 'Fecha de ingreso',
                valor: (_d = this.estadoCuenta) === null || _d === void 0 ? void 0 : _d.datos_personales.DAPE_fecha_ingreso
            },
            {
                titulo: 'Ultimo Antecedente',
                valor: (_e = this.estadoCuenta) === null || _e === void 0 ? void 0 : _e.datos_personales.DAPE_ultimo_antecedente
            },
        ];
    };
    __decorate([
        core_1.Input()
    ], DatosPersonalesComponent.prototype, "estadoCuenta");
    DatosPersonalesComponent = __decorate([
        core_1.Component({
            selector: 'app-datos-personales',
            templateUrl: './datos-personales.component.html',
            styleUrls: ['./datos-personales.component.scss']
        })
    ], DatosPersonalesComponent);
    return DatosPersonalesComponent;
}());
exports.DatosPersonalesComponent = DatosPersonalesComponent;
