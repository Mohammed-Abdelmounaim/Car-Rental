import Link from "next/link";

export function SignupForm(){
    return(
        <div className="w-[340px] sm:w-[400px] pb-[5px] m-auto">
            <h1 className="text-[#004aad] text-center font-bold text-[24px] mt-[15px] sm:mt-[30px]">Sign up</h1>

            <form className="h-[270px] my-[15px] w-[90%] m-auto flex flex-col justify-between items-center">
                <div className="flex flex-col gap-1 w-[90%]">
                    <label>User name</label>
                    <input placeholder="Enter User name" className="px-2 py-1 border border-gray-300 rounded-[10px] focus:outline-1 outline-[#004aad]"></input>
                </div>
                <div className="flex flex-col gap-1 w-[90%]">
                    <label>Email</label>
                    <input placeholder="Enter Email" className="px-2 py-1 border border-gray-300 rounded-[10px] focus:outline-1 outline-[#004aad]"></input>
                </div>
                <div className="flex flex-col gap-1 w-[90%]">
                    <label>Password</label>
                    <input placeholder="Enter password" className="px-2 py-1 border border-gray-300 rounded-[10px] focus:outline-1 outline-[#004aad]"></input>
                </div>
                <button className="bg-[#004aad] py-2 w-[140px] self-center rounded-[10px] font-medium text-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] transition-all ease-in-out duration-[500ms] cursor-pointer hover:bg-blue-600">Sign up</button>
            </form>

            <div className="flex w-[350px] items-center m-auto mb-3 justify-around">
                <p className="text-[#004aad] text-[14px]">already have an account ?</p>
                <Link href="/login" className="w-[140px] py-2 border rounded-[10px] border-[#004aad] text-center text-[#004aad] font-medium shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] transition-all ease-in-out duration-[500ms] outline outline-transparent hover:outline-[#004aad]">Log in &#10142;</Link>
            </div>
        </div>
    );
}

export default function Signup() {
    return(
        <SignupForm />
    );
}