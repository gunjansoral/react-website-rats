import { useState } from "react";
import "./style.css";
import { BiPlay, BiPause } from 'react-icons/bi';
import { MdSkipPrevious, MdSkipNext } from 'react-icons/md';

const MusicPlayer = () => {
  const [isPlay, setIsPlay] = useState(false)
  const handlePlay = () => {
    setIsPlay(prev => !prev);
  }
  return (
    <div className='mp-container'>
      <div className="mp-left"></div>
      <div className="mp-center">
        <div className="mp-prev-button">
          <MdSkipPrevious />
        </div>
        <div onClick={handlePlay} className={`mp-play-button ${isPlay && "mp-active"}`}>
          {isPlay ? <BiPause /> : <BiPlay />}
        </div>
        <div className="mp-next-button">
          <MdSkipNext />
        </div>
      </div>
      <div className="mp-right"></div>
    </div>
  )
}

export default MusicPlayer