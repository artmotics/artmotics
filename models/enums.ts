enum Enum_Rol {
  estudiante = "Estudiante",
  lider = "Lider",
  administrador = "Administrador",
}
enum Enum_EstadoUsuario {
  pendiente = "Pendiente",
  autorizado = "Autorizado",
  no_autorizado = "No Autorizado",
}
enum Enum_Estadoproyecto {
  activo = "Activo",
  inactivo = "Inactivo",
}

enum Enum_FaseProyecto {
  iniciado = "Iniciado",
  desarrollo = "En Desarrollo",
  terminado = "Terminado",
  nula = "",
}
enum Enum_TipoObjetivo {
  general = "General",
  especifico = "Especifico",
}
export {
  Enum_Rol,
  Enum_EstadoUsuario,
  Enum_Estadoproyecto,
  Enum_FaseProyecto,
  Enum_TipoObjetivo,
};
