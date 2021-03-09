import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/Button';

function PopUp(props) {
    return (
        <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
            <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }}overlay={
                <Tooltip id="button-tooltip">{props.content}</Tooltip>}>
                <Button variant="success">Hover For Description</Button>
            </OverlayTrigger>
        </div>
    )
}

export default PopUp;