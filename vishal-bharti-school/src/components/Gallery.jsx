// src/components/Gallery.jsx
import React from 'react';

const Gallery = () => {
  return (
    <section id="gallery" className="gallery">
      <h2>School Gallery</h2>
      <div className="gallery-images">
        <img src="https://media.istockphoto.com/id/1338737959/photo/little-kids-schoolchildren-pupils-students-running-hurrying-to-the-school-building-for.jpg?s=1024x1024&w=is&k=20&c=h6FSgmubB2NYOzf83gBBH9t-f6sIrMuHXTDqvIEsFK8=" alt="Event 1" />
        <img src="https://media.istockphoto.com/id/171306436/photo/red-brick-high-school-building-exterior.jpg?s=612x612&w=0&k=20&c=vksDyCVrfCpvb9uk4-wcBYu6jbTZ3nCOkGHPSgNy-L0=" alt="Event 2" />
        <img src="https://media.istockphoto.com/id/1162166565/photo/the-modern-teaching-building-is-in-shenzhen-university-china.jpg?s=612x612&w=0&k=20&c=-mXQPzJlPxJCxyuQETUpPbCAsFBmOepMovPvSPEAdkE=" alt="Event 3" />
      </div>
    </section>
  );
};

export default Gallery;
