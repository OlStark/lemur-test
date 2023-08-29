import React, { useState, useEffect } from "react";
import InputMask from "react-input-mask";
import Button from "../button/Button";
import Checkbox from "../checkbox/checkbox";
import "./style.scss";

const Form = () => {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [nameIsDirty, setNameIsDirty] = useState(false);
  const [telIsDirty, setTelIsDirty] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [telError, setTelError] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const [checkRadio, setCheckRadio] = useState("");
  const [check, setCheck] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (nameError || telError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [nameError, telError]);

  const nameHandler = (e) => {
    setName(e.target.value);
    const re = /^[a-zA-Zа-яёА-ЯЁ\s\-]+$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setNameError(true);
    } else {
      setNameError(false);
    }
  };

  const telHandler = (e) => {
    setTel(e.target.value);
    if (e.target.value.length < 10) {
      setTelError(true);
    } else {
      setTelError(false);
    }
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "name":
        setNameIsDirty(true);
        break;
      case "tel":
        setTelIsDirty(true);
        break;
    }
  };

  return (
    <div className="wrapper">
      <div className="container">
        <form>
          <h1>Обратная связь</h1>
          <p>
            Оставьте ваши контактные данные и мы свяжемся с вами в течение
            одного рабочего дня
          </p>
          <input
            onBlur={(e) => blurHandler(e)}
            onChange={(e) => nameHandler(e)}
            value={name}
            name="name"
            type="text"
            placeholder="Имя"
            className={nameIsDirty && nameError ? "input__error" : "input"}
          />

          <InputMask
            mask={"+7 (999) - 999 - 99 - 99"}
            onBlur={(e) => blurHandler(e)}
            onChange={(e) => telHandler(e)}
            value={tel}>
            {() => (
              <input
                name="tel"
                type="tel"
                placeholder="+7 (___) ___ - __ - __"
                className={telIsDirty && telError ? "input__error" : "input"}
              />
            )}
          </InputMask>

          <div className="radio-button">
            <p>Выберите удобный способ связи:</p>
            <br />
            <div className="radio-buttons">
              <label>
                <input
                  onClick={(e) => setCheckRadio(e.target.value)}
                  className="radio"
                  type="radio"
                  name="radio"
                  value="Call"
                />
                <span className="custom-radio"></span>
                Перезвонить
              </label>
              <label>
                <input
                  onClick={(e) => setCheckRadio(e.target.value)}
                  className="radio"
                  type="radio"
                  name="radio"
                  value="Telegram"
                />
                <span className="custom-radio"></span>
                Написать в Telegram
              </label>
            </div>
          </div>
          <Button />
          <Checkbox
            setCheck={setCheck}
            check={check}
            visible={visible}
            setVisible={setVisible}
          />
        </form>
        <div className={visible ? "rules" : "invisible"}>
          <p>
            Компания ООО «Тест» с уважением относится к информации личного
            характера, касающейся посетителей Сайта «lemurteam.ru» и его
            поддоменов (далее – «Сайт»).
          </p>
          <br />
          <p>
            Настоящим компания ООО «Тест» (далее – Компания) подтверждает
            конфиденциальность обработки Ваших данных в соответствии с
            законодательством Российской Федерации в сфере защиты информации, а
            также в соответствии с ФЗ «О персональных данных» №152-ФЗ.
          </p>
          <br />
          <p>
            В качестве пользователя Сайта (далее – «Пользователь») Вы
            соглашаетесь с предоставлением Ваших данных компании ООО «Тест», для
            их обработки (совершение любых действий с использованием средств
            автоматизации или без, в том числе на сбор, запись, систематизацию,
            накопление, хранение, уточнение, извлечение, использование,
            передачу, обезличивание, блокирование, удаление, уничтожение) Ваших
            персональных данных, указанных в Заявлении, в целях
            консультирования, представления информации о продуктах,
            маркетинговых исследований, проводимых Компанией, а также в целях
            продвижения на рынке товаров и/или услуг Компании и/или третьих
            лиц.Вы соглашаетесь с тем, что Компания вправе поручить обработку
            моих персональных данных третьим лицам.
          </p>
          <br />
          <p>Согласие дается на обработку следующих персональных данных:</p>
          <br />
          <ul>
            <li>
              персональные данные, не являющиеся специальными или
              биометрическими: номера контактных телефонов; адреса электронной
              почты; место работы и занимаемая должность;
            </li>
            <br />
            <li>
              пользовательские данные (сведения о местоположении; тип и версия
              ОС; тип и версия Браузера; тип устройства и разрешение его экрана;
              источник откуда пришел на сайт пользователь; с какого сайта или по
              какой рекламе; язык ОС и Браузера; какие страницы открывает и на
              какие кнопки нажимает пользователь; ip-адрес).
            </li>
          </ul>
          <br />
          <p>
            Мы исключаем передачу Ваших данных третьим лицам, кроме компаний,
            уполномоченных на обслуживание наших клиентов.
          </p>
          <br />
          <p>
            Вы имеете право запросить и получить информацию о собранных нами
            сведениях о Вас, потребовать исправления, удаления или блокирования
            Ваших данных. Если у Вас есть возражения против обработки Ваших
            данных, в любой момент Вы можете аннулировать Ваше согласие по
            e-mail или письменно по адресу: Тест
          </p>
          <br />
          <p>
            Настоящая Политика конфиденциальности применяется только к сайту
            «test.ru». Сайт не контролирует и не несет ответственность за сайты
            третьих лиц, на которые Вы может перейти по ссылкам, доступным на
            Сайте.
          </p>
          <br />
          <p>
            Мы не проверяем достоверность персональных данных, предоставляемых
            Пользователем Сайта.
          </p>
          <br />
          <p>
            Настоящая Политика может быть изменена или прекращена нами в
            одностороннем порядке без предварительного уведомления Пользователя.
            Новая редакция Политики вступает в силу с момента ее размещения на
            Сайте, если иное не предусмотрено новой редакцией Политики.
          </p>
          <br />
          <p>
            Действующая редакция Политики находится на Сайте в сети Интернет по
            адресу <a href="#">http://test.ru/privacy-policy.html.</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Form;
