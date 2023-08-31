import "./style.scss";

function Checkbox({
  checkError,
  check,
  setCheck,
  visible,
  setVisible,
  inputRef,
}) {
  return (
    <div className="checkbox__group">
      <label>
        <input
          type="checkbox"
          name="agree"
          className="checkbox"
          ref={inputRef}
        />
        <span
          className={
            checkError ? "input__error custom-checkbox" : "custom-checkbox"
          }
          onClick={() => setCheck(check)}></span>
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
