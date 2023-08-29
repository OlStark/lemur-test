import "./style.scss";

function Checkbox({ check, setCheck, visible, setVisible }) {
  return (
    <div className="checkbox__group">
      <label>
        <input type="checkbox" name="agree" className="checkbox" />
        <span
          className="custom-checkbox"
          onClick={() => setCheck(!check)}></span>
        <span className="agreement">
          я согласен с{" "}
          <span onClick={(e) => setVisible(!visible)} className="rule">
            правилами обработки{" "}
          </span>{" "}
          моих персональных данных
        </span>
      </label>
    </div>
  );
}

export default Checkbox;
