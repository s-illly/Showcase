import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import projects from '../components/Projects';

const ProjectScreen = () => {
    const { id: projectId } = useParams();
    const project = projects.find((p) => p._id === projectId);

    return ( 
        <>
            <Link to = '/' className = 'btn btn-light my-3'>
                Return to HomeScreen 
            </Link>
            <Row>
                <Col md = {5}>
                <Image src = {project.image} alt = {project.name} fluid />
                </Col>
                <Col md = {4}>
                <ListGroup variant = 'flush'>
                    <ListGroup.Item>
                        <h3> 
                            {project.name}
                        </h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Description: {project.description}
                    </ListGroup.Item>
                </ListGroup>
                </Col>
            </Row>
        </>
    )


}

export default ProjectScreen;