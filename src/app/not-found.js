import Link from "next/link";

export default function Notfound(){
    return (
        <section className="w-[90%] max-w-[800px] my-[30px] m-auto rounded-[15px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] py-3">
            <div className="border-3 border-[#004aad] w-[95%] md:w-[97%] h-[500px] m-auto rounded-[15px] p-2 flex flex-col items-center justify-around">

                <img src="/Logo/Logo.png" alt="Car Rental Logo" className="w-[280px]"/>

                <div className="h-[300px] flex flex-col items-center justify-evenly">
                    <img src="Pictures/Error_404.png" alt="Error 404, the page that you are looking for was not found" className="w-[275px] md:w-[300px]"/>
                    <p className="text-[18px] font-semibold text-center">Sorry, the page you’re looking for doesn’t exist .</p>
                </div>

                <Link href="/" className="w-[200px] py-2 border rounded-[10px] border-[#004aad] text-center text-[#004aad] font-semibold shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] transition-all ease-in-out duration-[500ms] outline outline-transparent hover:outline-[#004aad]">Back to home &#10142;</Link>

            </div>
        </section>
    )
}