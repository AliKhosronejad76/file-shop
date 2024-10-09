import Logo from "../logo/Logo";
import Menu from "./Menu";
import Searchbar from "./Searchbar";
import ContactUs from "./ContactUs";
import Actions from "./Actions";



export default function Header(){
    return(
        <header className="">         
            <div className="flex px-3 justify-between py-4">
                <div className="w-[13%]">
                    <Logo/>
                </div>
                <div className="w-[65%]  flex flex-col justify-between">
                    <Menu/>
                    <Searchbar/>
                </div>

                <div className="w-[17%]">
                    <ContactUs />
                   <Actions/>
                </div>

            </div>
        </header>
    )
}