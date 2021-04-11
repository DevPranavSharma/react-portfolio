
const TechCard=({number,source})=>{
    
    return(
        <div className={` ${number%2===0?'animate-float':'animate-refloat'} w-16 h-16 md:w-36 md:h-36 flex  border-black bg-white rounded-full m-5 shadow-md  justify-center items-center`}>
            <img src={source}  className=" max-w-12 max-h-12 md:max-w-28 md:max-h-28 " alt="tech stack" />
        </div>
    )


}
export default TechCard