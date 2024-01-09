import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Menu from "./Components/Menu";
import { pizzaData } from "./utils/dummyData";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu pizzaData={pizzaData} />
      <Footer />
    </div>
  );
}

export default App;
