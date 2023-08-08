import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

const Register = () => {
    const disptach = useDispatch()
    const history = useHistory()

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
            disptach(postUsers(input));
            setInput({
                name: "",
                password: "",
                email: "",
                phoneNumber:"",
            })
            history.push("/iniciarsesion")
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
    <div>Register</div>
  )
}

export default Register