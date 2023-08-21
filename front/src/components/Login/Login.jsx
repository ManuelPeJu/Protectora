import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Swal from "sweetalert2"
import getUserByLogin from "../redux/actions/index"

const Login = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        try {
            if(!password || !email) {
                return Swal.fire ({
                    title: "Cuidado",
                    text: "Faltan campos por rellenar",
                    icon: "warning",
                    timer: 2000
                })
            } else {
                dispatch(getUserByLogin(email, password));
            }
        } catch {

        }
    };

  return (
    <>
        <div className='login-bg'>
            <div className="container main-container">
                <form className='body-form' onSubmit={(e) => handleSubmit(e)}>
                    <div className='form-divs'>
                        <label>Correo: </label>
                            <input className='body-input'
                                type="email"
                                value={email}
                                name= "email"
                                placeholder='Ingrese su correo...'
                                onChange={(e) => setEmail(e.target.value)}
                            />                  
                   
                        <label>Contraseña: </label>
                            <input className='body-input'
                                type="password"
                                value={password}
                                name= "password"
                                placeholder='Ingrese su contraseña...'
                                onChange={(e) => setPassword(e.target.value)}
                            />
                    </div>
                    <br />
                    <button className='login-btn' type='submit'>Iniciar Sesion</button>

                    <p>
                        <b> ¿Aún no tienes cuenta? <Link to="/Register">Registrate</Link> aquí. </b>
                    </p>
                </form>
            </div>
        </div>
    </>
  );
};

export default Login;
