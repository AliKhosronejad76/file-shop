"use client";
import { useForm } from "react-hook-form";


export default function Registerform(){
    const {
        register , 
        handleSubmit , 
        watch ,
        formState:{errors},
        } = useForm({});

    const   submitHandler = (e)=>{
        e.preventDefault();
        alert("okkkkkk")
    }

    return(
        <form 
          onSubmit={handleSubmit(submitHandler)}
          
          >
            <div className="w-full my-4">
                <input 
                    className="w-full shadow-2xl py-3 px-1 outline-none rounded-md mb-3 transition duration-700 focus:outline-sky-300"
                    type="text" 
                    placeholder={"نام کاربری"}
                    {
                        ...register('username',{
                            maxLength:20,
                            minLength:6,
                            required:true,
                        })
                    }
                />
                {
                    errors.username && errors.username.type == "required" &&
                    <span className="mr-3 text-sm text-rose-500 mt-9">نام کاربری اجباری می باشد</span>
                }
                {
                    errors.username && errors.username.type == "minLength" &&
                    <span className="mr-3 text-sm text-rose-500 mt-9">
                        نام کاربری کوتاه تر از حد مجاز می باشد
                    </span>
                }
                {
                    errors.username && errors.username.type == "maxLength" &&
                    <span className="mr-3 text-sm text-rose-800 mt-9">نام کاربری بیشتر از حد مجاز می باشد</span>
                }
            </div>
            <div className="w-full my-4">
                <input 
                    className="w-full shadow-2xl py-3 px-1 outline-none rounded-md mb-3 transition duration-700 focus:outline-sky-300"
                    type="text" 
                    placeholder={"ایمیل"}
                    {
                        ...register('email',{
                         
                            required:true,
                        })
                    }
                />
                {
                    errors.email && errors.email.type == "required" &&
                  <span className="mr-3 text-sm text-rose-500 mt-9">ادرس ایمیل  اجباری می باشد</span>
                }
                
        
            </div>
            <div className="w-full my-4">
                <input 
                    className="w-full shadow-2xl py-3 px-1 outline-none rounded-md mb-3 transition duration-700 focus:outline-sky-300"
                    type="text" 
                    placeholder={"رمز عبور"}
                    {
                        ...register('password',{
                            minLength:11,
                            max:30,
                            required:true,
                        })
                    }
                />
                {
                    errors.password && errors.password.type == "required" &&
                    <span className="mr-3 text-sm text-rose-500 mt-9">رمز عبور الزامی می باشد</span>
                }
                
            </div>
            <div className="w-full my-4">
                <input 
                    className="w-full shadow-2xl py-3 px-1 outline-none rounded-md mb-3 transition duration-700 focus:outline-sky-300"
                    type="text" 
                    placeholder={"تکرار رمز عبور"}
                    {
                        ...register('confirmpassword',{
                            validate:(val)=> val === watch("password") ,
                            required:true,
                        })
                    }
                />
                {
                    errors.confirmpassword && errors.confirmpassword.type == "validate" &&
                    <span className="mr-3 text-sm text-rose-500 mt-9">با رمز عبور مطابقت ندارد</span>
                }
                {
                     errors.confirmpassword && errors.confirmpassword.type == "required" &&
                     <span className="mr-3 text-sm text-rose-500 mt-9">رمز عبور را مجددا وارد کنید</span>
                }

                
            </div>
            
            <button 
             type="submit"
             className="bg-red-500 my-6 shadow-2xl rounded-md text-white w-[90px] h-[44px] transition duration-700 hover:bg-red-700 "
            >
                ارسال
            </button>
        </form>
    )
} 