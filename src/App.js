import './App.css';
import Jumbotron from './components/jumbotron';
import jumboData from "../src/fixtures/jumbo.json"

function App() {
  return (
    <div className='bg-black'>
      {jumboData.map(item => (
        <Jumbotron key={item.id} direction={item.direction}>
          <div className='text-gray-50 text-center lg:text-left p-8 max-w-[700px] m-auto'>
            <p className='text-2xl md:text-4xl lg:text-5xl font-bold '>{item.title}</p>
            <p className='text-sm md:text-lg lg:text-xl my-4'>{item.subTitle}</p>
          </div>
          <div className='relative'>
            <div className='relative'>
              <img className='w-full' src={item.image} alt={item.alt} />
              {item.animation && (
                <div className='absolute left-[19%] md:left-[8%] h-[70px] top-[67%] text-white flex gap-2 w-3/5 md:w-4/5 items-center justify-center bg-black border-2 border-gray-700 rounded-3xl px-4 py-2'>
                  <img className='h-full' src={item['animation-image']} alt="animation" />  
                  <div className="flex-1 ml-2">
                    <p className="text-xl font-bold flex-1">Stranger Things</p>
                    <p className='text-sm text-blue-500'>Downloading...</p>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </div>
              )}
            </div>
            <video className={`absolute ${item.position} z-99`} src={item.video} autoPlay muted loop playsinline/>
          </div>
        </Jumbotron>
      ))}
    </div>
  );
}

export default App;
