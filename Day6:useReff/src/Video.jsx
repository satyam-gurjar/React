import { useRef } from "react";


function Video(){

  const videoRef = useRef(null);

  function handleStart(){
    videoRef.current.play();
  }

  function handleStop(){
    videoRef.current.pause();
  }

  function handleRestart(){
    videoRef.current.currentTime = 0;
  }
  
  function Pluse(){
    videoRef.current.currentTime+=10;
  }

   function Minus(){
    if(videoRef.current.currentTime <10)return;
    videoRef.current.currentTime-=10;
  }

  return(
    <>
    <video ref={videoRef} src="../public/video.mp4" height="400px" width="600px" ></video>
    <div>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Pause</button>
      <button onClick={handleRestart}>Restart</button>
      <button onClick={Pluse}>10+</button>
      <button onClick={Minus}>10-</button>
    </div>
    </>
  )

}

export default Video;