import { item } from "./Item.js";
import "./App.css";
import { ShopItemFunc } from "./ShopItemFunc.js";

function App() {
  return (
    <div className="container">
      <div className="background-element"></div>
      <div className="highlight-window">
        <div className="highlight-overlay"></div>
      </div>
      <div className="window">
        <ShopItemFunc item={item} />
      </div>
    </div>
  );
}

export default App;
