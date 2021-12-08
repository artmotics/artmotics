import React , { useEffect } from 'react'
import { useQuery } from '@apollo/client';
import { GET_USERS } from 'graphql/users/queries';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom'; 

const IndexUsuarios = () => {

    const {data,error,loading}=useQuery(GET_USERS);

    useEffect(() => {
        console.log("data sevidor",data)
    }, [data]);

    useEffect(()=>{
        if(error){
            toast.error("Error Consultando Los Usuarios")
        }
    },[error]);

    if(loading)return <div>Cargando...</div>

    return (
        <div>
      Datos Usuarios:
      <table className='tabla'>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Correo</th>
            <th>Identificación</th>
            <th>Rol</th>
            <th>Estado</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.Usuarios.map((u) => {
              return (
                <tr key={u._id}>
                  <td>{u.nombre}</td>
                  <td>{u.apellido}</td>
                  <td>{u.correo}</td>
                  <td>{u.identificacion}</td>
                  <td>{u.rol}</td>
                  <td>{u.estado}</td>
                  <td>
                    <Link to={`/usuarios/editar/${u._id}`}>
                      <i className='fas fa-pen text-yellow-600 hover:text-yellow-400 cursor-pointer' />
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
    )
};

export default IndexUsuarios;
