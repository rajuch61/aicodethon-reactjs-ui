import { Link } from 'react-router-dom';

function VideoCard({ video }) {
  return (
    <div className="video-card">
      <img src={video.thumbnailUrl} alt={video.name} width="300" />
      <h4>{video.name}</h4>
      <p>{video.description}</p>
      <small>Uploaded by: {video.username}</small><br />
      <Link to={video.fileUrl}>Watch</Link>
    </div>
  );
}

export default VideoCard;
