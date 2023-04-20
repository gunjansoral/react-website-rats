import { useEffect } from 'react'
import './style.css'; // Import CSS for styling

const Carousel3d = () => {
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

    // document.addEventListener('mousedown', handleMouseDown);


    // document.onmousewheel = function (e) {
    //   e = e || window.event;
    //   var d = e.wheelDelta / 20 || -e.detail;
    //   radius += d;
    //   init(1);
    // }
  }, [])


  return (
    <div className="carousel-body">
      <div id="drag-container">
        <div id="spin-container">
          <img src="https://static-cse.canva.com/blob/1037603/1600w-1Nr6gsUndKw.jpg" alt="" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT85_Nz0N78HJodWLa3E55WaTGiUMk6_S9REbQyRnC9I1Lf23ZOLz2E_vTrRFTqg4qOelQ&usqp=CAU" alt="" />
          <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/sphere-glass-the-mixtape-cd-cover-design-template-73ab5b3d9b81f442cb2288630ab63acf.jpg?ts=1602178819" alt="" />
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/924faf52097223.590463d34792e.jpg" alt="" />
          <img src="https://images.squarespace-cdn.com/content/v1/53b6eb62e4b06e0feb2d8e86/1557342351849-4N9P5EJJCL0DJMDTP0YI/SamSpratt_Logic_ConfessionsOfADangerousMind_album_artwork.jpg?format=1500w" alt="" />
          <img src="https://images.squarespace-cdn.com/content/v1/53b6eb62e4b06e0feb2d8e86/1557342351849-4N9P5EJJCL0DJMDTP0YI/SamSpratt_Logic_ConfessionsOfADangerousMind_album_artwork.jpg?format=1500w" alt="" />
          <img src="https://images.squarespace-cdn.com/content/v1/53b6eb62e4b06e0feb2d8e86/1557342351849-4N9P5EJJCL0DJMDTP0YI/SamSpratt_Logic_ConfessionsOfADangerousMind_album_artwork.jpg?format=1500w" alt="" />
          <img src="https://images.squarespace-cdn.com/content/v1/53b6eb62e4b06e0feb2d8e86/1557342351849-4N9P5EJJCL0DJMDTP0YI/SamSpratt_Logic_ConfessionsOfADangerousMind_album_artwork.jpg?format=1500w" alt="" />
          <img src="https://images.squarespace-cdn.com/content/v1/53b6eb62e4b06e0feb2d8e86/1557342351849-4N9P5EJJCL0DJMDTP0YI/SamSpratt_Logic_ConfessionsOfADangerousMind_album_artwork.jpg?format=1500w" alt="" />
        </div>
        <div id="ground"></div>
      </div>
    </div>
  )
};

export default Carousel3d;
