import toast from 'react-hot-toast'
import { authenticate } from './helper'

/** validate login page username */
export async function usernameValidate(values){
    const errors = usernameVerify({}, values);

    if(values.username){
        // check user exist or not
        const { status } = await authenticate(values.username);
        
        if(status !== 200){
            errors.exist = toast.error('Este usuario no existe...!')
        }
    }

    return errors;
}

/** validate password */
export async function passwordValidate(values){
    const errors = passwordVerify({}, values);

    return errors;
}

/** validate reset password */
export async function resetPasswordValidation(values){
    const errors = passwordVerify({}, values);

    if(values.password !== values.confirm_pwd){
        errors.exist = toast.error("La contraseña no coincide...!");
    }

    return errors;
}

/** validate register form */
export async function registerValidation(values){
    const errors = usernameVerify({}, values);
    passwordVerify(errors, values);
    emailVerify(errors, values);

    return errors;
}

/** validate profile page */
export async function profileValidation(values){
    const errors = emailVerify({}, values);
    return errors;
}


/** ************************************************* */

/** validate password */
function passwordVerify(errors = {}, values){
    /* eslint-disable no-useless-escape */
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    if(!values.password){
        errors.password = toast.error("Se requiere contraseña...!");
    } else if(values.password.includes(" ")){
        errors.password = toast.error("Contraseña incorrecta...!");
    }else if(values.password.length < 4){
        errors.password = toast.error("La contraseña debe tener más de 4 caracteres");
    }else if(!specialChars.test(values.password)){
        errors.password = toast.error("La contraseña debe tener un carácter especial");
    }

    return errors;
}


/** validate username */
function usernameVerify(error = {}, values){
    if(!values.username){
        error.username = toast.error('Usuario Requerido...!');
    }else if(values.username.includes(" ")){
        error.username = toast.error('Usuario Invalido...!')
    }

    return error;
}

/** validate email */
function emailVerify(error ={}, values){
    if(!values.email){
        error.email = toast.error("Gmail Requerido...!");
    }else if(values.email.includes(" ")){
        error.email = toast.error("Email incorrecto...!")
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        error.email = toast.error("Dirección de correo electrónico no válida...!")
    }

    return error;
}