import './App.css';
import Typical from 'react-typical'
import ProfileImage from './Images/ProfileImage.jpg'

function App() {
  return (
    <div className="bg-white w-screen h-min-screen">
      <div className="h-screen text-white bg-black flex flex-col-reverse md:flex-row justify-evenly items-center p-2">
       <div className="flex-grow">
       <h1 className="text-center text-3xl">Hi! My name is Pranav </h1>
      <Typical
        steps={
          [
            'I am a web developer 🖥',
             1200,
             'I am a proud Indian 🇮🇳',
             1000,
            'I am a football aficianado ⚽️',
            1200,
            'I am a geek 👾',
            1000
          ]
        }
        loop={Infinity}
        className="text-2xl text-center font-mono"
      />
      
      </div>
       <img src={ProfileImage} alt="profile" className="h-1/2 rounded-full" />
      </div>
    </div>
  );
}

export default App;
