import { Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import "./Formulario.css"
import { useFormik } from 'formik'
import * as Yup from "yup"


const Formulario = () => {

    let valoresIniciales={
        nombre:"",
        email:"",
        contrasena:""
    }

    const { handleChange, handleSubmit, values, errors } = useFormik({
        initialValues:valoresIniciales,

        onSubmit:(data)=>{
            console.log(data);
        },

        validationSchema: Yup.object({
            nombre:Yup.string().required("Debes ingresar un nombre"),
            email:Yup.string().required("Debes ingresar un email"),
            contrasena:Yup.string().required("Debes ingresar una contrasena")
        })
    })

  return (
    <div>
        <Typography color="primary" variant="h2" align="center">Formulario de Registro</Typography>
        <form className='form-container' onSubmit={ handleSubmit}>
            <Grid container 
                alignItems={"center"} 
                justifyContent={"space-evenly"}
                spacing={2} 
                sx={{width:"100%"}}
            >
                <Grid item 
                    xs={12} 
                    md={7}
                >
                    <TextField  
                        type="text" 
                        label="Ingrese su nombre" 
                        variant="outlined" 
                        fullWidth
                        name='nombre'
                        onChange={handleChange}
                        value={values.nombre}   
                        error={errors.nombre}    
                        helperText={errors.nombre}                  
                    />
                </Grid>
                <Grid item 
                    xs={12} 
                    md={7}
                >
                    <TextField 
                        type="email" 
                        id="outlined-basic" 
                        label="Ingrese su email" 
                        fullWidth 
                        variant="outlined"
                        name='email' 
                        onChange={handleChange}
                        value={values.email}
                        error={errors.email}     
                        helperText={errors.email}  
                    />
                </Grid>
                <Grid item 
                    xs={12}
                    md={7}
                >
                    <TextField 
                        type="password" 
                        id="outlined-basic" 
                        label="Ingrese su contrasena" 
                        fullWidth 
                        variant="outlined"
                        name='contrasena'
                        onChange={handleChange}  
                        value={values.contrasena}
                        error={errors.contrasena} 
                        helperText={errors.contrasena}     
                    />
                </Grid>
            </Grid> 
            <Button type="submit" variant='contained'>Enviar Formulario</Button>           
        </form>
    </div>
  )
}

export default Formulario