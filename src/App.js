import React, { useState } from 'react';
import './App.css';

const profiles = [
  {
    name: 'Ravi Kumar',
    experience: '7 years in wedding and event planning',
    description: 'Specialist in grand Indian weddings and luxury events.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    name: 'Priya Sharma',
    experience: '5 years in corporate event management',
    description: 'Expert in organizing business conferences, seminars, and retreats.',
    image: 'https://randomuser.me/api/portraits/women/65.jpg'
  },
  {
    name: 'Anil Verma',
    experience: '8 years in destination weddings',
    description: 'Focused on creating memorable destination weddings across India.',
    image: 'https://randomuser.me/api/portraits/men/84.jpg'
  },
  {
    name: 'Megha Singh',
    experience: '6 years in birthday and private parties',
    description: 'Known for creative, themed birthday parties and private celebrations.',
    image: 'https://randomuser.me/api/portraits/women/24.jpg'
  },
  {
    name: 'Arjun Patil',
    experience: '10 years in live concerts and festivals',
    description: 'Managed major music festivals and live shows in India.',
    image: 'https://randomuser.me/api/portraits/men/90.jpg'
  },
  {
    name: 'Sonal Mishra',
    experience: '4 years in sports event planning',
    description: 'Specialized in managing sports events and marathons.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    name: 'Rajesh Gupta',
    experience: '9 years in fashion shows and exhibitions',
    description: 'Organized large-scale fashion events and art exhibitions.',
    image: 'https://randomuser.me/api/portraits/men/50.jpg'
  }
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hiredManager, setHiredManager] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [message, setMessage] = useState('');

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % profiles.length);
    setHiredManager(null);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? profiles.length - 1 : prevIndex - 1
    );
    setHiredManager(null);
  };

  const handleHire = (profile) => {
    setHiredManager(profile);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const sendMessage = () => {
    console.log(`Message sent to ${hiredManager.name}: ${message}`);
    alert(`Message sent to ${hiredManager.name}`);
    setShowPopup(false); // Close the popup after sending
  };

  return (
    <div className="App">
      <div className="slider-container">
        <button className="prev-btn" onClick={handlePrev}>
          &#10094;
        </button>
        <div
          className="profile-slider"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {profiles.map((profile, index) => (
            <div className="profile-card" key={index}>
              <img src={profile.image} alt={profile.name} />
              <h2>{profile.name}</h2>
              <h3>{profile.experience}</h3>
              <p>{profile.description}</p>
              <button className="hire-btn" onClick={() => handleHire(profile)}>
                Hire
              </button>
            </div>
          ))}
        </div>
        <button className="next-btn" onClick={handleNext}>
          &#10095;
        </button>
      </div>

      {/* Pop-up Dialog Box */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Talk to {hiredManager?.name}</h2>
            <p>Start a conversation with {hiredManager?.name} about your event planning needs.</p>
            <textarea
              placeholder="Type your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <div className="dialog-actions">
              <button className="send-btn" onClick={sendMessage}>
                Send
              </button>
              <button className="close-btn" onClick={closePopup}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
