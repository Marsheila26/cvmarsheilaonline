import React from 'react';
import Image from 'next/image'; // Import Image dari Next.js
import read from '../components/reading.jpg';
import music from '../components/singing.jpg';
import cook from '../components/cooking.jpg';
import sleep from '../components/sleeping.jpg';
import './hobbies.css'; // Import file CSS untuk styling



const MyGallery = () => {
  const Hobbies = [
    { name: "Membaca", image: read },
    { name: "Bernyanyi", image: music },
    { name: "Memasak", image: cook }, 
    { name: "Tidur", image: sleep },
  ];

  return (
    <section className="gallery-container">
      <h2 className="gallery-title">Hobbies</h2>
      <div className="gallery">
        {Hobbies.map((hobby, index) => (
          <div key={index} className="gallery-card">
            <Image src={hobby.image} alt={hobby.name} className="gallery-image" layout="responsive" width={150} height={100} />
            <div className="gallery-caption">{hobby.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyGallery;