



export default()=>{
    return(
        <div className=" px-20 flex-col flex gap-5">
           <FaqItem/>
           <FaqItem/>
           <FaqItem/>
           <FaqItem/>
           <FaqItem/>
           <FaqItem/>
        </div>
    )
}

const FaqItem=()=>{
    return(
        <details className=" bg-white p-2 rounded-xl">
            <summary className=" text-black">O pagamento é seguro?</summary>
            <p className=" text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
        </details>
    )
}