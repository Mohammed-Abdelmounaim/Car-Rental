import { MessageToDisplay } from "./components/Message";

export default function AuthentificationLayout({ children }){
    return(
        <main>
            <div className="w-[360px] sm:w-[600px] min-h-[400px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] m-auto my-[50px] sm:mt-[100px] sm:flex rounded-[15px]">

                <div className="w-[360px] sm:w-[200px] bg-gradient-to-r from-[#ffffff] from-25% to-[#004aad] to-100% sm:bg-gradient-to-b rounded-t-xl sm:rounded-l-xl rounded-br-[40px] sm:rounded-br-[60px] flex sm:flex-col p-2 items-center">
                    <img src="/Logo/Logo.png" alt="Car Rental Logo" className="sm:mt-[20px] w-[100px] sm:w-[184px]"/>
                    <MessageToDisplay />
                    <img src="/Pictures/Car_Vector.png" alt="Car Vector" className="w-[70px] sm:w-[184px]"/>
                </div>

                {children}

            </div>
        </main>
    );
}