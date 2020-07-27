import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js'
/*const Flipper = () => {
  const [ids, setIds] = React.useState(["square-1", "square-2"]);
  const rects = React.useRef(new Map()).current;
  

  const swap = ([a, b]) => [b, a];

  React.useEffect(() => {
    const squares = document.querySelectorAll(".square");
    console.log("squares",rects)  
    // Cache position and size once on initial render
    for (const square of squares) {
      rects.set(square.id, square.getBoundingClientRect());
    }
  }, []);

  React.useLayoutEffect(() => {
    const squares = document.querySelectorAll(".square");

    for (const square of squares) {
      // Get previous size and position from cache
      const cachedRect = rects.get(square.id);

      if (cachedRect) {
        const nextRect = square.getBoundingClientRect();
        
        // Invert
        const translateX = cachedRect.x - nextRect.x;
        
        // Cache the next size and position
        rects.set(square.id, nextRect);
        
        // Play
        square.animate(
          [
            { transform: `translateX(${translateX}px)` },
            { transform: `translateX(0px)` }
          ],
          1000
        );
      }
    }
  }, ids);

  return (
    <div className="container">
      {ids.map((id, i) => {
        return (
          <div id={id} onClick={() => setIds(swap(ids))} className={`square`}>
            {id}
          </div>
        );
      })}
    </div>
  );
};


import useWebAnimations from "@wellyshen/use-web-animations";



const App = () => {
  const { ref, playState, getAnimation } = useWebAnimations({
    playbackRate: 0.5, // Change playback rate, default is 1
    autoPlay: false, // Automatically starts the animation, default is true
    keyframes: { transform: ["translateX(500px)"] },
    timing: { duration: 1000, fill: "forwards" },
  });

  const play = () => {
    getAnimation().play();
  };

  const pause = () => {
    getAnimation().pause();
  };

  const reverse = () => {
    getAnimation().reverse();
  };

  const cancel = () => {
    getAnimation().cancel();
  };

  const finish = () => {
    getAnimation().finish();
  };

  const seek = (e) => {
    const animation = getAnimation();
    const time = (animation.effect.getTiming().duration / 100) * e.target.value;
    animation.currentTime = time;
  };

  const updatePlaybackRate = (e) => {
    getAnimation().updatePlaybackRate(e.target.value);
  };

  return (
    <div className="container">
      <button onClick={play}>Play</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reverse}>Reverse</button>
      <button onClick={cancel}>Cancel</button>
      <button onClick={finish}>Finish</button>
      <input type="range" onChange={seek} />
      <input type="number" defaultValue="1" onChange={updatePlaybackRate} />
      <div className="frame">
        <div className="target" ref={ref} />
        <div className="target target-base" />
      </div>
    </div>
  );
};
*/

ReactDOM.render(<App />, document.querySelector("#root"));