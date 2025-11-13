
import Row from 'react-bootstrap/Row';
import Noticia from './Noticia';

const ListaNoticias = ({ arrayNoticias }) => {
    return (

        <Row xs={1} md={2} lg={3} className="g-4">
            {
                arrayNoticias.map((item, indice) => (
                    <Noticia key={indice} item={item} />
                ))
            }
        </Row>
    );
};

export default ListaNoticias;