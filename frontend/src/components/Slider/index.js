import { useEffect, useRef, useState } from 'react';
import './style.css';

const Slider = (props) => {
  const inputRef = useRef(null);
  const [volumeLevel, setVolumeLevel] = useState(100);

  const handleVolumeChange = (event) => {
    setVolumeLevel(event.target.value);
  };
  useEffect(() => {
    inputRef.current.style.background = `linear-gradient(to right, rgb(19, 227, 255) 0%, rgb(19, 227, 255) ${volumeLevel}%, #111 ${volumeLevel}%, #111 100%)`
  }, [volumeLevel])
  return (
    <div className="s-container">
      <input
        ref={inputRef}
        type="range"
        min="0"
        max="100"
        value={volumeLevel}
        onChange={handleVolumeChange}
      />
    </div>
  );
}
export default Slider