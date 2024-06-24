import React from 'react';
import '../styles/about.css'
import Subtitle from '../shared/Subtitle'

const About = () => {
  return (
    <div className="about-page">
      {/* <h1>About Swarnim Bharat</h1> */}
      <Subtitle subtitle={'About Swarnim Bharat'} />
      
      <section className="heritage">
        <h2>Our Rich Heritage</h2>
        <p>
          India, known as Bharat, is a land of ancient civilization with a history spanning thousands of years. Our heritage is a tapestry woven with diverse traditions, philosophies, and cultural practices that have evolved over millennia.
        </p>
        <p>
          From the Indus Valley Civilization to the Golden Age of the Guptas, from the architectural marvels of the Mauryas to the literary accomplishments of the Sangam period, India's heritage is a testament to human ingenuity and spiritual depth.
        </p>
      </section>
      
      <section className="culture">
        <h2>Vibrant Culture</h2>
        <p>
          Indian culture is a kaleidoscope of languages, religions, dance, music, architecture, food, and customs. Our cultural diversity is reflected in our 22 official languages and hundreds of dialects, each with its own rich literary tradition.
        </p>
        <p>
          From the classical dances of Bharatanatyam and Kathak to the soul-stirring ragas of Hindustani and Carnatic music, from the colorful festivals of Diwali and Holi to the spiritual practices of yoga and meditation, Indian culture continues to captivate and inspire the world.
        </p>
      </section>
      
      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          Swarnim Bharat is dedicated to preserving, celebrating, and promoting India's rich heritage and vibrant culture. We aim to:
        </p>
        <ul>
          <li>Educate the younger generation about our cultural roots</li>
          <li>Promote cultural exchange and understanding</li>
          <li>Support artisans and practitioners of traditional arts</li>
          <li>Advocate for the preservation of historical sites and artifacts</li>
          <li>Showcase India's cultural diversity on the global stage</li>
        </ul>
      </section>
    </div>
  );
};

export default About;