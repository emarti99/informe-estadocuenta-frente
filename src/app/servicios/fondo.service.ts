import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import {
  EstadoCuenta,
  SocioSugerido,
} from '../interfaces/estadoCuenta.interface';

@Injectable({
  providedIn: 'root',
})
export class FondoService {
  estadoCuenta!: EstadoCuenta;
  hayError!: boolean;

  constructor(private http: HttpClient) {}

  identificador!: string;
  urlBase: string = 'https://c5e8f8cbda4f.ngrok.io/api/v1/';

  devuelveIdentificador(termino: string) {
    this.identificador = termino;
  }

  devuelveEstadoCuenta() {
    return this.pideEstadoCuenta(this.identificador);
    // return this.pideDatoUsuario();
  }

  devuelveSociosSugeridos() {
    return this.pideSociosSugeridos(this.identificador);
  }

  pideEstadoCuenta(identificador: string): Observable<EstadoCuenta> {
    const usuario = identificador.toString();
    const usuarioPrueba = '2198598';

    return this.http.get<EstadoCuenta>(this.urlBase + 'informe?', {
      headers: { 'Content-Type': 'application/json' },
      params: { ci: usuario },
    });
  }

  pideSociosSugeridos(identificador: string): Observable<SocioSugerido[]> {
    const sociosSugeridos = identificador.toString();
    const dato = '123';
    return this.http.get<SocioSugerido[]>(this.urlBase + 'sugerencias?', {
      headers: { 'Content-Type': 'application/json' },
      params: { dato: sociosSugeridos },
    });
  }

