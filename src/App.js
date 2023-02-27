import "./scss/app.scss";
import QrSection from "./Components/QrSection";

function App() {
  return (
    <div className="qr">
      <div className="qr__content">
        <h1 className="qr__title">Generowanie kodu QR</h1>
        <QrSection />
      </div>
    </div>
  );
}

export default App;
