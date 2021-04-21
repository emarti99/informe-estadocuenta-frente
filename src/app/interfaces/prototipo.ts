export interface EstadoCuenta {
  datos_personales: DatosPersonalesGeneral;
  datos_analiticos: DatosAnaliticos;
  datos_laborales: DatosLaborales[];
  prestamos: Prestamos[];
  tarjetas: Tarjetas[];
  ahorros: Ahorros[];
  gestion_cobranza: GestionCobranza[];
}

interface DatosPersonalesGeneral {
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
  DAAN_prestamos_al_dia: string;
  DAAN_aportes_monto: number;
  DAAN_aportes_cant_pend: number;
  DAAN_aportes_ult_pag: string;
  DAAN_calif_ult: string;
  DAAN_promedio: number;
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
  PRES_socio_mas_detalles: PrestamosDetalles;
}
interface PrestamosDetalles {
  PRDE_socio_saldo_restante: number;
  PRDE_socio_tasa_interes: number;
  PRDE_socio_tipo_garantia: string;
  PRDE_socio_situacion: string;
  PRDE_socio_adelantado: number;
  PRDE_socio_en_fecha: number;
  PRDE_socio_max_dias_atraso: number;
  PRDE_socio_observacion: string;
  PRDE_socio_socio_garante: string;
  PRDE_socio_nombre_garante: string; //No se muestra
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

interface Ahorros {
  AHOR_cuenta_nro: number;
  AHOR_tipo_cuenta: string;
  AHOR_cantidad: number;
}

interface GestionCobranza {
  GECO_sistema: string;
  GECO_capital: number;
  GECO_gastos_judiciales: number;
  GECO_honorarios: number;
  GECO_gastos_administrativos: number;
  GECO_tipo: string;
}


