import React from "react";

export default function QrImage({ text }) {
  const url = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${text}`;
  const downloadSVGUrl = `https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data=${text}&format=svg`;
  return (
    <div className="qr__fetch">
      <img src={url} alt={text} />
      <a className="qr__download" href={downloadSVGUrl} target="_blank">
        Pobierz SVG
      </a>
    </div>
  );
}
