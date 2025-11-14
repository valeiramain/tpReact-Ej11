import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const ListaNoticias = () => {
    return (
        <section>
            <Row xs={1} md={3} className="g-4">
                <Col>
                    <Card className='h-100 mb-3'>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className='text-end'>
                            <a className="btn btn-primary">Ver más</a>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </section>
    );
};

export default ListaNoticias;