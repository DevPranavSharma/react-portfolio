import MailImg from '../Images/gmail.svg';
import TwitterImg from '../Images/twitter.svg';
import LinkedinImg from '../Images/linkedin.svg';
import GithubImg from '../Images/github.svg'
import SMLink from './SMLink';
const SocialLinks=()=>{
 const SocialIcons=[{img:MailImg,link:'mailto:pranavsharmaoffice@gmail.com'},{img:TwitterImg,link:'https://twitter.com/DevPranavSharma'},{img:LinkedinImg,link:'https://www.linkedin.com/in/pranav-sharma-140708157'},{img:GithubImg,link:'https://github.com/DevPranavSharma'}]
 return(
     <div className="bg-red-500 m-0 ">
         <h2 className="text-3xl text-white  font-bold  ml-6 p-4 w-auto">My Whereabouts </h2>
         <p className="text-xl ml-6 p-4 font-semibold text-white">You can connect with me via the following mediums</p>
         <div className="flex flex-row m-4 p-10 flex-wrap items-center justify-evenly">
             {SocialIcons.map((item,index)=>
                <SMLink data={item} key={index} />
             )}
         </div>
     </div>
 )
}
export default SocialLinks;