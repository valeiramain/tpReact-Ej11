import Form from 'react-bootstrap/Form';
import ListaNoticias from './ListaNoticias'

const Formulario = () => {
    return (
        <section>

            <Form className='container border py-3 my-3 shadow'>
                <Form.Group className="mb-3" controlId="exampleForm.ControlSelect">
                    <Form.Label className='fw-bold'>Categoría:</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>Seleccione Categoría</option>
                        <option value="business">business</option>
                        <option value="enterteinment">enterteinment</option>
                        <option value="general">general</option>
                        <option value="health">health</option>
                        <option value="science">science</option>
                        <option value="sports">sports</option>
                        <option value="technology">technology</option>
                    </Form.Select>
                </Form.Group>
            </Form>
            <ListaNoticias></ListaNoticias>
        </section>
    );
};

export default Formulario;