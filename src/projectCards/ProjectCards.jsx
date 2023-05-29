
import Card from "react-bootstrap/Card";
function ProjectCards({title, description}) {


    return(
        <Card style={{width: '15rem', margin: '10px'}}>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default ProjectCards;
