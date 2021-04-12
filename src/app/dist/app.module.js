"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_module_1 = require("./app-routing.module");
var http_1 = require("@angular/common/http");
var prime_ng_module_1 = require("./modulos/prime-ng/prime-ng.module");
var angular_fontawesome_1 = require("@fortawesome/angular-fontawesome");
var app_component_1 = require("./app.component");
var buscador_component_1 = require("./componentes/buscador/buscador.component");
var datos_personales_component_1 = require("./componentes/estado-cuenta-contenedor/resumen-general/datos-personales/datos-personales.component");
var datos_laborales_component_1 = require("./componentes/estado-cuenta-contenedor/datos-laborales/datos-laborales.component");
var prestamos_component_1 = require("./componentes/estado-cuenta-contenedor/prestamos/prestamos.component");
var tarjetas_component_1 = require("./componentes/estado-cuenta-contenedor/tarjetas/tarjetas.component");
var otros_datos_component_1 = require("./componentes/estado-cuenta-contenedor/otros-datos/otros-datos.component");
var resumen_general_component_1 = require("./componentes/estado-cuenta-contenedor/resumen-general/resumen-general.component");
var icono_estado_cuenta_component_1 = require("./componentes/compartido/icono-estado-cuenta/icono-estado-cuenta.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                buscador_component_1.BuscadorComponent,
                datos_personales_component_1.DatosPersonalesComponent,
                datos_laborales_component_1.DatosLaboralesComponent,
                prestamos_component_1.PrestamosComponent,
                tarjetas_component_1.TarjetasComponent,
                otros_datos_component_1.OtrosDatosComponent,
                resumen_general_component_1.ResumenGeneralComponent,
                icono_estado_cuenta_component_1.IconoEstadoCuentaComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                prime_ng_module_1.PrimeNgModule,
                angular_fontawesome_1.FontAwesomeModule,
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
