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
  DAPG_socio_datos: DatosPersonales;
  DAPG_conyuge_datos: DatosPersonales;
}
export interface DatosPersonales {
  DAPE_nombre: string;
  DAPE_apellido: string;
  DAPE_cedula_nro: number;
  DAPE_direccion: string;
  DAPE_telefono: string;
  DAPE_estado: string;
  DAPE_socio_nro: number;
  DAPE_fecha_ingreso: string;
  DAPE_ultimo_antecedente: string;
}

export interface DatosAnaliticos {
  DAAN_tasa_pref: number;
  DAAN_aportes: Aportes;
  DAAN_solidaridad: Solidaridad;
  DAAN_saldos_pendientes: SaldosPendientes;
  DAAN_calificaciones: Calificaciones;
}

export interface Aportes {
  APOR_monto: number;
  APOR_cant_pend: number;
  APOR_ult_pag: string;
}

export interface Solidaridad{
  SOLI_cant_pend: number;
  SOLI_ult_pag: string;
}

export interface SaldosPendientes {
  SAPE_prestamos: number;
  SAPE_cobranzas: number;
  SAPE_tarjetas: number;
}

export interface Calificaciones {
  CALI_calif_ult: string;
  CALI_promedio: number;
}

export interface DatosLaborales {
  DALA_socio_empresa: string;
  DALA_socio_direccion: string;
  DALA_socio_telefono: string;
  DALA_socio_salario: number;
  DALA_socio_fecha_ingreso: string;
  DALA_socio_fecha_egreso: string;
  DALA_socio_fecha_grabacion: string;
}
export interface Prestamos {
  PRES_socio_nro_pmo: number;
  PRES_socio_aprobado_fecha: string;
  PRES_socio_monto: number;
  PRES_socio_sistema: string;
  PRES_socio_cuotas: string;
  PRES_socio_tipo_pmo: string;
  PRES_socio_calificacion: string;
  PRES_socio_atrasos: number;
  PRES_socio_fecha_vencimiento: string;
  PRES_socio_estado_pmo: string;
  PRES_socio_saldo_restante: number;
  PRES_socio_tasa_interes: number;
  PRES_socio_tipo_garantia: string;
  PRES_socio_situacion: string;
  PRES_socio_adelantado: number;
  PRES_socio_en_fecha: number;
  PRES_socio_max_dias_atraso: number;
  PRES_socio_promedio: number;
  PRES_socio_socio_garante: string;
  PRES_socio_observacion: string;

}

export interface Tarjetas {
  TARJ_linea_credito: number;
  TARJ_linea_especial: number;
  TARJ_saldo: number;
  TARJ_pago_minimo: number;
  TARJ_fecha_ultimo_pago: string;
  TARJ_dias_vencimiento: number;
  TARJ_saldo_cuota: number;
  TARJ_fecha_vencimiento: string;
  TARJ_estado: string;
  TARJ_refinanciamiento_pendiente: number;
  TARJ_monto_ultimo_pago: number;
  TARJ_ajuste_TCR: number;
}

export interface Ahorros {
  AHOR_cuenta_nro: number;
  AHOR_tipo_cuenta: string;
  AHOR_cantidad: number;
}

export interface GestionCobranza {
  GECO_sistema: string;
  GECO_capital: number;
  GECO_gastos_judiciales: number;
  GECO_honorarios: number;
  GECO_gastos_administrativos: number;
  GECO_tipo: string;
}