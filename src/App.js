
import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";


function App() {
  return (
    <div className="App">
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Footer />
    </div>
  );
}
export default App;
