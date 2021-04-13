import './App.css';
import Typical from 'react-typical'
import ProfileImage from './Images/ProfileImage.jpg'
import TechStack from './Components/TechStack'
import {Link as ScrollLink } from 'react-scroll';
import SocialLinks from './Components/SocialLinks';
import About from './Components/About';

function App() {
  return (
    <div className="bg-white w-screen h-min-screen p-0">
      <div className="h-screen text-white bg-black flex flex-col-reverse md:flex-row justify-evenly items-center p-2">
       <div className="flex-grow flex flex-col align-center">
       <h1 className="text-center text-3xl">Hi! My name is Pranav </h1>
      <Typical
        steps={
          [
            'I am a web developer 🖥',
             1200,
             'I am a proud Indian 🇮🇳',
             1000,
            'I am a football aficionado ⚽️',
            1200,
            'I am a geek 👾',
            1000
          ]
        }
        loop={Infinity}
        className="text-2xl text-center font-mono"
      />
      <ScrollLink to="tech-stack" smooth={true} className="self-center m-4">
        <button className="bg-gray-200 text-black bg-gradient-to-r hover:text-white hover:from-red-500 hover:to-red-600 hover:shadow-lg focus:shadow-outline focus:outline-none p-2  rounded max-w-xs ">Know More</button>
        </ScrollLink>
      </div>
       <img src={ProfileImage} alt="profile" className="h-1/2 rounded-full" />
      </div>
      <TechStack/>
      <About/>
      <SocialLinks/>
    </div>
  );
}

export default App;
