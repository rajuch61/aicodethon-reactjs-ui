import React, { useState } from "react";
import config from "../config/apiConfig";

const styles = {
  container: {
    maxWidth: "500px",
    margin: "40px auto",
    padding: "24px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "#fff",
  },
  heading: {
    textAlign: "center",
    marginBottom: "28px",
    color: "#222",
    fontWeight: "700",
    fontSize: "1.8rem",
  },
  formGroup: {
    marginBottom: "18px",
  },
  label: {
    display: "block",
    marginBottom: "8px",
    fontWeight: "600",
    color: "#444",
    fontSize: "0.95rem",
  },
  input: {
    width: "100%",
    padding: "12px",
    fontSize: "1rem",
    borderRadius: "6px",
    border: "1px solid #ccc",
    transition: "border-color 0.3s ease",
  },
  textarea: {
    width: "100%",
    padding: "12px",
    fontSize: "1rem",
    borderRadius: "6px",
    border: "1px solid #ccc",
    minHeight: "30px",
    resize: "vertical",
    transition: "border-color 0.3s ease",
  },
  inputFocus: {
    borderColor: "#007bff",
    outline: "none",
  },
  button: {
    width: "100%",
    padding: "14px",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "8px",
    color: "#fff",
    fontWeight: "700",
    fontSize: "1.1rem",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  buttonDisabled: {
    backgroundColor: "#6c9ee8",
    cursor: "not-allowed",
  },
  messageSuccess: {
    marginTop: "20px",
    color: "#28a745",
    fontWeight: "600",
    textAlign: "center",
  },
  messageError: {
    marginTop: "20px",
    color: "#dc3545",
    fontWeight: "600",
    textAlign: "center",
  },
};

const UploadVideo = () => {
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [playlistName, setPlaylistName] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(false);

  // Input focus styling helper
  const [focusStates, setFocusStates] = useState({
    file: false,
    name: false,
    description: false,
    playlistName: false,
  });

  const handleFocus = (field) => {
    setFocusStates((prev) => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field) => {
    setFocusStates((prev) => ({ ...prev, [field]: false }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setError(true);
      setMessage("Please select a video file.");
      return;
    }

    const user = {
      username: "admin",
      id: "admin"
    }

    if (!user || !user.username || !user.id) {
      setError(true);
      setMessage("User not logged in properly.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", name);
    formData.append("description", description);
    formData.append("playlistName", playlistName);
    formData.append("username", user.username);
    formData.append("userId", user.id);

    setLoading(true);
    setMessage(null);
    setError(false);

    try {
      const response = await fetch(`${config.API_BASE_URL}/upload`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      await response.json();
      setMessage("🎉 Video uploaded successfully!");
      setError(false);

      // Reset form fields
      setFile(null);
      setName("");
      setDescription("");
      setPlaylistName("");
    } catch (error) {
      console.error(error);
      setMessage("❌ Failed to upload video.");
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} encType="multipart/form-data" noValidate>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="file">
            Video File:
          </label>
          <input
            id="file"
            type="file"
            accept="video/*"
            onChange={(e) => setFile(e.target.files[0])}
            onFocus={() => handleFocus("file")}
            onBlur={() => handleBlur("file")}
            style={{
              ...styles.input,
              ...(focusStates.file ? styles.inputFocus : {}),
            }}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="name">
            Video Name:
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onFocus={() => handleFocus("name")}
            onBlur={() => handleBlur("name")}
            style={{
              ...styles.input,
              ...(focusStates.name ? styles.inputFocus : {}),
            }}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="description">
            Description:
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            onFocus={() => handleFocus("description")}
            onBlur={() => handleBlur("description")}
            style={{
              ...styles.textarea,
              ...(focusStates.description ? styles.inputFocus : {}),
            }}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="playlistName">
            Playlist Name:
          </label>
          <input
            id="playlistName"
            type="text"
            value={playlistName}
            onChange={(e) => setPlaylistName(e.target.value)}
            onFocus={() => handleFocus("playlistName")}
            onBlur={() => handleBlur("playlistName")}
            style={{
              ...styles.input,
              ...(focusStates.playlistName ? styles.inputFocus : {}),
            }}
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{
            ...styles.button,
            ...(loading ? styles.buttonDisabled : {}),
          }}
        >
          {loading ? "Uploading..." : "Upload"}
        </button>
      </form>

      {message && (
        <p style={error ? styles.messageError : styles.messageSuccess}>
          {message}
        </p>
      )}
    </div>
  );
};

export default UploadVideo;
