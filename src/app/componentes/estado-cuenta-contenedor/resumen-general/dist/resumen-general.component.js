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
var common_1 = require("@angular/common");
var moment = require("moment");
var ResumenGeneralComponent = /** @class */ (function () {
    function ResumenGeneralComponent() {
    }
    ResumenGeneralComponent.prototype.ngOnInit = function () {
        this.aporteContenido = [
            {
                titulo: 'Cant. aporte',
                valor: common_1.formatCurrency(this.datosAnaliticos.DAAN_aportes_monto, 'py', '₲', 'PYG', '1.0')
            },
            {
                titulo: 'Últ. Pagado',
                valor: moment(this.datosAnaliticos.DAAN_aportes_ult_pag, 'YYYY-MM-DD').format('DD-MM-YYYY')
            },
            {
                titulo: 'Cant. Pendiente',
                valor: common_1.formatCurrency(this.datosAnaliticos.DAAN_aportes_cant_pend, 'py', '₲', 'PYG', '1.0')
            },
        ];
    };
    ResumenGeneralComponent.prototype.showPositionDialog = function (position) {
        this.position = position;
        this.displayPosition = true;
    };
    __decorate([
        core_1.Input()
    ], ResumenGeneralComponent.prototype, "datosPersonales");
    __decorate([
        core_1.Input()
    ], ResumenGeneralComponent.prototype, "datosAnaliticos");
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
