import logo from './logo.svg';
import './App.css';
import Nav from "./components/NavBar";
import Main from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  return (
      <div className="container">
        <Nav />
        <Main />
        <Footer />
      </div>
  );
}

export default App;
