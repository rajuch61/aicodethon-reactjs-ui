import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import UploadVideo from './pages/UploadVideo';
import VideoDetail from './pages/VideoDetail';
import MyPlaylist from './pages/MyPlaylist';
import TopNavbar from './components/TopNavbar';

function App() {
  return (
    <Router>
      <TopNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<UploadVideo />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/playlist" element={<MyPlaylist />} />
      </Routes>
    </Router>
  );
}

export default App;
