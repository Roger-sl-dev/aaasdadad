import HomeLayout from "../components/layout/HomeLayout"
import Card from "../components/ui/Card"
import Clientes from "../components/ui/Clientes"
import Faq from "../components/ui/Faq"
import Fipes from "../components/ui/Fipes"
import Forms from "../components/ui/Forms"
import Heroimg from '../assets/foto.webp';


export default()=>{
    return(
        <HomeLayout>

        
        
            
          <section className="  px-20 pt-40 pb-20 flex flex-row gap5">
            <span className=" w-3/5">

            <h2 className=" text-white  text-6xl uppercase font-semibold">
                <span className=" text-purple-400">+ Leberdade</span> <br/>para sua familha
               <br/> <span className=" text-purple-400"> + autonomia  </span><br/>para seu negócio
            </h2>
            </span>
           <span className=" w-2/5">
            <img className=" border-2  border-white rounded-3xl" src={Heroimg} alt="" />

           </span>
          </section>
          <section className=" flex flex-row px-20 my-10 gap-2">
            <div className="  w-full">
                <h3 className=" font-semibold text-5xl text-center text-white">
                Grande transformaçao após <br/> 3 meses com a Topedindo
                </h3>
                <div className=" flex flex-row mt-10 gap-5">
                  <span className=" w-1/2">
                <iframe className=" border-2 border-white w-full rounded-2xl " src="https://youtu.be/94t8mUhG1dg"></iframe>

                  </span>
                  <span className=" flex flex-col gap-5 w-1/2">
                    <p className=" backdrop-blur-3xl text-black bg-white text-xl p-2 border-2 border-white rounded-xl">+ de 7 mil pedidos realizados com a nossa tecnologia (Santo Alho) </p>
                    <p className=" backdrop-blur-3xl text-black bg-white text-xl p-2 border-2 border-white rounded-xl">+ de 7 mil pedidos realizados com a nossa tecnologia (Santo Alho) </p>
                    <p className=" backdrop-blur-3xl text-black bg-white text-xl p-2 border-2 border-white rounded-xl">+ de 7 mil pedidos realizados com a nossa tecnologia (Santo Alho) </p>

                  </span>
                </div>
            </div>
        
          </section>

          <section className=" my-20  flex flex-col gap-10">
            <h2 className=" text-4xl text-white font-semibold  text-center">Faça como Empresas de toda o <br/>Brasil que cresceram com a Topedindo!            </h2>
           <div>
            <Clientes/>

           </div>
          </section>

          <section className="  my-10 w-screen">
             <h2 className="  text-white text-4xl font-semibold capitalize text-center ">Pra quem é está Solução             </h2>


             <div className=" mt-10 w-full flex px-12 justify-between flex-row gap-5">
              <Card Texto=" Donos de Pizzarias"/>
              <Card Texto=" Donos de Pizzarias"/>
              <Card Texto=" Donos de Pizzarias"/>
              <Card Texto=" Donos de Pizzarias"/>

             </div>
          </section>

          <section>
             <h2 className=" text-4xl font-semibold text-white text-center">Como funiona o Topedindo             </h2>

             <div className=" flex flex-row gap-5 justify-around mt-10 px-20">
              <Fipes/>
              <Fipes/>
              <Fipes/>

             </div>
          </section>

          <section className="my-10"> 
            <p className=" py-10 text-4xl font-semibold text-white text-center">Perguntas Frequentes</p>
            <Faq/>
          </section>

          <section className=" flex flex-row gap-3 px-20">
            <div className=" w-1/2">

            </div>
            <div className=" w-1/2  mb-20">
              <Forms/>
            </div>
          </section>
        
        </HomeLayout>
        
    )
}