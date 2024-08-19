import React, { useState, useEffect } from 'react';
import './PhotoAlbum.css';

const PhotoAlbum = () => {
  const [photos, setPhotos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch photos from the API
    const fetchPhotos = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos');
      const data = await response.json();
      setPhotos(data);
    };

    fetchPhotos();
  }, []);

  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  // Function to highlight search term in the title
  const highlightSearchTerm = (title, term) => {
    const regex = new RegExp(`\\b${term}\\b`, 'gi');
    return title.replace(regex, (match) => `<i>${match}</i>`);
  };

  return (
    <div>
      <h1>Photo Album</h1>
      <input
        type="text"
        placeholder="Search photo titles..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-input"
      />
      <div className="photo-list">
        {photos.map(photo => (
          <div key={photo.id} className="photo-item">
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <div>
              <a
                href={photo.url}
                target="_blank"
                rel="noopener noreferrer"
                dangerouslySetInnerHTML={{
                  __html: highlightSearchTerm(photo.title, searchTerm),
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoAlbum;
