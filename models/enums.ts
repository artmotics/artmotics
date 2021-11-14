enum Enum_Rol{
    estudiante = "Estudiante",
    lider = "Lider",
    administrador = "Administrador",
}
enum Enum_EstadoUsuario{
    pendiente = "Pendiente",
    autorizado = "Autorizado",
    no_autorizado = "Administrador",
}
enum Enum_EstadoProyecto{
    activo = "Activo",
    inactivo = "Inactivo"
}
enum Enum_FaseProyecto{
    iniciado = "Iniciado",
    desarrollo = "Desarrllo",
    terminado = "Terminado",
    nula = "",
}

export {Enum_Rol , Enum_EstadoUsuario , Enum_EstadoProyecto, Enum_FaseProyecto}