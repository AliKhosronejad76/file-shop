import LoginForm from "@/components/auth/loginform/LoginForm"

export default function Page(){
    return(
        <div className="flex items-center justify-center">
            <div className="w-[45%]">
                <LoginForm/>
            </div>
        </div>
    )
}