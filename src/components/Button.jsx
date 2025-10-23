

const Button = ({btnColor, increment, children, handleClick}) => {
  return (
    <button onClick={() => handleClick(increment)} className={`m-3 px-5 btn btn-${btnColor}  text-white rounded-pill`}>+ {increment} %</button>
  )
}

export default Button;
