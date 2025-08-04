import { Link } from 'react-router-dom';

function VideoCard({ video }) {
  return (
    <div className="video-card">
      <img src={video.thumbnailUrl} alt={video.title} width="300" />
      <h4>{video.title}</h4>
      <p>{video.description}</p>
      <small>Uploaded by: {video.uploadedBy}</small><br />
      <Link to={`/video/${video.id}`}>Watch</Link>
    </div>
  );
}

export default VideoCard;
