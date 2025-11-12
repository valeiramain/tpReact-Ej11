import {Form,Button} from 'react-bootstrap';
import ListaNoticias from './ListaNoticias'
import { useForm } from "react-hook-form"
import { useState,useEffect } from 'react';


const Formulario = () => {
    const [arrayNoticias, setArrayNoticias] = useState([])

    // para validaciones del form
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm()


    const despuesValidacion = (categoria) =>{
        console.log(categoria)
        buscarNoticias(categoria)
    }

    const buscarNoticias = async (categoria) =>{
        try{
            console.log('categoria: '+categoria)
            const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=55bea24272f54108aa49ca5ce2bb3b60`)
            console.log(response)
            if (response.status===200){
                const datos = await response.json()
                console.log(datos.articles)
                setArrayNoticias(datos.articles)
                console.log(arrayNoticias)
                reset()
                // console.log(datos.articles[1].author)
            } else if (response.status===400){
          alert('No se pudo obtener datos del personaje')
      }
        }catch (error){ 
            console.error(error)
        }
    }


    return (
        <section>

            <Form className='container border py-3 my-3 shadow' onSubmit={handleSubmit(despuesValidacion)}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlSelect">
                    <Form.Label className='fw-bold'>Categoría:</Form.Label>
                    <Form.Select aria-label="Default select example"  {...register('categoriaNoticia', {
                        required: 'La categoría de la Noticia es un dato obligatorio.',
                    })}>
                        <option value=''>Seleccione Categoría</option>
                        <option value="business">business</option>
                        <option value="enterteinment">enterteinment</option>
                        <option value="general">general</option>
                        <option value="health">health</option>
                        <option value="science">science</option>
                        <option value="sports">sports</option>
                        <option value="technology">technology</option>
                    </Form.Select>
                    <Form.Text className="text-danger">
                        {errors.categoriaNoticia?.message}
                    </Form.Text>
                </Form.Group>
                <Button variant='primary' type='submit' >Buscar</Button>
            </Form>
            <ListaNoticias></ListaNoticias>
        </section>
    );
};

export default Formulario;