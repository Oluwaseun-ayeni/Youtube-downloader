import React, { useState } from 'react';
import loading from '../assets/loading.gif'

function YouTubeDownloader() {
  const [url, setUrl] = useState('');
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [videoQuality, setVideoQuality] = useState("1080p");

  const handleQualityChange = event => {
    setVideoQuality(event.target.value);
  }




  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:8000/api/download/', {
        method: 'POST',
        body: JSON.stringify({ url, videoQuality }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) {
        throw new Error('An error occurred while downloading the video');
      }
      
      const json = await response.json();
      const blob = await response.blob();

      // Create a file input element with the webkitdirectory attribute
      const fileInput = document.createElement('input');
      fileInput.type = 'file';
      fileInput.webkitdirectory = true;
      fileInput.style.display = 'none';

      // Append the file input element
      document.body.appendChild(fileInput);

      // Show the file input dialog
      fileInput.click();

      // Wait for the user to select a directory
      fileInput.onchange = () => {
        if (fileInput.files && fileInput.files[0]) {
          // Get the selected directory
          const directory = fileInput.files[0];

          // Create a FileSaver instance
          const fileSaver = new FileSaver();

          // Save the video to the selected directory
          fileSaver.saveAs(blob, `${directory.name}/${stream.default_filename}`);
          setStatus(json.message);
        }
      };
    } catch (error) {
      console.error(error);
      setStatus('Error: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };
  
  

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label>
        Paste your video URL in here:
        <input type="text" value={url} onChange={(event) => setUrl(event.target.value)} />
      </label>
      <label>
          Quality:
          <select value={videoQuality} onChange={handleQualityChange}>
            <option value="240p">240p</option>
            <option value="360p">360p</option>
            <option value="480p">480p</option>
            <option value="720p">720p</option>
            <option value="1080p">1080p</option>
          </select>
        </label>
        <input onClick={(e) => handleSubmit(e)} type="submit" value="Download" />
      {isLoading ? (
          <div>
            <p>Downloading...</p>
            <img src={loading} alt="Loading" />
          </div>
        ) : null}
      {status && <p>{status}</p>}
    </form>
  );
}

export default YouTubeDownloader;
















