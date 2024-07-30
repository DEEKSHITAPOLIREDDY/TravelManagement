import React from 'react'
import './about.css';
import aboutimage from '../../Assets/about.jpg'

const About = () => {
  return (
    <div className='about'>
      <h1 className='about1'>About</h1>
      <p className='p1'>Some of the most popular tourist destinations worldwide include France,
       Spain, the United States, China, and Italy. 
       These countries attract millions of visitors each year due to their rich cultural heritage,
        historical landmarks, natural attractions, and vibrant cities.</p>
        <h2>TYPES OF TOURISM</h2>
        <p className='p1'>Business Tourism:            Also known as business travel or corporate travel, this includes trips made for business purposes such as meetings, conferences, trade shows, and client visits.</p>
        <p className='p1'>Cultural Tourism:             Cultural tourism revolves around exploring the art, heritage, history, and traditions of different destinations, including visits to museums, historical sites, festivals, and cultural events.</p>
        <p className='p1'>Adventure Tourism:           Adventure tourism appeals to travelers seeking thrilling and adrenaline-pumping experiences such as hiking, trekking, rock climbing, whitewater rafting, and safari tours.</p>
      <img src={aboutimage} />
    </div>
  )
}

export default About