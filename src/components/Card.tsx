import { ReactNode } from "react"

interface CardProps{
    children :ReactNode,
    title:string
}


const Card:React.FC<CardProps>=(props)=>{
    const {children,title}=props;
    return(
        <div className=' w-[730px] h-[200px] border-2 shadow-xl mt-10 relative'>
        <h3 className='uppercase font-semibold  absolute left-5 -top-3 text-[#042C71]  bg-[#FEFEFE] px-3'>{title}</h3>
        {children}
        </div>
    )
}

export default Card