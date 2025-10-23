import { memo } from "react";

const Button = ({btnColor, increment, children, handleClick}) => {

  console.log(`bouton ${children}`)
  return (
    <button onClick={() => handleClick(increment)} className={`m-3 px-5 btn btn-${btnColor}  text-white rounded-pill`}>+ {increment} %</button>
  )
}

export default memo(Button);
