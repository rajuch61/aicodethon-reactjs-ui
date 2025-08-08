import React, { useState } from "react";

const UploadVideo = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [playlistName, setPlaylistName] = useState("");
  const [visibility, setVisibility] = useState("public");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!videoFile) {
      alert("Please select a video file.");
      return;
    }

    // For now, just log the data
    console.log("Uploading:");
    console.log("File:", videoFile);
    console.log("Playlist:", playlistName);
    console.log("Visibility:", visibility);

    // TODO: Send the data to your backend using fetch or axios
  };

  return (
    <div className="upload-container" style={styles.container}>
      <h2>Upload Video</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>Video File</label>
        <input
          type="file"
          accept="video/*"
          onChange={(e) => setVideoFile(e.target.files[0])}
          style={styles.input}
        />

        <label style={styles.label}>Playlist Name</label>
        <input
          type="text"
          value={playlistName}
          onChange={(e) => setPlaylistName(e.target.value)}
          placeholder="Enter playlist name"
          style={styles.input}
        />

        <label style={styles.label}>Visibility</label>
        <select
          value={visibility}
          onChange={(e) => setVisibility(e.target.value)}
          style={styles.select}
        >
          <option value="public">Public</option>
          <option value="followers">Followers Only</option>
        </select>

        <button type="submit" style={styles.button}>Upload</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "500px",
    margin: "30px auto",
    padding: "20px",
    backgroundColor: "#f4f4f4",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginBottom: "5px",
    fontWeight: "bold",
  },
  input: {
    marginBottom: "15px",
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  select: {
    marginBottom: "15px",
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px",
    backgroundColor: "#2196F3",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default UploadVideo;
