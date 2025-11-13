import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const Noticia = ({ item }) => {
    return (
        <Col>
            <Card className='h-100 mb-3'>
                {/* <Card.Img variant="top" src=`${item.urlToImage}` /> */}
                <Card.Body>
                    <Card.Title>${item.title}</Card.Title>
                    <Card.Text>
                        ${item.description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='text-end'>
                    <a className="btn btn-primary">Ver más</a>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Noticia;