"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var app_routing_module_1 = require("./app-routing.module");
var platform_browser_1 = require("@angular/platform-browser");
var angular_fontawesome_1 = require("@fortawesome/angular-fontawesome");
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var prime_ng_module_1 = require("./modulos/prime-ng/prime-ng.module");
var es_PY_1 = require("@angular/common/locales/es-PY");
var common_1 = require("@angular/common");
common_1.registerLocaleData(es_PY_1["default"], 'py');
var app_component_1 = require("./app.component");
var ahorros_gestion_cobranza_component_1 = require("./componentes/estado-cuenta-contenedor/ahorros-gestion-cobranza/ahorros-gestion-cobranza.component");
var buscador_component_1 = require("./componentes/buscador/buscador.component");
var datos_laborales_component_1 = require("./componentes/estado-cuenta-contenedor/datos-laborales/datos-laborales.component");
var datos_personales_component_1 = require("./componentes/estado-cuenta-contenedor/resumen-general/datos-personales/datos-personales.component");
var prestamos_component_1 = require("./componentes/estado-cuenta-contenedor/prestamos/prestamos.component");
var resumen_general_component_1 = require("./componentes/estado-cuenta-contenedor/resumen-general/resumen-general.component");
var tarjetas_component_1 = require("./componentes/estado-cuenta-contenedor/tarjetas/tarjetas.component");
var formato_fecha_pipe_1 = require("./pipes/formato-fecha.pipe");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                ahorros_gestion_cobranza_component_1.AhorrosGestionCobranzaComponent,
                buscador_component_1.BuscadorComponent,
                datos_laborales_component_1.DatosLaboralesComponent,
                datos_personales_component_1.DatosPersonalesComponent,
                prestamos_component_1.PrestamosComponent,
                resumen_general_component_1.ResumenGeneralComponent,
                tarjetas_component_1.TarjetasComponent,
                formato_fecha_pipe_1.FormatoFechaPipe,
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
