import Image from './Image'
import './Feed.css'
function Feed(props){

  const renderImages = () => {
    if (!props?.feed) return;
    return props.feed.items.map((image, index) => {
      return <Image key={index} src={image}/>
    });
  };

  return <div className="feed">{renderImages()}</div>
}

export default Feed;