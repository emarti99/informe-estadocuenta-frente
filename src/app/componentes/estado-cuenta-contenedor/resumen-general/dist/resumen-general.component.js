"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ResumenGeneralComponent = void 0;
var core_1 = require("@angular/core");
var ResumenGeneralComponent = /** @class */ (function () {
    function ResumenGeneralComponent() {
        this.aporteContenido = [
            { titulo: 'Cant aporte', valor: '1.200.000' },
            { titulo: 'Ult. Pagado', valor: '2/04/2021' },
            { titulo: 'Cant Pendiente', valor: '540.000' },
        ];
    }
    ResumenGeneralComponent.prototype.ngOnInit = function () {
        console.log(this.estadoCuenta);
        // this.socioDatos?.push(
        //   [this.estadoCuenta?.datos_personales].map((elm: any) => {
        //     return {
        //       DAPE_nombre: elm.DAPE_nombre,
        //       DAPE_cedula_nro: elm.DAPE_cedula_nro,
        //       DAPE_direccion: elm.DAPE_direccion,
        //       DAPE_telefono: elm.DAPE_telefono,
        //     };
        //   })
        // );
    };
    __decorate([
        core_1.Input()
    ], ResumenGeneralComponent.prototype, "estadoCuenta");
    ResumenGeneralComponent = __decorate([
        core_1.Component({
            selector: 'app-resumen-general',
            templateUrl: './resumen-general.component.html',
            styleUrls: ['./resumen-general.component.scss']
        })
    ], ResumenGeneralComponent);
    return ResumenGeneralComponent;
}());
exports.ResumenGeneralComponent = ResumenGeneralComponent;
