import React , { useEffect }from 'react'
import { useParams } from 'react-router';
import { useQuery , useMutation } from '@apollo/client';
import { GET_USERS_BY_ID} from 'graphql/users/queries';
import Input from 'components/input';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom'; 
import DropDown from 'components/Dropdown';
import ButtonLoading from 'components/ButtonLoading';
import useFormData from 'hooks/useFormData';
import { EDITAR_USUARIO } from 'graphql/users/mutatutions';
import { Enum_Rol } from 'utils/enum';

const EditarUsuario = () => {
    
    const { form, formData, updateFormData } = useFormData(null);
    const {_id} =  useParams();

    const {data:queryData,error:queryError,loading:queryLoading}=useQuery(GET_USERS_BY_ID,{
        variables:{ _id},
    });

    const[editarUsuario,{data:mutationData,loading:mutationLoading,error:mutationError}] = useMutation(EDITAR_USUARIO);

    
    const submitForm = async (e) => {
        e.preventDefault();
        console.log('fd',formData);
        editarUsuario({
            variables:{_id,...formData},
        });
    };

    // useEffect(()=>{
    //     console.log('mutacion edicion', mutationData)
    // },[mutationData]);
    useEffect(() => {
        if (mutationData) {
          toast.success('Usuario modificado con exito');
        }
    }, [mutationData,mutationError]);
    useEffect(()=>{
        if(mutationError){
            toast.error("Error modificando los Usuarios")
        }
    },[mutationError]);
    
    console.log(queryData);

    if(queryLoading)return <div>Cargando...</div>

    return (
        <div className='flew flex-col w-full h-full items-center justify-center p-10'>
        <Link to='/usuarios'>
          <i className='fas fa-arrow-left text-gray-600 cursor-pointer font-bold text-xl hover:text-gray-900' />
        </Link>
        <h1 className='m-4 text-3xl text-gray-800 font-bold text-center'>Editar Usuario</h1>
        <form
          onSubmit={submitForm}
          onChange={updateFormData}
          ref={form}
          className='flex flex-col items-center justify-center'
        >
          <Input
            label='Nombre de la persona:'
            type='text'
            name='nombre'
            defaultValue={queryData.Usuario.nombre}
            required={true}
          />
          <Input
            label='Apellido de la persona:'
            type='text'
            name='apellido'
            defaultValue={queryData.Usuario.apellido}
            required={true}
          />
          <Input
            label='Correo de la persona:'
            type='email'
            name='correo'
            defaultValue={queryData.Usuario.correo}
            required={true}
          />
          <Input
            label='Identificación de la persona:'
            type='text'
            name='identificacion'
            defaultValue={queryData.Usuario.identificacion}
            required={true} 
          />
          <DropDown
            label='Rol de la persona:'
            name='rol'
            defaultValue={queryData.Usuario.rol}
            required={true}
            options={Enum_Rol}
          />
          <ButtonLoading
            disabled={Object.keys(formData).length === 0}
            loading={mutationLoading}
            text='Confirmar'
          />
        </form>
      </div>
            
        
    )
}

export default EditarUsuario;