import Registerform from "@/components/auth/registerform/RegisterForm"

export default function Page(){
    return(
        <div className="flex items-center justify-center">
            <div className="w-[45%] bg-white px-5 py-8 my-8 rounded-xl ">
             <Registerform />
            </div>
        </div>
    )
}