import './App.css';
import Jumbotron from './components/jumbotron';
import jumboData from "../src/fixtures/jumbo.json"
import Footer from './components/footer';
import Accordian from './components/accordian';

function App() {
  return (
    <div className='bg-black'>
      {jumboData.map(item => (
        <Jumbotron item={item} key={item.id} />
      ))}
      <Accordian />
      <Footer />
    </div>
  );
}

export default App;
