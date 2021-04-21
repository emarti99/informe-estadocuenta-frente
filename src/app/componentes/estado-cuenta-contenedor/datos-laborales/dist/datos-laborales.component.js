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
var animations_1 = require("@angular/animations");
var DatosLaboralesComponent = /** @class */ (function () {
    function DatosLaboralesComponent(_estadoCuenta) {
        this._estadoCuenta = _estadoCuenta;
    }
    DatosLaboralesComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input()
    ], DatosLaboralesComponent.prototype, "estadoCuenta");
    DatosLaboralesComponent = __decorate([
        core_1.Component({
            selector: 'app-datos-laborales',
            templateUrl: './datos-laborales.component.html',
            styleUrls: ['./datos-laborales.component.scss'],
            animations: [
                animations_1.trigger('rowExpansionTrigger', [
                    animations_1.state('void', animations_1.style({
                        transform: 'translateX(-10%)',
                        opacity: 0
                    })),
                    animations_1.state('active', animations_1.style({
                        transform: 'translateX(0)',
                        opacity: 1
                    })),
                    animations_1.transition('* <=> *', animations_1.animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
                ]),
            ]
        })
    ], DatosLaboralesComponent);
    return DatosLaboralesComponent;
}());
exports.DatosLaboralesComponent = DatosLaboralesComponent;
