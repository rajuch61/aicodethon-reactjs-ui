import './PlaylistVideoCard.css';

function PlaylistVideoCard({ video }) {
  return (
    <div className="playlist-video-card">
      <img src={video.thumbnail} alt={video.title} />
      <h4>{video.title}</h4>
    </div>
  );
}

export default PlaylistVideoCard;
