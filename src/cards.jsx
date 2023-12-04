/* eslint-disable react/prop-types */
import { useState } from "react";

function Cards(props) {
  const [showFront, setshowFront] = useState(false);

  // console.log('this is', props)

  const handleClick = () => {
    console.log(handleClick);
    setshowFront(!showFront);
  };

  return (
    <div className="card">
      {/* <img src={props.front} /> */}
      <img src={showFront ? props.front : props.back} onClick={handleClick} />
      {/* if ? then : else */}
    </div>
  );
}

export default Cards;
