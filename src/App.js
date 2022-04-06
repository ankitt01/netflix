import './App.css';
import Jumbotron from './components/jumbotron';
import jumboData from "../src/fixtures/jumbo.json"
import Footer from './components/footer';

function App() {
  return (
    <div className='bg-black'>
      {jumboData.map(item => (
        <Jumbotron item={item} key={item.id} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
