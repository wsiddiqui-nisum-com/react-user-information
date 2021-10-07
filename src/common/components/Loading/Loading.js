import Spinner from 'react-bootstrap/Spinner';
import "./style.scss";

const Loading = props => {
return (
    <div className="Loader">
    <Spinner className="spinner-border" animation="border" role="status">
  <span className="visually-hidden">Loading...</span>
</Spinner>
</div>
);

}

export default Loading;