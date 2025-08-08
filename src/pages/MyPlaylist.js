import { useEffect, useState, useRef } from 'react';
import Sidebar from '../components/Sidebar';
import PlaylistVideoCard from '../components/PlaylistVideoCard';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './MyPlaylist.css';

function MyPlaylist() {
  const [playlists, setPlaylists] = useState([]);
  const rowRefs = useRef([]);
  const [scrollStates, setScrollStates] = useState([]);

  useEffect(() => {
    fetch('/data/myplaylists.json')
      .then((res) => res.json())
      .then((data) => {
        setPlaylists(data);

        // Allow DOM to render before measuring
        setTimeout(() => {
          checkScrollAbility();

          // Listen for scroll events to update scroll state
          rowRefs.current.forEach((row) => {
            if (row) {
              row.addEventListener('scroll', checkScrollAbility);
            }
          });
        }, 100);
      })
      .catch((err) => console.error("Failed to load playlists", err));
  }, []);

  const checkScrollAbility = () => {
    const states = rowRefs.current.map((row) => {
      if (!row) return { canScrollLeft: false, canScrollRight: false };
      return {
        canScrollLeft: row.scrollLeft > 0,
        canScrollRight: row.scrollLeft + row.clientWidth < row.scrollWidth
      };
    });
    setScrollStates(states);
  };

  const scrollRow = (index, direction) => {
    const row = rowRefs.current[index];
    if (row) {
      const scrollAmount = 260;
      row.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });

      setTimeout(checkScrollAbility, 300);
    }
  };

  return (
    <div className="playlist-page-container">
      <div className="playlist-content">
        {playlists.map((playlist, index) => (
          <div key={index} className="playlist-row">
            <h3>{playlist.playlistName}</h3>
            <div className="playlist-scroll-wrapper">
              {scrollStates[index]?.canScrollLeft && (
                <button className="scroll-btn left" onClick={() => scrollRow(index, 'left')}>
                  <FaChevronLeft />
                </button>
              )}
              <div
                className="video-scroll-row"
                ref={(el) => (rowRefs.current[index] = el)}
              >
                {playlist.videos.map((video) => (
                  <PlaylistVideoCard key={video.id} video={video} />
                ))}
              </div>
              {scrollStates[index]?.canScrollRight && (
                <button className="scroll-btn right" onClick={() => scrollRow(index, 'right')}>
                  <FaChevronRight />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyPlaylist;
