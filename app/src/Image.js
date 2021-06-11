import './Image.css';

function Image(props) {
  return <div className="image">
    <img src={props.src.media.m} alt="" />
  </div>;
}

export default Image;
