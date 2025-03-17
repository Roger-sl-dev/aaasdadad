
import Logo from '../../assets/logo.png'



export default()=>{
    return(
        <div className=' flex flex-row gap-2 backdrop-blur-xl border-2 border-white rounded-xl  bg-black/60 px-4 py-2 justify-between'>
            <img className=' h-14' src={Logo} alt="" />
            <div className=' flex flex-row place-items-center gap-4'>
               <Links Texto={'inicio'}/>
               <Links Texto={'contato'}/>
               <Links Texto={'Sobre nós'}/>
               <Links Texto={'Tutoria'}/>
               <Links Texto={'Facebook'}/>
             
            </div>
        </div>
    )
}


const Links =({Texto}:any)=>{
    return(
        <>
        <a className=' text-xl text-white font-semibold' href="">{Texto}</a>
        </>
    )
}