export interface EstadoCuenta {
  datos_personales: DatosPersonalesGeneral;
  datos_analiticos: DatosAnaliticos;
  datos_laborales: DatosLaborales[];
  prestamos: Prestamos[];
  tarjetas: Tarjetas[];
  ahorros: Ahorros[];
  gestion_cobranza: GestionCobranza[];
}

export interface DatosPersonalesGeneral {
  dapg_socio_datos: DatosPersonales;
  dapg_conyuge_datos: DatosPersonales;
}
export interface DatosPersonales {
  dape_nombre: string;
  dape_apellido: string;
  dape_cedula_nro: number;
  dape_direccion: string;
  dape_telefono: string;
  dape_estado: string;
  dape_socio_nro: number;
  dape_fecha_ingreso: string;
  dape_ultimo_antecedente: string;
}

export interface DatosAnaliticos {
  daan_tasa_pref: number;
  daan_aportes: Aportes;
  daan_solidaridad: Solidaridad;
  daan_saldos_pendientes: SaldosPendientes;
  daan_calificaciones: Calificaciones;
}

export interface Aportes {
  apor_monto: number;
  apor_cant_pend: number;
  apor_ult_pag: string;
}

export interface Solidaridad {
  soli_cant_pend: number;
  soli_ult_pag: string;
}

export interface SaldosPendientes {
  sape_prestamos: number;
  sape_cobranzas: number;
  sape_tarjetas: number;
}

export interface Calificaciones {
  cali_calif_ult: string;
  cali_promedio: number;
}

export interface DatosLaborales {
  dala_socio_empresa: string;
  dala_socio_direccion: string;
 dala_socio_telefono: string;
 dala_socio_salario: number;
 dala_socio_fecha_ingreso: string;
 dala_socio_fecha_egreso: string;
 dala_socio_fecha_grabacion: string;
}
export interface Prestamos {
  pres_socio_nro_pmo: number;
  pres_socio_aprobado_fecha: string;
  pres_socio_monto: number;
  pres_socio_sistema: string;
  pres_socio_cuotas: string;
  pres_socio_tipo_pmo: string;
  pres_socio_calificacion: string;
  pres_socio_atrasos: number;
  pres_socio_fecha_vencimiento: string;
  pres_socio_estado_pmo: string;
  pres_socio_saldo_restante: number;
  pres_socio_tasa_interes: number;
  pres_socio_tipo_garantia: string;
  pres_socio_situacion: string;
  pres_socio_adelantado: number;
  pres_socio_en_fecha: number;
  pres_socio_max_dias_atraso: number;
  pres_socio_promedio: number;
  pres_socio_socio_garante: string;
  pres_socio_observacion: string;
}

export interface Tarjetas {
  tarj_linea_credito: number;
  tarj_linea_especial: number;
  tarj_saldo: number;
  tarj_pago_minimo: number;
  tarj_fecha_ultimo_pago: string;
  tarj_dias_vencimiento: number;
  tarj_saldo_cuota: number;
  tarj_fecha_vencimiento: string;
  tarj_estado: string;
  tarj_refinanciamiento_pendiente: number;
  tarj_monto_ultimo_pago: number;
  tarj_ajuste_TCR: number;
}

export interface Ahorros {
  ahor_cuenta_nro: number;
  ahor_tipo_cuenta: string;
  ahor_cantidad: number;
}

export interface GestionCobranza {
  geco_sistema: string;
  geco_capital: number;
  geco_gastos_judiciales: number;
  geco_honorarios: number;
  geco_gastos_administrativos: number;
  geco_tipo: string;
}
