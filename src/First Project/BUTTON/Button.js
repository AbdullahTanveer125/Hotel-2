import "./Button.css";

function Button(props) {
  return (
    <div className="">

        <button className="button">{props.button_name}</button>

    </div>
  );
}

export default Button;
