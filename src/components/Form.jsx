import React, { useState } from "react";

function Form() {
  const [enteredMail, setMail] = useState("");
  const [enteredMessage, setMessage] = useState("");
  const [isValid, setValid] = useState(true);
  const [enteredWarning, setWarning] = useState("");

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const validRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if (validRegex.test(enteredMail)) {
      const mailtoLink = `mailto:csaba.muller@hotmail.com?subject=Contact Inquiry`;

      window.open(mailtoLink);

      return;
    } else {
      setValid(false);
      setWarning(
        <div className="relative">
          <label className="text-red text-right text-xs pt-2">
            Sorry, invalid format here
          </label>
          <span className="absolute bottom-4 md:bottom-10 right-0 material-symbols-outlined text-red">
            error
          </span>
        </div>
      );
    }
  };

  const emailHandler = (event) => {
    const mail = event.target.value;
    setMail(mail);
  };

  const messageHandler = (event) => {
    const message = event.target.value;
    setMessage(message);
  };

  const clearInput = (event) => {
    event.target.value = "";
    setMail("");
    setValid(true);
    setWarning("");
  };

  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <input onFocus={clearInput} type="text" placeholder="NAME" id="name" />

        <input
          className={isValid ? "inputField" : "inputField error"}
          onChange={emailHandler}
          onFocus={clearInput}
          type="text"
          placeholder="EMAIL"
        />
        {enteredWarning}

        <input
          onChange={messageHandler}
          onFocus={clearInput}
          id="message"
          type="text"
          placeholder="MESSAGE"
        />

        <div className="text-right pt-10 pb-16 md:pb-28 lg:pb-20">
          <button type="submit">
            <p className=" text-light_yellow tracking-[2.29px] decoration_underline">
              SEND MESSAGE
            </p>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
