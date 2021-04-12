"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.IconoEstadoCuentaComponent = void 0;
var core_1 = require("@angular/core");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var IconoEstadoCuentaComponent = /** @class */ (function () {
    function IconoEstadoCuentaComponent() {
        this.faUser = free_solid_svg_icons_1.faUser;
        this.faCalendar = free_solid_svg_icons_1.faCalendarAlt;
        this.faHandsHelping = free_solid_svg_icons_1.faHandsHelping;
    }
    IconoEstadoCuentaComponent.prototype.ngOnInit = function () { };
    IconoEstadoCuentaComponent = __decorate([
        core_1.Component({
            selector: 'app-icono-estado-cuenta',
            templateUrl: './icono-estado-cuenta.component.html',
            styleUrls: ['./icono-estado-cuenta.component.scss']
        })
    ], IconoEstadoCuentaComponent);
    return IconoEstadoCuentaComponent;
}());
exports.IconoEstadoCuentaComponent = IconoEstadoCuentaComponent;
