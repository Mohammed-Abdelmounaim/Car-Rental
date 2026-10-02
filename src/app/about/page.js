export default function About(){
    return(
        <section className="w-[900px] my-[50px] m-auto rounded-[15px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] py-5">
            <div className="border-3 border-[#004aad] w-[95%] m-auto rounded-[15px] p-2">
                <h1 className="text-[#004aad] font-bold text-center text-[24px] my-[15px]">About</h1>

                <div className="py-2 flex flex-col items-center justify-around h-[200px] mb-[30px]">
                    <img src="/Logo/Logo.png" alt="Car Rental Logo" className="w-[320px]"/>
                    <img src="/Pictures/Car_rental_trust.png" alt="Car Rental is your trusted partner on your road trip" className="w-[130px]"/>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-around h-[400px] mb-[15px]">

                    <div className="w-[350px] h-[350px] border-3 border-[#004aad] rounded-[15px] px-2 flex flex-col items-center justify-evenly">
                        <h2 className="text-[#004aad] font-bold text-[20px] my-[15px]">Who we are ?</h2>
                        <h3 className="text-[#004aad] italic text-[18px]">Your trusted partner on the road,</h3>
                        <img src="/Pictures/Trusted_partner.png" alt="hand shake" className="w-[60px]"/>
                        <p className="text-center italic"> 
                            We provide reliable and flexible car rental services, 
                            helping you find the right car for every journey.
                        </p>
                    </div>
                    <div className="w-[350px] h-[350px] border-3 border-[#004aad] rounded-[15px] px-2 flex flex-col items-center justify-evenly">
                        <h2 className="text-[#004aad] font-bold text-[20px] mt-[10px]">What we offer ?</h2>
                        <img src="/Pictures/Star.png" alt="blue star" className="w-[60px]"/>
                        <ul className="italic list-disc list-inside p-1">
                            <li className="mb-[5px]">A variety of cars.</li>
                            <li className="mb-[5px]">Flexible rental options.</li>
                            <li className="mb-[5px]">Clear car availability.</li>
                            <li className="mb-[5px]">Easy communication with us.</li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    )
}