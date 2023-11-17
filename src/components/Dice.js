import Die from "./Die";

function Dice(props) {
  return (
    <div className="dices">
      <Die value={props.randomFunction()} />
      <Die value={props.randomFunction()} />
      <Die value={props.randomFunction()} />
      <Die value={props.randomFunction()} />
      <Die value={props.randomFunction()} />
      <Die value={props.randomFunction()} />
      <Die value={props.randomFunction()} />
      <Die value={props.randomFunction()} />
      <Die value={props.randomFunction()} />
      <Die value={props.randomFunction()} />
    </div>
  );
}

export default Dice;
