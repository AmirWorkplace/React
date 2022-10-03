import WithCounter from "./HOC/WithCounter";
import Style from "./simple.module.css";

const HoverCounter = (props) => {
  const { count, IncrementCount } = props;

  return (
    <div className={Style.conteiner}>
      <div
        className={`${Style.py_20_10} ${Style.clickBtn}`}
        onMouseOver={IncrementCount}
      >
        Click to
        <span className={Style.mark}>{count}</span>
        Increase Me
      </div>
    </div>
  );
};

export default WithCounter(HoverCounter);
