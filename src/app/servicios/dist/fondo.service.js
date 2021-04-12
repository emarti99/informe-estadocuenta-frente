"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FondoService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var FondoService = /** @class */ (function () {
    function FondoService(http) {
        this.http = http;
        this.urlBase = 'http://localhost:8080/api/v1/estadoCuenta';
    }
    FondoService.prototype.x = function (identificador) {
        var usuario = identificador.toString();
        return this.http.get(this.urlBase, {
            headers: { 'Content-Type': 'application/json' },
            params: { identificadorCliente: usuario }
        });
    };
    FondoService.prototype.pideDatoUsuario = function () {
        return rxjs_1.from([
            {
                datos_personales: {
                    DAPE_socio_nro: 382114,
                    DAPE_nombre: 'Fleitas Cáceres, Ernesto',
                    DAPE_direccion: 'Avda. Del Yacht y Onofre Gomez',
                    DAPE_telefono: '0982 615230',
                    DAPE_estado: 'Activo',
                    DAPE_conyuge: 'Luisa Gómez de Fleitas',
                    DAPE_tasa_pref: -2,
                    DAPE_fecha_ingreso: '05-01-1977',
                    DAPE_ultimo_antecedente: 'Cargo electivo'
                },
                datos_laborales: [
                    {
                        DALA_socio_empresa: 'Cooperativa San Cristobal',
                        DALA_socio_direccion: 'Denis roa y del maestro',
                        DALA_socio_telefono: '604868',
                        DALA_socio_salario: 7000000,
                        DALA_socio_fecha_ingreso: '28-10-1998',
                        DALA_socio_fecha_egreso: '31-12-2006',
                        DALA_socio_fecha_grabacion: '19-11-2011'
                    },
                    {
                        DALA_socio_empresa: 'Protek',
                        DALA_socio_direccion: 'España 1755',
                        DALA_socio_telefono: '220420',
                        DALA_socio_salario: 8800000,
                        DALA_socio_fecha_ingreso: '19-09-2007',
                        DALA_socio_fecha_egreso: '01-01-2009',
                        DALA_socio_fecha_grabacion: '19-11-2011'
                    },
                    {
                        DALA_socio_empresa: 'Cooperativa Medalla Milagrosa',
                        DALA_socio_direccion: 'Pedro Getto e/ Ruta Mcal. Estigarribia',
                        DALA_socio_telefono: '5199000',
                        DALA_socio_salario: 8800000,
                        DALA_socio_fecha_ingreso: '12-12-2009',
                        DALA_socio_fecha_egreso: '01-12-2009',
                        DALA_socio_fecha_grabacion: '19-11-2011'
                    },
                    {
                        DALA_socio_empresa: 'Merkaton',
                        DALA_socio_direccion: 'Mcal. López y R.I Curupayty',
                        DALA_socio_telefono: '600755',
                        DALA_socio_salario: 10000000,
                        DALA_socio_fecha_ingreso: '01-03-2013',
                        DALA_socio_fecha_egreso: '31-12-2017',
                        DALA_socio_fecha_grabacion: '01-04-2013'
                    },
                    {
                        DALA_socio_empresa: 'Jubilado',
                        DALA_socio_direccion: '-',
                        DALA_socio_telefono: '0982 615230',
                        DALA_socio_salario: 7900000,
                        DALA_socio_fecha_ingreso: '01-01-2018',
                        DALA_socio_fecha_egreso: '-',
                        DALA_socio_fecha_grabacion: '01-02-2018'
                    },
                ],
                prestamos: [
                    {
                        PRES_socio_aprobado_fecha: '10-04-97',
                        PRES_socio_monto: 2100000,
                        PRES_socio_cuotas: '24/24',
                        PRES_socio_tipo_pmo: 'ORDINARIO',
                        PRES_socio_calificacion: 'A',
                        PRES_socio_atrasos: 0,
                        PRES_socio_estado_pmo: 'Terminado',
                        PRES_socio_mas_detalles: {
                            PRDE_socio_nro_pmo: 2,
                            PRDE_socio_saldo_restante: 0,
                            PRDE_socio_sistema: 'Aleman',
                            PRDE_socio_tasa_interes: 27,
                            PRDE_socio_tipo_garantia: 'Garantia aporte',
                            PRDE_socio_situacion: '-',
                            PRDE_socio_adelantado: 34,
                            PRDE_socio_en_fecha: 13,
                            PRDE_socio_max_dias_atraso: 22,
                            PRDE_socio_fecha_vencimiento: '30-08-2001',
                            PRDE_socio_observacion: '-',
                            PRDE_socio_socio_garante: '-',
                            PRDE_socio_nombre_garante: '-'
                        }
                    },
                    {
                        PRES_socio_aprobado_fecha: '23-09-98',
                        PRES_socio_monto: 8240000,
                        PRES_socio_cuotas: '48/48',
                        PRES_socio_tipo_pmo: 'EMERGENCIA',
                        PRES_socio_calificacion: 'B3',
                        PRES_socio_atrasos: 0,
                        PRES_socio_estado_pmo: 'Terminado',
                        PRES_socio_mas_detalles: {
                            PRDE_socio_nro_pmo: 2,
                            PRDE_socio_saldo_restante: 0,
                            PRDE_socio_sistema: 'Aleman',
                            PRDE_socio_tasa_interes: 27,
                            PRDE_socio_tipo_garantia: 'Garantia aporte',
                            PRDE_socio_situacion: '-',
                            PRDE_socio_adelantado: 34,
                            PRDE_socio_en_fecha: 13,
                            PRDE_socio_max_dias_atraso: 22,
                            PRDE_socio_fecha_vencimiento: '30-08-2001',
                            PRDE_socio_observacion: '-',
                            PRDE_socio_socio_garante: '-',
                            PRDE_socio_nombre_garante: '-'
                        }
                    },
                    {
                        PRES_socio_aprobado_fecha: '22-11-99',
                        PRES_socio_monto: 1802500,
                        PRES_socio_cuotas: '23/42',
                        PRES_socio_tipo_pmo: 'EMERGENCIA',
                        PRES_socio_calificacion: 'A',
                        PRES_socio_atrasos: 0,
                        PRES_socio_estado_pmo: 'Terminado',
                        PRES_socio_mas_detalles: {
                            PRDE_socio_nro_pmo: 3,
                            PRDE_socio_saldo_restante: 0,
                            PRDE_socio_sistema: 'Frances',
                            PRDE_socio_tasa_interes: 29,
                            PRDE_socio_tipo_garantia: 'Sola firma',
                            PRDE_socio_situacion: '-',
                            PRDE_socio_adelantado: 12,
                            PRDE_socio_en_fecha: 12,
                            PRDE_socio_max_dias_atraso: 0,
                            PRDE_socio_fecha_vencimiento: '30-12-2000',
                            PRDE_socio_observacion: '-',
                            PRDE_socio_socio_garante: '-',
                            PRDE_socio_nombre_garante: '-'
                        }
                    },
                    {
                        PRES_socio_aprobado_fecha: '11-08-00',
                        PRES_socio_monto: 2781000,
                        PRES_socio_cuotas: '23/52',
                        PRES_socio_tipo_pmo: 'EMERGENCIA',
                        PRES_socio_calificacion: 'A',
                        PRES_socio_atrasos: 0,
                        PRES_socio_estado_pmo: 'Terminado',
                        PRES_socio_mas_detalles: {
                            PRDE_socio_nro_pmo: 4,
                            PRDE_socio_saldo_restante: 0,
                            PRDE_socio_sistema: 'Aleman',
                            PRDE_socio_tasa_interes: 24,
                            PRDE_socio_tipo_garantia: 'Sola firma',
                            PRDE_socio_situacion: '-',
                            PRDE_socio_adelantado: 18,
                            PRDE_socio_en_fecha: 6,
                            PRDE_socio_max_dias_atraso: 0,
                            PRDE_socio_fecha_vencimiento: '15-09-2001',
                            PRDE_socio_observacion: '-',
                            PRDE_socio_socio_garante: '-',
                            PRDE_socio_nombre_garante: '-'
                        }
                    },
                    {
                        PRES_socio_aprobado_fecha: '02-08-01',
                        PRES_socio_monto: 32135000,
                        PRES_socio_cuotas: '23/69',
                        PRES_socio_tipo_pmo: 'Ordinario',
                        PRES_socio_calificacion: 'A',
                        PRES_socio_atrasos: 0,
                        PRES_socio_estado_pmo: 'Terminado',
                        PRES_socio_mas_detalles: {
                            PRDE_socio_nro_pmo: 5,
                            PRDE_socio_saldo_restante: 0,
                            PRDE_socio_sistema: 'Aleman',
                            PRDE_socio_tasa_interes: 20,
                            PRDE_socio_tipo_garantia: 'Sola firma',
                            PRDE_socio_situacion: '-',
                            PRDE_socio_adelantado: 26,
                            PRDE_socio_en_fecha: 40,
                            PRDE_socio_max_dias_atraso: 0,
                            PRDE_socio_fecha_vencimiento: '01-03-2007',
                            PRDE_socio_observacion: '-',
                            PRDE_socio_socio_garante: '-',
                            PRDE_socio_nombre_garante: '-'
                        }
                    },
                    {
                        PRES_socio_aprobado_fecha: '09-10-02',
                        PRES_socio_monto: 3090000,
                        PRES_socio_cuotas: '24',
                        PRES_socio_tipo_pmo: 'Ext.S.Fir.SA',
                        PRES_socio_calificacion: 'A',
                        PRES_socio_atrasos: 0,
                        PRES_socio_estado_pmo: 'Terminado',
                        PRES_socio_mas_detalles: {
                            PRDE_socio_nro_pmo: 6,
                            PRDE_socio_saldo_restante: 0,
                            PRDE_socio_sistema: 'Aleman',
                            PRDE_socio_tasa_interes: 27,
                            PRDE_socio_tipo_garantia: 'Sola firma',
                            PRDE_socio_situacion: '-',
                            PRDE_socio_adelantado: 0,
                            PRDE_socio_en_fecha: 24,
                            PRDE_socio_max_dias_atraso: 0,
                            PRDE_socio_fecha_vencimiento: '01-11-2004',
                            PRDE_socio_observacion: '-',
                            PRDE_socio_socio_garante: '-',
                            PRDE_socio_nombre_garante: '-'
                        }
                    },
                    {
                        PRES_socio_aprobado_fecha: '04-08-03',
                        PRES_socio_monto: 6308750,
                        PRES_socio_cuotas: '36',
                        PRES_socio_tipo_pmo: 'Parl.S.Fir.10S',
                        PRES_socio_calificacion: 'A',
                        PRES_socio_atrasos: 0,
                        PRES_socio_estado_pmo: 'Terminado',
                        PRES_socio_mas_detalles: {
                            PRDE_socio_nro_pmo: 7,
                            PRDE_socio_saldo_restante: 0,
                            PRDE_socio_sistema: 'Aleman',
                            PRDE_socio_tasa_interes: 23,
                            PRDE_socio_tipo_garantia: 'Sola firma',
                            PRDE_socio_situacion: '-',
                            PRDE_socio_adelantado: 34,
                            PRDE_socio_en_fecha: 2,
                            PRDE_socio_max_dias_atraso: 0,
                            PRDE_socio_fecha_vencimiento: '-',
                            PRDE_socio_observacion: '-',
                            PRDE_socio_socio_garante: '-',
                            PRDE_socio_nombre_garante: '-'
                        }
                    },
                ]
            },
        ]);
    };
    FondoService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], FondoService);
    return FondoService;
}());
exports.FondoService = FondoService;
