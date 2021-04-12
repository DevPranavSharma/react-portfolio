const SMLink=({data})=>{
    return(
        <a href={data.link}>
        <div className={`  w-10 h-10 md:w-20 md:h-20 flex  border-black bg-white  shadow-inner-xl rounded-full md:m-5 shadow-md overflow-hidden justify-center items-center`}>
            <img src={data.img}  className=" max-w-6 max-h-6 md:max-w-12 md:max-h-12 " alt="tech stack" />
        </div>
        </a>
    )
}
export default  SMLink;