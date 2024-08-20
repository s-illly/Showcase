import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Project = ({ project }) => {
    return(
        <Card className = 'my-3 p-3 rounded'>
            <Link to = {`/project/${project._id}`}>
                <Card.Img src = {project.image} variant = 'top' />
            </Link>
            <Card.Body>
                <Link to = {`/project/${project._id}`}>
                    <Card.Title as = 'div' className = 'book-title'>
                        <strong>
                            {project.name}
                        </strong>
                    </Card.Title>
                </Link>

                <Card.Text as = 'h5'>
                    {project.year}
                </Card.Text>
            </Card.Body>
        </Card>

    );
};

export default Project;