import { useState } from 'react';

function UploadVideo() {
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Simulated video upload: " + file?.name);
  };

  return (
    <div className="container">
      <h2>Upload Video</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={e => setFile(e.target.files[0])} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}
export default UploadVideo;
