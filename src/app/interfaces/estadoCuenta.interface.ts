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
  datos_personales_general_socio_datos: DatosPersonales;
  datos_personales_general_conyuge_datos: DatosPersonales;
}
export interface DatosPersonales {
  datos_personales_nombre: string;
  datos_personales_apellido: string;
  datos_personales_cedula_nro: number;
  datos_personales_direccion: string;
  datos_personales_telefono: string;
  datos_personales_estado: string;
  datos_personales_socio_nro: number;
  datos_personales_fecha_ingreso: string;
  datos_personales_antiguedad: string;
  datos_personales_ultimo_antecedente: string;
}

export interface DatosAnaliticos {
  datos_analiticos_tasa_pref: number;
  datos_analiticos_aportes: Aportes;
  datos_analiticos_solidaridad: Solidaridad;
  datos_analiticos_saldos_pendientes: SaldosPendientes;
  datos_analiticos_calificaciones: Calificaciones;
  datos_analiticos_total_ahorros: number;
  datos_analiticos_salario_actual: number;
}

export interface Aportes {
  aportes_monto: number;
  aportes_cant_pend: number;
  aportes_ult_pag: string;
}

export interface Solidaridad {
  solidaridad_cant_pend: number;
  solidaridad_ult_pag: string;
}

export interface SaldosPendientes {
  saldos_pendientes_prestamos: number;
  saldos_pendientes_cobranzas: number;
  saldos_pendientes_tarjetas: number;
}

export interface Calificaciones {
  calificaciones_calif_ult: string;
  calificaciones_promedio: number;
}

export interface DatosLaborales {
  datos_laborales_socio_empresa: string;
  datos_laborales_socio_direccion: string;
  datos_laborales_socio_telefono: string;
  datos_laborales_socio_salario: number;
  datos_laborales_socio_fecha_ingreso: string;
  datos_laborales_socio_fecha_egreso: string | null;
  datos_laborales_socio_id_empresa: number;
}
export interface Prestamos {
  prestamos_socio_nro_pmo: number;
  prestamos_socio_aprobado_fecha: string;
  prestamos_socio_monto: number;
  prestamos_socio_sistema: string;
  prestamos_socio_cuotas: string;
  prestamos_socio_tipo_pmo: string;
  prestamos_socio_calificacion: string;
  prestamos_socio_atrasos: number;
  prestamos_socio_fecha_vencimiento: string;
  prestamos_socio_estado_pmo: string;
  prestamos_socio_saldo_restante: number;
  prestamos_socio_tasa_interes: number;
  prestamos_socio_tipo_garantia: string;
  prestamos_socio_situacion: string;
  prestamos_socio_adelantado: number;
  prestamos_socio_en_fecha: number;
  prestamos_socio_max_dias_atraso: number;
  prestamos_socio_promedio: number;
  prestamos_socio_socio_garante: string;
  prestamos_socio_observacion: string;
}

export interface Tarjetas {
  tarjetas_linea_credito: number;
  tarjetas_linea_especial: number;
  tarjetas_saldo: number;
  tarjetas_pago_minimo: number;
  tarjetas_fecha_ultimo_pago: string;
  tarjetas_dias_vencimiento: number;
  tarjetas_saldo_cuota: number;
  tarjetas_fecha_vencimiento: string;
  tarjetas_estado: string;
  tarjetas_refinanciamiento_pendiente: number;
  tarjetas_monto_ultimo_pago: number;
  tarjetas_ajuste_TCR: number;
}

export interface Ahorros {
  ahorros_cuenta_nro: number;
  ahorros_tipo_cuenta: string;
  ahorros_cantidad: number;
}
export interface GestionCobranza {
  gestion_cobranza_sistema: string;
  gestion_cobranza_capital: number;
  gestion_cobranza_gastos_judiciales: number;
  gestion_cobranza_honorarios: number;
  gestion_cobranza_gastos_administrativos: number;
  gestion_cobranza_tipo: string;
}

export interface SocioSugerido {
  socio_sugerido_nombre: string;
  socio_sugerido_apellido: string;
  socio_sugerido_nro_socio: number;
  socio_sugerido_nro_cedula: number;
  socio_sugerido_telefono: number;
  socio_sugerido_input?: string;
}

