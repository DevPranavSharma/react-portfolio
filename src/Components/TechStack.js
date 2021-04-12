import ExpressImg from '../Images/expressjs.svg';
import FirebaseImg from '../Images/firebase.svg';
import GitImg from '../Images/git.svg'
import GithubImg from '../Images/github.svg';
import JavaScriptImg from '../Images/javascript.svg'
import MongoImg from '../Images/mongo.svg';
import NodeImg from '../Images/node.svg';
import PostmanImg from '../Images/postman.svg';
import ReactImg from '../Images/react.svg';
import ReduxImg from '../Images/redux.svg';
import TailwindImg from '../Images/tailwindcss.svg';
import VsCodeImg from '../Images/vscode.svg';
import TechCard from './TechCard'
const TechStack=()=>{
    const imgArray=[JavaScriptImg,ReactImg,NodeImg, ExpressImg,ReduxImg,MongoImg,FirebaseImg,GitImg,GithubImg,PostmanImg,TailwindImg,VsCodeImg];
    return(
        <div className="bg-gray-200 p-2 " id="tech-stack">
            <h2 className="text-3xl  font-bold m-6 border-b-8 border-red-500 p-4 w-auto">Technologies I Use </h2>

            <div className="flex flex-row m-4 flex-wrap items-center justify-evenly">
                {imgArray.map((item,index)=>
                  <TechCard source={item} number={index} key={index}/>
                )}

            </div>

        </div>
    )
}

export default TechStack;