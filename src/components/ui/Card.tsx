
type Card={
    Texto:string
}


export default (props:Card)=>{
    return(
        <div className=" h-40 border-2 flex flex-col gap-16 border-white p-5 rounded-xl  ">
            <p className=" text-white text-xl font-semibold">{props.Texto}</p>
            <button className=" w-full rounded-xl text-lg bg-white">
                Ver Mais
            </button>
        </div>
    )
}