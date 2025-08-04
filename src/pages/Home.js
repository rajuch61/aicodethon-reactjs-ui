import { useEffect, useState } from 'react';
import VideoCard from '../components/VideoCard';

function Home() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('/data/videos.json')
      .then((res) => res.json())
      .then((data) => setVideos(data))
      .catch((err) => console.error("Failed to load videos:", err));
  }, []);

  return (
    <div className="main-content">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}

export default Home;
