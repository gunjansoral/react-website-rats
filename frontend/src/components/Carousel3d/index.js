import { useContext, useEffect } from 'react'
import './style.css'; // Import CSS for styling
import { MyContext } from '../../store';

const Carousel3d = () => {
  const { artistData } = useContext(MyContext);
  useEffect(() => {
    var radius = 240;
    var autoRotate = true;
    var rotateSpeed = -60;
    var imgWidth = 150;
    var imgHeight = 150;
    //  start
    setTimeout(init, 1000);

    var odrag = document.getElementById('drag-container');
    var ospin = document.getElementById('spin-container');
    var aEle = ospin.getElementsByTagName('img');

    ospin.style.width = imgWidth + "px";
    ospin.style.height = imgHeight + "px";

    var ground = document.getElementById('ground');
    ground.style.width = radius * 3 + "px";
    ground.style.height = radius * 3 + "px";

    function init(delayTime) {
      for (var i = 0; i < aEle.length; i++) {
        aEle[i].style.transform = "rotateY(" + (i * (360 / aEle.length)) + "deg) translateZ(" + radius + "px)";
        aEle[i].style.transition = "transform 1s";
        aEle[i].style.transitionDelay = delayTime || (aEle.length - 1) / 4 + "s";
      }
    }

    function applyTransform(obj) {
      if (tY > 180) tY = 180;
      if (tY < 0) tY = 0;

      obj.style.trasform = "rotateX(" + (-tY) + "deg) rotateY(" + (tX) + "deg)";
    }

    function playSpin(yes) {
      ospin.style.animationPlayState = (yes ? 'running' : 'paused');
    }

    var sX, sY, nX, nY, desX = 0, desY = 0, tX = 0, tY = 10;

    if (autoRotate) {
      var animationName = (rotateSpeed > 0 ? 'spin' : 'spinRevert');
      ospin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear `;
    }

    function handleMouseDown(e) {
      clearInterval(odrag.timer);
      e = e || window.event;
      var sX = e.clientX,
        sY = e.clientY;

      function handleMouseMove(e) {
        e = e || window.event;
        var nX = e.clientX,
          nY = e.clientY;
        desX = nX - sX;
        desY = nY - sY;
        tX += desX * 0.1;
        tY += desY * 0.1;
        applyTransform(odrag);
        sX = nX;
        sY = nY;
      };

      function handleMouseUp(e) {
        odrag.timer = setInterval(function () {
          desX *= 0.95;
          desY *= 0.95;
          tX += desX * 0.1;
          tY += desY * 0.1;
          applyTransform(odrag);
          playSpin(false);
          if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
            clearInterval(odrag.timer);
            playSpin(true);
          }
        }, 17);
      };
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);

      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      return false;
    }
  }, [])


  return (
    <div className="carousel-body">
      <div id="drag-container">
        <div id="spin-container">
          {artistData?.map((element, index) => (
            <img key={index} src={element.album.images[0].url} alt="" />
          ))}
        </div>
        <div id="ground"></div>
      </div>
    </div>
  )
};

export default Carousel3d;
