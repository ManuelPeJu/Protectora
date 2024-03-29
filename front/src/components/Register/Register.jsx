import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
// import { postUsers } from "../../redux/actions"



const Register = () => {
    const disptach = useDispatch()
    const navigate = useNavigate()

    const [input, setInput] = useState({
        name: "",
        password: "",
        email: "",
        phoneNumber:"",
    })

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault(e)

        try {
            
            if(!input.name || !input.password || !input.email || !input.phoneNumber) {
                return Swal.fire({
                    title: "Cuidado",
                    text: "Faltan campos por rellenar",
                    icon: "warning",    
                    timer: 2000
                })
            }
            // disptach(postUsers(input));
            setInput({
                name: "",
                password: "",
                email: "",
                phoneNumber:"",
            })
            navigate.push("/iniciarsesion")
            return Swal.fire ({
                title:"Felicidades!",
                text:"Registo completado",
                icon: "success",
                timer: 2000
            })
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <>
            <div className='main-form-register'>
                <form className='fluid-container body-register-form' onSubmit={(e)=> handleSubmit(e)}>
                    <div className='form-divs'>
                        <label>Nombre: </label>
                            <input className='body-input'
                                type="text"
                                value={input.correo}
                                name="name"
                                placeholder='Escriba su nombre...'
                                onChange={handleChange}
                            />

                        <label>Password: </label>
                            <input className='body-input'
                                type="password"
                                value={input.contraseña}
                                name="password"
                                placeholder='Escriba su contraseña...'
                                onChange={handleChange}
                            />

                        <label>Email: </label>
                            <input className='body-input'
                                type="email"
                                value={input.email}
                                name="email"
                                placeholder='Escriba su correo...'
                                onChange={handleChange}
                            />

                        <label>Celular: </label>
                            <input className='body-input'
                                type="text"
                                value={input.phoneNumber}
                                name="phoneNumber"
                                placeholder='Escriba su celular...'
                                onChange={handleChange}
                            />
                        <br />
                            <button className='register-btn' type='submit'>Registrarse!</button>
                        <br />
                    </div>
                </form>
            </div>
        </>
  )
}

export default Register