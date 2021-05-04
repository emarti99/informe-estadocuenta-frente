import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { EstadoCuenta } from '../interfaces/estadoCuenta.interface';

@Injectable({
  providedIn: 'root',
})
export class FondoService {
  constructor(private http: HttpClient) {}

  urlBase: string = 'http://localhost:8080/api/v1/estadoCuenta';

  x(identificador: number) {
    const usuario = identificador.toString();

    return this.http.get<EstadoCuenta>(this.urlBase, {
      headers: { 'Content-Type': 'application/json' },
      params: { identificadorCliente: usuario },
    });
  }
  pideDatoUsuario(): Observable<EstadoCuenta> {
    return from([
      {
        datos_personales: {
          DAPG_socio_datos: {
            DAPE_nombre: 'Ernesto Juan Luís',
            DAPE_apellido: 'Fleitas Cáceres González',
            DAPE_cedula_nro: 4123456,
            DAPE_direccion:
              'Choferes del chaco esquina chaco boreal, Santa Rosa, San Pedro, Paraguay',
            DAPE_telefono: '0982 615230',
            DAPE_estado: 'Activo',
            DAPE_socio_nro: 382114,
            DAPE_fecha_ingreso: '1977-01-05',
            DAPE_ultimo_antecedente: 'Cargo electivo',
          },
          DAPG_conyuge_datos: {
            DAPE_nombre: 'Ana María Breatriz',
            DAPE_apellido: 'Saldivar de González',
            DAPE_cedula_nro: 1234556,
            DAPE_direccion: 'Avda. Del Yacht y Onofre Gómez',
            DAPE_telefono: '0982 205301',
            DAPE_estado: 'Activo',
            DAPE_socio_nro: 401503,
            DAPE_fecha_ingreso: '1980-09-23',
            DAPE_ultimo_antecedente: 'Cargo electivo',
          },
        },
        datos_analiticos: {
          DAAN_tasa_pref: -2,
          DAAN_aportes: {
            APOR_monto: 2642000,
            APOR_cant_pend: 24000,
            APOR_ult_pag: '2021-02-24'
          },
          DAAN_solidaridad: {
            SOLI_cant_pend: 18000,
            SOLI_ult_pag: '2021-04-05'
          },
          DAAN_saldos_pendientes: {
            SAPE_prestamos: 26784000,
            SAPE_cobranzas: 38562000,
            SAPE_tarjetas: 7845613
          },
          DAAN_calificaciones: {
            CALI_calif_ult: 'A',
            CALI_promedio: 0.0
          },
        },
        datos_laborales: [
          {
            DALA_socio_empresa: 'Cooperativa San Cristóbal',
            DALA_socio_direccion: 'Denis roa y del maestro',
            DALA_socio_telefono: '604868',
            DALA_socio_salario: 7000000,
            DALA_socio_fecha_ingreso: '1998-08-28',
            DALA_socio_fecha_egreso: '2006-12-31',
            DALA_socio_fecha_grabacion: '2011-11-19'
          },
          {
            DALA_socio_empresa: 'Protek',
            DALA_socio_direccion: 'España 1755',
            DALA_socio_telefono: '220420',
            DALA_socio_salario: 8800000,
            DALA_socio_fecha_ingreso: '2007-10-19',
            DALA_socio_fecha_egreso: '2009-01-01',
            DALA_socio_fecha_grabacion: '2011-01-01'
          },
          {
            DALA_socio_empresa: 'Cooperativa Medalla Milagrosa',
            DALA_socio_direccion: 'Pedro Getto e/ Ruta Mcal. Estigarribia',
            DALA_socio_telefono: '5199000',
            DALA_socio_salario: 8800000,
            DALA_socio_fecha_ingreso: '2013-01-01-',
            DALA_socio_fecha_egreso: '2009-12-01',
            DALA_socio_fecha_grabacion: '2011-11-19'
          },
          {
            DALA_socio_empresa: 'Merkaton',
            DALA_socio_direccion: 'Mcal. López y R.I Curupayty',
            DALA_socio_telefono: '600755',
            DALA_socio_salario: 10000000,
            DALA_socio_fecha_ingreso: '2013-01-03',
            DALA_socio_fecha_egreso: '2017-12-31',
            DALA_socio_fecha_grabacion: '2013-04-01'
          },
          {
            DALA_socio_empresa: 'Jubilado',
            DALA_socio_direccion: '-',
            DALA_socio_telefono: '0982 615230',
            DALA_socio_salario: 7900000,
            DALA_socio_fecha_ingreso: '2018-01-01',
            DALA_socio_fecha_egreso: '-',
            DALA_socio_fecha_grabacion: '2018-02-01'
          },
        ],
        prestamos: [
          {
            PRES_socio_nro_pmo: 1,
            PRES_socio_aprobado_fecha: '1997-04-10',
            PRES_socio_monto: 2100000,
            PRES_socio_sistema: 'Alemán',
            PRES_socio_cuotas: '24/24',
            PRES_socio_tipo_pmo: 'ORDINARIO',
            PRES_socio_calificacion: 'A',
            PRES_socio_atrasos: 0,
            PRES_socio_fecha_vencimiento: '2001-03-08',
            PRES_socio_estado_pmo: 'Terminado',
            PRES_socio_saldo_restante: 0,
            PRES_socio_tasa_interes: 27,
            PRES_socio_tipo_garantia: 'Garantía aporte',
            PRES_socio_situacion: '-',
            PRES_socio_adelantado: 34,
            PRES_socio_en_fecha: 13,
            PRES_socio_max_dias_atraso: 22,
            PRES_socio_promedio: 0.0,
            PRES_socio_socio_garante: '-',
            PRES_socio_observacion: '-'
          },
          {
            PRES_socio_nro_pmo: 2,
            PRES_socio_aprobado_fecha: '1998-03-28',
            PRES_socio_monto: 8240000,
            PRES_socio_sistema: 'Alemán',
            PRES_socio_cuotas: '48/48',
            PRES_socio_tipo_pmo: 'EMERGENCIA',
            PRES_socio_calificacion: 'B3',
            PRES_socio_atrasos: 0,
            PRES_socio_fecha_vencimiento: '2001-08-30',
            PRES_socio_estado_pmo: 'Terminado',
            PRES_socio_saldo_restante: 0,
            PRES_socio_tasa_interes: 27,
            PRES_socio_tipo_garantia: 'Garantía aporte',
            PRES_socio_situacion: '-',
            PRES_socio_adelantado: 34,
            PRES_socio_en_fecha: 13,
            PRES_socio_max_dias_atraso: 22,
            PRES_socio_promedio: 0.0,
            PRES_socio_socio_garante: '-',
            PRES_socio_observacion: '-'
          },
          {
            PRES_socio_nro_pmo: 3,
            PRES_socio_aprobado_fecha: '1999-11-22',
            PRES_socio_monto: 1802500,
            PRES_socio_sistema: 'Francés',
            PRES_socio_cuotas: '23/42',
            PRES_socio_tipo_pmo: 'EMERGENCIA',
            PRES_socio_calificacion: 'A',
            PRES_socio_atrasos: 0,
            PRES_socio_fecha_vencimiento: '2000-12-30',
            PRES_socio_estado_pmo: 'Terminado',
            PRES_socio_saldo_restante: 0,
            PRES_socio_tasa_interes: 29,
            PRES_socio_tipo_garantia: 'Sola firma',
            PRES_socio_situacion: '-',
            PRES_socio_adelantado: 12,
            PRES_socio_en_fecha: 12,
            PRES_socio_max_dias_atraso: 0,
            PRES_socio_promedio: 0.0,
            PRES_socio_socio_garante: '-',
            PRES_socio_observacion: '-'
          },
          {
            PRES_socio_nro_pmo: 4,
            PRES_socio_aprobado_fecha: '2000-08-11',
            PRES_socio_monto: 2781000,
            PRES_socio_sistema: 'Alemán',
            PRES_socio_cuotas: '23/52',
            PRES_socio_tipo_pmo: 'EMERGENCIA',
            PRES_socio_calificacion: 'A',
            PRES_socio_atrasos: 0,
            PRES_socio_fecha_vencimiento: '2001-09-15',
            PRES_socio_estado_pmo: 'Terminado',
            PRES_socio_saldo_restante: 0,
            PRES_socio_tasa_interes: 24,
            PRES_socio_tipo_garantia: 'Sola firma',
            PRES_socio_situacion: '-',
            PRES_socio_adelantado: 18,
            PRES_socio_en_fecha: 6,
            PRES_socio_max_dias_atraso: 0,
            PRES_socio_promedio: 0.0,
            PRES_socio_socio_garante: '-',
            PRES_socio_observacion: '-'
          },
          {
            PRES_socio_nro_pmo: 5,
            PRES_socio_aprobado_fecha: '2001-08-02',
            PRES_socio_sistema: 'Alemán',
            PRES_socio_monto: 32135000,
            PRES_socio_cuotas: '23/69',
            PRES_socio_tipo_pmo: 'Ordinario',
            PRES_socio_calificacion: 'A',
            PRES_socio_atrasos: 0,
            PRES_socio_fecha_vencimiento: '2007-03-01',
            PRES_socio_estado_pmo: 'Terminado',
            PRES_socio_saldo_restante: 0,
            PRES_socio_tasa_interes: 20,
            PRES_socio_tipo_garantia: 'Sola firma',
            PRES_socio_situacion: '-',
            PRES_socio_adelantado: 26,
            PRES_socio_en_fecha: 40,
            PRES_socio_max_dias_atraso: 0,
            PRES_socio_promedio: 0.0,
            PRES_socio_socio_garante: '-',
            PRES_socio_observacion: '-'
          },
          {
            PRES_socio_nro_pmo: 6,
            PRES_socio_aprobado_fecha: '2002-10-09',
            PRES_socio_monto: 3090000,
            PRES_socio_sistema: 'Alemán',
            PRES_socio_cuotas: '24',
            PRES_socio_tipo_pmo: 'Ext.S.Fir.SA',
            PRES_socio_calificacion: 'A',
            PRES_socio_atrasos: 0,
            PRES_socio_fecha_vencimiento: '2004-11-01',
            PRES_socio_estado_pmo: 'Terminado',
            PRES_socio_saldo_restante: 0,
            PRES_socio_tasa_interes: 27,
            PRES_socio_tipo_garantia: 'Sola firma',
            PRES_socio_situacion: '-',
            PRES_socio_adelantado: 0,
            PRES_socio_en_fecha: 24,
            PRES_socio_max_dias_atraso: 0,
            PRES_socio_promedio: 0.0,
            PRES_socio_socio_garante: '-',
            PRES_socio_observacion: '-'
          },
          {
            PRES_socio_nro_pmo: 7,
            PRES_socio_aprobado_fecha: '2003-08-04',
            PRES_socio_monto: 6308750,
            PRES_socio_sistema: 'Alemán',
            PRES_socio_cuotas: '36',
            PRES_socio_tipo_pmo: 'Parl.S.Fir.10S',
            PRES_socio_calificacion: 'A',
            PRES_socio_atrasos: 0,
            PRES_socio_fecha_vencimiento: '-',
            PRES_socio_estado_pmo: 'Terminado',
            PRES_socio_saldo_restante: 0,
            PRES_socio_tasa_interes: 23,
            PRES_socio_tipo_garantia: 'Sola firma',
            PRES_socio_situacion: '-',
            PRES_socio_adelantado: 34,
            PRES_socio_en_fecha: 2,
            PRES_socio_max_dias_atraso: 0,
            PRES_socio_promedio: 0.0,
            PRES_socio_socio_garante: '-',
            PRES_socio_observacion: '-'
          },
        ],
        tarjetas: [
          {
            TARJ_linea_credito: 11550000,
            TARJ_linea_especial: 10000000,
            TARJ_saldo: 1750000,
            TARJ_pago_minimo: 144000,
            TARJ_fecha_ultimo_pago: '2021-04-08',
            TARJ_dias_vencimiento: 0,
            TARJ_saldo_cuota: 0,
            TARJ_fecha_vencimiento: '2021-05-10',
            TARJ_estado: 'judicial',
            TARJ_refinanciamiento_pendiente: 300000,
            TARJ_monto_ultimo_pago: 144000,
            TARJ_ajuste_TCR: 0
          },
        ],
        ahorros: [
          {
            AHOR_cuenta_nro: 0,
            AHOR_tipo_cuenta: 'Plazo fijo',
            AHOR_cantidad: 10000000
          },
          {
            AHOR_cuenta_nro: 1,
            AHOR_tipo_cuenta: 'Monto fijo',
            AHOR_cantidad: 5000000
          },
          {
            AHOR_cuenta_nro: 2,
            AHOR_tipo_cuenta: 'Caja de ahorro',
            AHOR_cantidad: 500000
          },
        ],
        gestion_cobranza: [
          {
            GECO_sistema: 'Judicial',
            GECO_capital: 0,
            GECO_gastos_judiciales: 287000,
            GECO_honorarios: 1250000,
            GECO_gastos_administrativos: 235000,
            GECO_tipo: 'Préstamo'
          },
          {
            GECO_sistema: 'Judicial',
            GECO_capital: 500000,
            GECO_gastos_judiciales: 287000,
            GECO_honorarios: 2500000,
            GECO_gastos_administrativos: 125000,
            GECO_tipo: 'Tarjeta'          
          },
        ],
      },
    ]);
  }
}
