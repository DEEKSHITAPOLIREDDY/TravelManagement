import React,{useEffect, useState} from 'react'
import './main.css';
import travel3 from '../../Assets/travel3.jpeg'
// import travel4 from '../../Assets/travel4.jpeg'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {FaRegClipboard} from 'react-icons/fa'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Europe from '../../pages/description/Europe/Europe';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom


const Data = [
  {
    id: 1,
    imgSrc: "paris.jpg",
    destination: "Paris, France",
    location: "Europe",
    grade: "5-star",
    fees: "$2000",
    description: "Explore the romantic city of Paris with its iconic landmarks such as the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral.",
  },
  {
    id: 2,
    imgSrc: "tokyo.jpg",
    destination: "Tokyo, Japan",
    location: "Asia",
    grade: "4-star",
    fees: "$1500",
    description: "Discover the vibrant culture of Tokyo, from its bustling streets and modern architecture to serene temples and traditional tea houses.",
  },
  {
    id: 3,
    imgSrc: "london.jpg",
    destination: "London, UK",
    location: "Europe",
    grade: "4-star",
    fees: "$1800",
    description: "Experience the rich history and diverse culture of London, from royal palaces and museums to trendy neighborhoods and world-class theater.",
  },
  {
    id: 4,
    imgSrc: "new-york.jpg",
    destination: "New York City, USA",
    location: "North America",
    grade: "5-star",
    fees: "$2500",
    description: "Experience the vibrant energy of New York City with its iconic skyscrapers, world-class museums, and diverse culinary scene.",
  },
  {
    id: 5,
    imgSrc: "sydney.jpg",
    destination: "Sydney, Australia",
    location: "Australia",
    grade: "4-star",
    fees: "$2200",
    description: "Discover the stunning beauty of Sydney with its picturesque harbor, golden beaches, and thriving arts and culture scene.",
  },
  {
    id: 6,
    imgSrc: "rome.jpg",
    destination: "Rome, Italy",
    location: "Europe",
    grade: "5-star",
    fees: "$2300",
    description: "Immerse yourself in the rich history and architectural wonders of Rome, from the ancient ruins of the Colosseum to the Vatican City.",
  },
  {
    id: 7,
    imgSrc: "cape-town.jpg",
    destination: "Cape Town, South Africa",
    location: "Africa",
    grade: "4-star",
    fees: "$1800",
    description: "Experience the beauty of Cape Town with its stunning beaches, majestic mountains, and vibrant multicultural atmosphere.",
  },
  {
    id: 8,
    imgSrc: "bangkok.jpg",
    destination: "Bangkok, Thailand",
    location: "Asia",
    grade: "4-star",
    fees: "$1700",
    description: "Discover the bustling streets, ornate temples, and vibrant street food scene of Bangkok, the vibrant capital of Thailand.",
  },
  {
    id: 9,
    imgSrc: "dubai.jpg",
    destination: "Dubai, UAE",
    location: "Middle East",
    grade: "5-star",
    fees: "$2800",
    description: "Experience the luxurious lifestyle of Dubai with its futuristic skyscrapers, extravagant shopping malls, and pristine desert landscapes.",
  },
  {
    id: 10,
    imgSrc: "hawaii.jpg",
    destination: "Hawaii, USA",
    location: "North America",
    grade: "4-star",
    fees: "$3000",
    description: "Relax on the stunning beaches, explore lush rainforests, and experience the aloha spirit of Hawaii's unique culture and traditions.",
  },
  
  // Add more travel details objects here as needed
];




const Main = ({ searchCriteria }) => {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    Aos.init({ duration: 2000 });
    // Filter the data based on search criteria when it changes
    const filteredData = Data.filter((destination) =>
      destination.destination.toLowerCase().includes(searchCriteria.toLowerCase())
    );
    setSearchResult(filteredData);
  }, [searchCriteria]);

   return (
    <section className='main container section'>
      <div className='secTile'>
        <h3 className='title'>Most Visited destinations</h3>
      </div>
      <div className='secContent grid'>
        {searchResult.map(({ id, imgSrc, destination, location, grade, fees, description }) => {
          return (
            <Link key={id} to={`/description/${location}?destination=${destination}&fees=${fees}&grade=${grade}`} data-aos='fade-up' className='singleDestination'>
              {/* Use Link instead of anchor tag */}
              <div className='imageDiv'>
                <img className='parris' src={travel3} alt={destination} />
              </div>
              <div className='cardInfo'>
                <h4 className='destination'>{destination}</h4>
                <span className='continent flex'>
                  <HiOutlineLocationMarker className='icon' />
                  <span className='name'>{location}</span>
                </span>
                <div className='fees flex'>
                  <div className='startdate'>
                    <span>
                      {grade}
                      <small>+1</small>
                    </span>
                  </div>
                  <div className='price'>
                    <h5>{fees}</h5>
                  </div>
                </div>
                <div className='desc'>
                  <p>{description}</p>
                </div>
                <button className='btn flex'>
                  BOOK NOW <FaRegClipboard className='icon' />
                </button>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Main;