  pideDatoUsuariox(): Observable<EstadoCuenta> {
    return from([
      {
        datos_personales: {
          dapg_socio_datos: {
            dape_nombre: 'Ernesto Juan Luís',
            dape_apellido: 'Fleitas Cáceres González',
            dape_cedula_nro: 4123456,
            dape_direccion:
              'Choferes del chaco esquina chaco boreal, Santa Rosa, San Pedro, Paraguay',
            dape_telefono: '0982 615230',
            dape_estado: 'Activo',
            dape_socio_nro: 382114,
            dape_fecha_ingreso: '1977-01-05',
            dape_antiguedad: '34 años y 3 meses',
            dape_ultimo_antecedente: 'Cargo electivo',
          },
          dapg_conyuge_datos: {
            dape_nombre: 'Ana María Breatriz',
            dape_apellido: 'Saldivar de González',
            dape_cedula_nro: 1234556,
            dape_direccion: 'Avda. Del Yacht y Onofre Gómez',
            dape_telefono: '0982 205301',
            dape_estado: 'Activo',
            dape_socio_nro: 401503,
            dape_fecha_ingreso: '1980-09-23',
            dape_antiguedad: '30 años y 9 meses',
            dape_ultimo_antecedente: 'Cargo electivo',
          },
        },
        datos_analiticos: {
          daan_tasa_pref: -2,
          daan_aportes: {
            apor_monto: 2642000,
            apor_cant_pend: 24000,
            apor_ult_pag: '2021-02-24',
          },
          daan_solidaridad: {
            soli_cant_pend: 18000,
            soli_ult_pag: '2021-04-05',
          },
          daan_saldos_pendientes: {
            sape_prestamos: 26784000,
            sape_cobranzas: 38562000,
            sape_tarjetas: 7845613,
          },
          daan_calificaciones: {
            cali_calif_ult: 'A',
            cali_promedio: 0.0,
          },
          daan_total_ahorros: 243000,
          daan_salario_actual: 7900000,
        },
        datos_laborales: [
          {
            dala_socio_empresa: 'Cooperativa San Cristóbal',
            dala_socio_direccion: 'Denis roa y del maestro',
            dala_socio_telefono: '604868',
            dala_socio_salario: 7000000,
            dala_socio_fecha_ingreso: '1998-08-28',
            dala_socio_fecha_egreso: '2006-12-31',
            dala_socio_id_empresa: 1,
          },
          {
            dala_socio_empresa: 'Protek',
            dala_socio_direccion: 'España 1755',
            dala_socio_telefono: '220420',
            dala_socio_salario: 8800000,
            dala_socio_fecha_ingreso: '2007-10-19',
            dala_socio_fecha_egreso: '2009-01-01',
            dala_socio_id_empresa: 2,
          },
          {
            dala_socio_empresa: 'Cooperativa Medalla Milagrosa',
            dala_socio_direccion: 'Pedro Getto e/ Ruta Mcal. Estigarribia',
            dala_socio_telefono: '5199000',
            dala_socio_salario: 8800000,
            dala_socio_fecha_ingreso: '2013-01-01',
            dala_socio_fecha_egreso: '2009-12-01',
            dala_socio_id_empresa: 3,
          },
          {
            dala_socio_empresa: 'Merkaton',
            dala_socio_direccion: 'Mcal. López y R.I Curupayty',
            dala_socio_telefono: '600755',
            dala_socio_salario: 10000000,
            dala_socio_fecha_ingreso: '2013-01-03',
            dala_socio_fecha_egreso: '2017-12-31',
            dala_socio_id_empresa: 4,
          },
          {
            dala_socio_empresa: 'Jubilado',
            dala_socio_direccion: '-',
            dala_socio_telefono: '0982 615230',
            dala_socio_salario: 7900000,
            dala_socio_fecha_ingreso: '2018-01-01',
            dala_socio_fecha_egreso: null,
            dala_socio_id_empresa: 5,
          },
        ],
        prestamos: [
          {
            pres_socio_nro_pmo: 1,
            pres_socio_aprobado_fecha: '1997-04-10',
            pres_socio_monto: 2100000,
            pres_socio_sistema: 'Alemán',
            pres_socio_cuotas: '24/24',
            pres_socio_tipo_pmo: 'ORDINARIO',
            pres_socio_calificacion: 'A',
            pres_socio_atrasos: 0,
            pres_socio_fecha_vencimiento: '2001-03-08',
            pres_socio_estado_pmo: 'Terminado',
            pres_socio_saldo_restante: 0,
            pres_socio_tasa_interes: 27,
            pres_socio_tipo_garantia: 'Garantía aporte',
            pres_socio_situacion: '-',
            pres_socio_adelantado: 34,
            pres_socio_en_fecha: 13,
            pres_socio_max_dias_atraso: 22,
            pres_socio_promedio: 0.0,
            pres_socio_socio_garante: '-',
            pres_socio_observacion: '-',
          },
          {
            pres_socio_nro_pmo: 2,
            pres_socio_aprobado_fecha: '1998-03-28',
            pres_socio_monto: 8240000,
            pres_socio_sistema: 'Alemán',
            pres_socio_cuotas: '48/48',
            pres_socio_tipo_pmo: 'EMERGENCIA',
            pres_socio_calificacion: 'B3',
            pres_socio_atrasos: 0,
            pres_socio_fecha_vencimiento: '2001-08-30',
            pres_socio_estado_pmo: 'Terminado',
            pres_socio_saldo_restante: 0,
            pres_socio_tasa_interes: 27,
            pres_socio_tipo_garantia: 'Garantía aporte',
            pres_socio_situacion: '-',
            pres_socio_adelantado: 34,
            pres_socio_en_fecha: 13,
            pres_socio_max_dias_atraso: 22,
            pres_socio_promedio: 0.0,
            pres_socio_socio_garante: '-',
            pres_socio_observacion: '-',
          },
          {
            pres_socio_nro_pmo: 3,
            pres_socio_aprobado_fecha: '1999-11-22',
            pres_socio_monto: 1802500,
            pres_socio_sistema: 'Francés',
            pres_socio_cuotas: '23/42',
            pres_socio_tipo_pmo: 'EMERGENCIA',
            pres_socio_calificacion: 'A',
            pres_socio_atrasos: 0,
            pres_socio_fecha_vencimiento: '2000-12-30',
            pres_socio_estado_pmo: 'Terminado',
            pres_socio_saldo_restante: 0,
            pres_socio_tasa_interes: 29,
            pres_socio_tipo_garantia: 'Sola firma',
            pres_socio_situacion: '-',
            pres_socio_adelantado: 12,
            pres_socio_en_fecha: 12,
            pres_socio_max_dias_atraso: 0,
            pres_socio_promedio: 0.0,
            pres_socio_socio_garante: '-',
            pres_socio_observacion: '-',
          },
          {
            pres_socio_nro_pmo: 4,
            pres_socio_aprobado_fecha: '2000-08-11',
            pres_socio_monto: 2781000,
            pres_socio_sistema: 'Alemán',
            pres_socio_cuotas: '23/52',
            pres_socio_tipo_pmo: 'EMERGENCIA',
            pres_socio_calificacion: 'A',
            pres_socio_atrasos: 0,
            pres_socio_fecha_vencimiento: '2001-09-15',
            pres_socio_estado_pmo: 'Terminado',
            pres_socio_saldo_restante: 0,
            pres_socio_tasa_interes: 24,
            pres_socio_tipo_garantia: 'Sola firma',
            pres_socio_situacion: '-',
            pres_socio_adelantado: 18,
            pres_socio_en_fecha: 6,
            pres_socio_max_dias_atraso: 0,
            pres_socio_promedio: 0.0,
            pres_socio_socio_garante: '-',
            pres_socio_observacion: '-',
          },
          {
            pres_socio_nro_pmo: 5,
            pres_socio_aprobado_fecha: '2001-08-02',
            pres_socio_sistema: 'Alemán',
            pres_socio_monto: 32135000,
            pres_socio_cuotas: '23/69',
            pres_socio_tipo_pmo: 'Ordinario',
            pres_socio_calificacion: 'A',
            pres_socio_atrasos: 0,
            pres_socio_fecha_vencimiento: '2007-03-01',
            pres_socio_estado_pmo: 'Solicitud',
            pres_socio_saldo_restante: 0,
            pres_socio_tasa_interes: 20,
            pres_socio_tipo_garantia: 'Sola firma',
            pres_socio_situacion: '-',
            pres_socio_adelantado: 26,
            pres_socio_en_fecha: 40,
            pres_socio_max_dias_atraso: 0,
            pres_socio_promedio: 0.0,
            pres_socio_socio_garante: '-',
            pres_socio_observacion: '-',
          },
          {
            pres_socio_nro_pmo: 6,
            pres_socio_aprobado_fecha: '2002-10-09',
            pres_socio_monto: 3090000,
            pres_socio_sistema: 'Alemán',
            pres_socio_cuotas: '24',
            pres_socio_tipo_pmo: 'Ext.S.Fir.SA',
            pres_socio_calificacion: 'A',
            pres_socio_atrasos: 0,
            pres_socio_fecha_vencimiento: '2004-11-01',
            pres_socio_estado_pmo: 'Juicio/Cob',
            pres_socio_saldo_restante: 0,
            pres_socio_tasa_interes: 27,
            pres_socio_tipo_garantia: 'Sola firma',
            pres_socio_situacion: '-',
            pres_socio_adelantado: 0,
            pres_socio_en_fecha: 24,
            pres_socio_max_dias_atraso: 0,
            pres_socio_promedio: 0.0,
            pres_socio_socio_garante: '-',
            pres_socio_observacion: '-',
          },
          {
            pres_socio_nro_pmo: 7,
            pres_socio_aprobado_fecha: '2003-08-04',
            pres_socio_monto: 6308750,
            pres_socio_sistema: 'Alemán',
            pres_socio_cuotas: '36',
            pres_socio_tipo_pmo: 'Parl.S.Fir.10S',
            pres_socio_calificacion: 'A',
            pres_socio_atrasos: 0,
            pres_socio_fecha_vencimiento: '-',
            pres_socio_estado_pmo: 'Cobro normal',
            pres_socio_saldo_restante: 0,
            pres_socio_tasa_interes: 23,
            pres_socio_tipo_garantia: 'Sola firma',
            pres_socio_situacion: '-',
            pres_socio_adelantado: 34,
            pres_socio_en_fecha: 2,
            pres_socio_max_dias_atraso: 0,
            pres_socio_promedio: 0.0,
            pres_socio_socio_garante: '-',
            pres_socio_observacion: '-',
          },
        ],
        tarjetas: [
          {
            tarj_linea_credito: 11550000,
            tarj_linea_especial: 10000000,
            tarj_saldo: 1750000,
            tarj_pago_minimo: 144000,
            tarj_fecha_ultimo_pago: '2021-04-08',
            tarj_dias_vencimiento: 0,
            tarj_saldo_cuota: 0,
            tarj_fecha_vencimiento: '2021-05-10',
            tarj_estado: 'judicial',
            tarj_refinanciamiento_pendiente: 300000,
            tarj_monto_ultimo_pago: 144000,
            tarj_ajuste_TCR: 0,
          },
        ],
        ahorros: [
          {
            ahor_cuenta_nro: 0,
            ahor_tipo_cuenta: 'Plazo fijo',
            ahor_cantidad: 10000000,
          },
          {
            ahor_cuenta_nro: 1,
            ahor_tipo_cuenta: 'Monto fijo',
            ahor_cantidad: 5000000,
          },
          {
            ahor_cuenta_nro: 2,
            ahor_tipo_cuenta: 'Caja de ahorro',
            ahor_cantidad: 500000,
          },
        ],
        gestion_cobranza: [
          {
            geco_sistema: 'Judicial',
            geco_capital: 0,
            geco_gastos_judiciales: 287000,
            geco_honorarios: 1250000,
            geco_gastos_administrativos: 235000,
            geco_tipo: 'Préstamo',
          },
          {
            geco_sistema: 'Judicial',
            geco_capital: 500000,
            geco_gastos_judiciales: 287000,
            geco_honorarios: 2500000,
            geco_gastos_administrativos: 125000,
            geco_tipo: 'Tarjeta',
          },
        ],
      },
    ]);
  }
}
