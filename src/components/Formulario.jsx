import { Form, Button } from 'react-bootstrap';
import ListaNoticias from './ListaNoticias'
import { useForm } from "react-hook-form"
import { useState, useEffect } from 'react';


const Formulario = () => {
    const [arrayNoticias, setArrayNoticias] = useState([])

    // para validaciones del form
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm()

    useEffect(() => {
        console.log("Noticias en el array:", arrayNoticias);
    }, [arrayNoticias]);


    // despues de las validaciones
    const onSubmit = async (datos) => {
        console.log('categoria:' + datos.categoriaNoticia)
        try {
            const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${datos.categoriaNoticia}&apiKey=55bea24272f54108aa49ca5ce2bb3b60`);
            console.log(response)
            // contiene los datos de las noticias
            const respuesta = await response.json()
            console.log(respuesta.articles)

            // no se ve el console.log despues del SET. tengo q usar useEffect????
            setArrayNoticias(respuesta.articles);
            console.log('array de noticias:')
            console.log(arrayNoticias)
            reset();
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <section>

            <Form className='container border py-3 my-3 shadow' onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlSelect">
                    <Form.Label className='fw-bold'>Categoría:</Form.Label>
                    <Form.Select aria-label="Default select example"  {...register('categoriaNoticia', {
                        required: 'La categoría de la Noticia es un dato obligatorio.',
                    })}>
                        <option value=''>Seleccione Categoría</option>
                        <option value="business">business</option>
                        <option value="entertainment">entertainment</option>
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
            <ListaNoticias arrayNoticias={arrayNoticias}></ListaNoticias>
        </section>
    );
};

export default Formulario;