import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card } from 'react-bootstrap';
import projects from '../components/Projects';

const ProjectScreen = () => {
    const { id: projectId } = useParams();
    const project = projects.find((p) => p._id === projectId);

    return ( 
        <>
            <Link to = '/' className = 'btn btn-light my-3'>
                Return to Homescreen 
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
                        Purpose: <br />
                        {project.description}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Abstract: <br />
                        {project.abstract}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Awards: <br />
                        {project.awards}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Duration: <br />
                        {project.time}
                    </ListGroup.Item>
                </ListGroup>
                </Col>
                <Col md = {3}>
                <Card>
                    <ListGroup variant = 'flush'>
                        <ListGroup.Item>
                            <h5>
                            Learn More:
                            </h5>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            {project.viddes} 
                        <a href={project.youtube} target="_blank" rel="noopener noreferrer">
                            <img 
                                src={project.thumbnail} 
                                alt="YouTube Video Thumbnail" 
                                style={{ 
                                width: '100%', // Adjust the width as needed
                                cursor: 'pointer',
                                borderRadius: '5px' // Optional: for rounded corners
                                }} 
                            />
                            </a>
                        </ListGroup.Item>
                        <ListGroup.Item>
                        <a 
                            href={project.moreinfo} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="custom-link"
                            >
                            {project.linkdesc}
                            </a>
                        </ListGroup.Item>
                        <ListGroup.Item>
                        <a 
                            href={project.extra} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="custom-link"
                            >
                            {project.extradesc}
                            </a>
                        </ListGroup.Item>

                    
                    
                    </ListGroup>
                </Card>
                </Col>
            </Row>
        </>
    )


}

export default ProjectScreen;