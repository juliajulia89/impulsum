
import './App.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header"
import Footer from "./components/Footer";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import SectionFour from "./components/SectionFour";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <Footer />
    </div>
  );
}
export default App;
