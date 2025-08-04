import { Link } from 'react-router-dom';

const sampleVideos = [
  { id: 1, title: "Sample Video 1" },
  { id: 2, title: "Sample Video 2" },
];

function VideoList() {
  return (
    <div className="container">
      <h2>All Videos</h2>
      {sampleVideos.map((v) => (
        <div key={v.id}>
          <Link to={`/video/${v.id}`}>{v.title}</Link>
        </div>
      ))}
    </div>
  );
}
export default VideoList;
