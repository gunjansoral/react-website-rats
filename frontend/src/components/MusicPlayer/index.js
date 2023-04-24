import { useState } from "react";
import "./style.css";
import { BiPlay, BiPause } from 'react-icons/bi';
import { MdSkipPrevious, MdSkipNext } from 'react-icons/md';
import VolumeSlider from "../VolumeSlider";
import Slider from "../Slider";

const MusicPlayer = () => {
  const [isPlay, setIsPlay] = useState(false)
  const handlePlay = () => {
    setIsPlay(prev => !prev);
  }

  return (
    <div className='mp-container'>
      <audio src="https://p.scdn.co/mp3-preview/3c3367f363ca89e9cb1271a2012733124c511902?cid=221969a1e1034aa5b2e12c5e1b5c5dbe" autoPlay="true" />
      <div className="mp-left">
        <VolumeSlider />
      </div>
      <div className="mp-center">
        <div className="buttons">
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
        <div className="slider">
          <Slider />
        </div>
      </div>
      <div className="mp-right"></div>
    </div>
  )
}

export default MusicPlayer