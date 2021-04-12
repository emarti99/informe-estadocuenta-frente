export interface EstadoCuenta {
  datos_personales: DatosPersonales;
  datos_laborales: DatosLaborales[];
  prestamos: Prestamos[];
}
interface DatosPersonales {
  DAPE_socio_nro: number;
  DAPE_nombre: string;
  DAPE_direccion: string;
  DAPE_telefono: string;
  DAPE_estado: string;
  DAPE_conyuge: string;
  DAPE_tasa_pref: number;
  DAPE_fecha_ingreso: string;
  DAPE_ultimo_antecedente: string;
}
interface DatosLaborales {
  DALA_socio_empresa: string;
  DALA_socio_direccion: string;
  DALA_socio_telefono: string;
  DALA_socio_salario: number;
  DALA_socio_fecha_ingreso: string;
  DALA_socio_fecha_egreso: string;
  DALA_socio_fecha_grabacion: string;
}
interface Prestamos {
  PRES_socio_aprobado_fecha: string;
  PRES_socio_monto: number;
  PRES_socio_cuotas: string;
  PRES_socio_tipo_pmo: string;
  PRES_socio_calificacion: string;
  PRES_socio_atrasos: number;
  PRES_socio_estado_pmo: string;
  PRES_socio_mas_detalles: PrestamosDetalles;
}
interface PrestamosDetalles {
  PRDE_socio_nro_pmo: number;
  PRDE_socio_saldo_restante: number;
  PRDE_socio_sistema: string;
  PRDE_socio_tasa_interes: number;
  PRDE_socio_tipo_garantia: string;
  PRDE_socio_situacion: string;
  PRDE_socio_adelantado: number;
  PRDE_socio_en_fecha: number;
  PRDE_socio_max_dias_atraso: number;
  PRDE_socio_fecha_vencimiento: string;
  PRDE_socio_observacion: string;
  PRDE_socio_socio_garante: string;
  PRDE_socio_nombre_garante: string;
}

// export interface EstadoCuenta {
//   datosPersonales: DatosPersonales;
//   datosLaborales: DatosLaborales[];
//   otrosDatos: OtrosDatos;
//   prestamos: Prestamos[];
//   tarjetas: Tarjetas[];
// }

// export interface DatosPersonales {
//   socio: number;
//   nombre: string;
//   domicilio: string;
//   conyuge: string;
//   tasaPref: number;
//   telefono: number;
//   estado: string;
//   fechaIngreso: string;
//   ultimoAntecedente: string;
// }

// export interface DatosLaborales {
//   empresa: string;
//   direccion: string;
//   telefono: string;
//   salario: number;
//   fechaIngreso: string;
//   fechaEgreso: string;
//   fechaGrabacion: string;
// }

// interface OtrosDatos {
//   socio: {
//     aportes: {
//       saldo: number;
//       situacion: number;
//     },
//     solidaridad: {
//       saldo: number;
//       situacion: number;
//     },
//     ahorros: {
//       saldo: number;
//       situacion: number;
//     },
//   }
//   conyugue: {
//     aportes: {
//       saldo: number;
//       situacion: number;
//     },
//     solidaridad: {
//       saldo: number;
//       situacion: number;
//     },
//   }
// }

// interface Prestamos {
//     sistema: string;
//     numero: number;
//     fecApro: number;
//     monto: number;
//     garante: string;
//     saldo: number;
//     cuota: number;
//     cantCuo: number;
//     cantPag: number;
//     adel: number;
//     enFecha: number;
//     tPmo: string;
//     tGar: string;
//     calificacion: string;
//     maxDiasAtraso: number;
//     estadoPmo: string;
//     situacion: string;
//     cancFecha: number;
//     tasaInt: number;
//     promedio: number;
//     atraso: number;
// }

// interface Tarjetas {
//     lineaCred: any;
//     lineaEsp: any;
//     saldo: number;
//     pagoMin: number;
//     fecUIPag: number;
//     diasVenc: number;
//     saldoCuota: number;
//     estado: number;
//     fechaVenc: number;
//     refPend: any;
//     montoUltPag: number;
//     ajusteMinTC: any;
// }
