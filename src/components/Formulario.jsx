import { Form, Button } from 'react-bootstrap';
import ListaNoticias from './ListaNoticias'
import { useForm } from "react-hook-form"
import { useState } from 'react';


const Formulario = () => {
    const [arrayNoticias, setArrayNoticias] = useState([])

    // para validaciones del form
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm()

    // =========
    const paises = [
        { code: "ae", name: "Emiratos Árabes Unidos" },
        { code: "ar", name: "Argentina" },
        { code: "at", name: "Austria" },
        { code: "au", name: "Australia" },
        { code: "be", name: "Bélgica" },
        { code: "bg", name: "Bulgaria" },
        { code: "br", name: "Brasil" },
        { code: "ca", name: "Canadá" },
        { code: "ch", name: "Suiza" },
        { code: "cn", name: "China" },
        { code: "co", name: "Colombia" },
        { code: "cu", name: "Cuba" },
        { code: "cz", name: "República Checa" },
        { code: "de", name: "Alemania" },
        { code: "eg", name: "Egipto" },
        { code: "fr", name: "Francia" },
        { code: "gb", name: "Reino Unido" },
        { code: "gr", name: "Grecia" },
        { code: "hk", name: "Hong Kong" },
        { code: "hu", name: "Hungría" },
        { code: "id", name: "Indonesia" },
        { code: "ie", name: "Irlanda" },
        { code: "il", name: "Israel" },
        { code: "in", name: "India" },
        { code: "it", name: "Italia" },
        { code: "jp", name: "Japón" },
        { code: "kr", name: "Corea del Sur" },
        { code: "lt", name: "Lituania" },
        { code: "lv", name: "Letonia" },
        { code: "ma", name: "Marruecos" },
        { code: "mx", name: "México" },
        { code: "my", name: "Malasia" },
        { code: "ng", name: "Nigeria" },
        { code: "nl", name: "Países Bajos" },
        { code: "no", name: "Noruega" },
        { code: "nz", name: "Nueva Zelanda" },
        { code: "ph", name: "Filipinas" },
        { code: "pl", name: "Polonia" },
        { code: "pt", name: "Portugal" },
        { code: "ro", name: "Rumania" },
        { code: "rs", name: "Serbia" },
        { code: "ru", name: "Rusia" },
        { code: "sa", name: "Arabia Saudita" },
        { code: "se", name: "Suecia" },
        { code: "sg", name: "Singapur" },
        { code: "si", name: "Eslovenia" },
        { code: "sk", name: "Eslovaquia" },
        { code: "th", name: "Tailandia" },
        { code: "tr", name: "Turquía" },
        { code: "tw", name: "Taiwán" },
        { code: "ua", name: "Ucrania" },
        { code: "us", name: "Estados Unidos" },
        { code: "ve", name: "Venezuela" },
        { code: "za", name: "Sudáfrica" }
    ];

    // ==========


    // despues de las validaciones
    const onSubmit = async (datos) => {
        console.log('categoria:' + datos.categoriaNoticia)
        console.log('pais:' + datos.paisNoticia)

        try {
            // const response = await fetch(`https://newsapi.org/v2/top-headlines?category=${datos.categoriaNoticia}&country=${datos.paisNoticia}&apiKey=55bea24272f54108aa49ca5ce2bb3b60`);
            const response = await fetch(`https://newsapi.org/v2/top-headlines?category=${datos.categoriaNoticia}&country=us&apiKey=55bea24272f54108aa49ca5ce2bb3b60`);
            // contiene los datos de las noticias
            const respuesta = await response.json()
            console.log(respuesta.articles)

            setArrayNoticias(respuesta.articles);
            reset();
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <section>
            <Form className='container border py-3 my-3 shadow' onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlSelectCategoria">
                    <Form.Label className='fw-bold'>Categoría:</Form.Label>
                    <Form.Select className='mb-3' aria-label="Default select example"  {...register('categoriaNoticia', {
                        required: 'La categoría de la Noticia es un dato obligatorio.',
                    })}>
                        <option value=''>Seleccione Categoría</option>
                        <option value="business">Negocios</option>
                        <option value="entertainment">Entretenimiento</option>
                        <option value="general">Interés General</option>
                        <option value="health">Salud</option>
                        <option value="science">Ciencias</option>
                        <option value="sports">Deportes</option>
                        <option value="technology">Tecnología</option>
                    </Form.Select>
                    <Form.Text className="text-danger">
                        {errors.categoriaNoticia?.message}
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlSelectPais">
                    <Form.Label className='fw-bold'>País:</Form.Label>
                    <Form.Select aria-label="Selecciona un país" {...register('paisNoticia', {
                        required: 'El países un dato obligatorio.',
                    })}>
                        <option value="">Selecciona un país</option>
                        {paises.map((pais) => (
                            <option key={pais.code} value={pais.code}>
                                {pais.name}
                            </option>
                        ))}
                    </Form.Select>
                    <Form.Text className="text-danger">
                        {errors.paisNoticia?.message}
                    </Form.Text>
                </Form.Group>

                <Button variant='primary' type='submit' >Buscar</Button>
            </Form>
            <ListaNoticias arrayNoticias={arrayNoticias}></ListaNoticias>
        </section>
    );
};

export default Formulario;