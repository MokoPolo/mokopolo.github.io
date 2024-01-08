import "./App.css";
import Qrcode from "./components/qr-code";

function App() {
  return (
    <div className="App">
      <div className="flex justify-center items-center flex-col h-screen">
        {<Qrcode />}
        <div className="attribution">
          Challenge by
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Mokopolo</a>.
        </div>
      </div>
    </div>
  );
}
export default App;
