
import './App.css';
import Navbar from './Navbar';
import LogoImage from '../src/boy-pic.svg'; 

// import Login from './Login';

function App() {
  return (
    <div >
     <Navbar />
     <div className='flex flex-row items-center justify-around p-[3rem]'>
        <div>
          <h1 className='text-[#44C3EB]  font-semibold uppercase'>Trendiest Fashion ever</h1>
          <h1 className='w-[30rem] text-3xl tracking-widest leading-10 font-light mt-[1rem]'>When you are in doubt, wear a Viss Fashions Denim</h1>
          <button className="bg-[#E87A14] text-[#FFFFFF] px-6 py-2 rounded-xl text-md mt-[3rem] ">Buy now</button>
        </div>
        <div>
        <img src={LogoImage} alt="Logo" className="h-[40rem]" />
        </div>
     </div>
     
    </div>
  );
}

export default App;
