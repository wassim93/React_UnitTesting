import { GreetingPropos } from "./Greeting.types";

function Greeting(props: GreetingPropos) {
  return (
    <div>
      Greeting {props.name ? props.name : "Guest"}
      <div>
        <button data-testid="btnAction" onClick={() => {}}>
          btn
        </button>
      </div>
    </div>
  );
}

Greeting.propTypes = {};

export default Greeting;
