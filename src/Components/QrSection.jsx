import React, { useState } from "react";
import QrImage from "./QrImage";
import { BsArrowRight } from "react-icons/bs";

export default function QrSection() {
  const [text, setText] = useState("");
  const [fetchText, setFetchText] = useState("");
  const [showQr, setShowQr] = useState(false);
  const [showError, setShowError] = useState(false);
  const showQrHandler = (e) => {
    const input = document.querySelector(".qr__input");
    input.blur();
    e.preventDefault();
    if (!text) {
      setShowError(true);
    } else {
      setShowError(false);
      setShowQr(true);
    }
  };
  return (
    <div className="qr__wrapper">
      <div className="qr__image-wrapper">
        {showQr && <QrImage text={fetchText} />}
      </div>
      <form
        className="qr__form"
        onSubmit={(e) => {
          showQrHandler(e);
          setFetchText(text);
          setText("");
        }}
      >
        <input
          type="text"
          className={`qr__input ${showError ? "qr__input--error" : ""}`}
          placeholder="Wpisz wartość"
          value={text}
          onChange={(text) => {
            setText(text.target.value);
          }}
        />
        <button type="submit" value="Submit" className="qr__arrow">
          <BsArrowRight />
        </button>
      </form>
      {showError && <p>Wpisz wartość</p>}
    </div>
  );
}
