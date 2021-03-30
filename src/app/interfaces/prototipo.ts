export interface EstadoCuenta {
  datosPersonales: DatosPersonales;
  datosLaborales: DatosLaborales[];
  otrosDatos: OtrosDatos;
  prestamos: Prestamos[];
  tarjetas: Tarjetas[];
}

export interface DatosPersonales {
  socio: number;
  nombre: string;
  domicilio: string;
  conyugue: string;
  tasaPref: number;
  telefono: number;
  estado: string;
  fechaIngreso: string;
  ultimoAntecedente: string;
}

interface DatosLaborales {
  empresa: string;
  direccion: string;
  telefono: string;
  salario: number;
  fechaIngreso: number;
  fechaEgreso: number;
  fechaGrabacion: number;
}

interface OtrosDatos {
  socio: {
    aportes: {
      saldo: number;
      situacion: number;
    },
    solidaridad: {
      saldo: number;
      situacion: number;
    },
    ahorros: {
      saldo: number;
      situacion: number;
    },
  }
  conyugue: {
    aportes: {
      saldo: number;
      situacion: number;
    },
    solidaridad: {
      saldo: number;
      situacion: number;
    },
  }
}

interface Prestamos {
    sistema: string;
    numero: number;
    fecApro: number;
    monto: number;
    garante: string;
    saldo: number;
    cuota: number;
    cantCuo: number;
    cantPag: number;
    adel: number;
    enFecha: number;
    tPmo: string;
    tGar: string;
    calificacion: string;
    maxDiasAtraso: number;
    estadoPmo: string;
    situacion: string;
    cancFecha: number;
    tasaInt: number;
    promedio: number;
    atraso: number;
}

interface Tarjetas {
    lineaCred: any;
    lineaEsp: any;
    saldo: number;
    pagoMin: number;
    fecUIPag: number;
    diasVenc: number;
    saldoCuota: number;
    estado: number;
    fechaVenc: number;
    refPend: any;
    montoUltPag: number;
    ajusteMinTC: any;
}














