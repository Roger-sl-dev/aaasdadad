


export default()=>{
    return(
       <form className=" grid gap-5">
        <input placeholder="Nome"  className=" w-full rounded-lg p-2 bg-white text-black" type="text" />
        <input placeholder="Nome" value={''} className=" w-full rounded-lg p-2 bg-white text-black" type="text" />
        <input placeholder="Nome" value={''} className=" w-full rounded-lg p-2 bg-white text-black" type="text" />
        <input placeholder="Nome" value={''} className=" w-full rounded-lg p-2 bg-white text-black" type="text" />
        <input placeholder="Nome" value={''} className=" w-full rounded-lg p-2 bg-white text-black" type="text" />
         <button className=" bg-white text-3xl font-semibold rounded-xl">Enviar</button>
       </form>
    )
}