import { useParams } from 'react-router-dom';
import CommentSection from '../components/CommentSection';
import VideoPlayer from '../components/VideoPlayer';

function VideoDetail() {
  const { id } = useParams();

  return (
    <div className="container">
      <h2>Video ID: {id}</h2>
      <VideoPlayer />
      <CommentSection videoId={id} />
    </div>
  );
}
export default VideoDetail;
