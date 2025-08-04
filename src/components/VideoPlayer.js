function VideoPlayer() {
  return (
    <video width="100%" height="360" controls>
      <source src="sample-video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
export default VideoPlayer;
