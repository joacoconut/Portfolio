import * as Yup from 'yup';
import axios from "axios";
import { FormikHelpers } from 'formik';

interface FormValues {
    email: string;
    msg: string;
}

export const initialValues: FormValues = {
    email: '',
    msg: ''
}

export const validationSchema = Yup.object({
    email: Yup.string()
        .email('Email no válido.')
        .required('Por favor, ingrese su email.'),

    msg: Yup.string()
        .min(10, 'Por favor, ingrese al menos 10 caracteres.')
        .required('Por favor, envíame algún mensaje.')
})

export const handleSubmit = async (values: FormValues, { resetForm, setStatus }:FormikHelpers<FormValues>) => {

    const res = await axios({
        method: "POST",
        url: "https://formspree.io/f/xyyoedby",
        data: values
    })

    
    if(res.status === 200) {
        resetForm();
        setStatus("Enviado correctamente")
    }


}