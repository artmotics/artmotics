import React, { useEffect }  from "react";
import { useQuery } from "@apollo/client";
import { GET_AVANCES } from "graphql/avances/queries";
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { Enum_Rol, Enum_EstadoUsuario } from 'utils/enums';


const IndexAvances  = () =>{
    const {data, error, loading} = useQuery(GET_AVANCES)

    useEffect(() => {
        console.log('data servudir', data);
    }, [data]);

    return <div>
        Datos de los avances:
        <table className='tabla'>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Descripcion</th>
              <th>Nombre del proyecto</th>
              <th>Estado del proyecto</th>
              <th>Editar</th>
              
            </tr>
          </thead>
          <tbody>
            {data && data.Avances ? (
              <>
                {data.Avances.map((u) => {
                  return (
                    <tr key={u._id}>
                      <td>{u.fecha}</td>
                      <td>{u.descripcion}</td>
                      <td>{u.proyecto.nombre}</td>
                      <td>{u.proyecto.estado}</td>
                      <td>
                        <Link to={`/avances/editar/${u._id}`}>
                          <i className='fas fa-pen text-yellow-600 hover:text-yellow-400 cursor-pointer' />
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </>
            ) : (
              <div>No autorizado</div>
            )}
          </tbody>
        </table>

    </div>;
};

export default IndexAvances;