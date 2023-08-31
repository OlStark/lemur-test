import "./style.scss";

function Button({ formSend }) {
  return (
    <div className="button">
      <button type="button" onClick={(e) => formSend(e)}>
        Отправить
      </button>
    </div>
  );
}

export default Button;
