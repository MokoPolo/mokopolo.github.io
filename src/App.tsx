import "./App.css";
import Qrcode from "./components/qr-code";

function App() {
  return (
    <div className="App h-screen">
      <div className="flex justify-center items-center h-full">
        {<Qrcode />}
      </div>
    </div>
  );
}
export default App;
