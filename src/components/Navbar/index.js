import logo from '../../assets/logo.png'
import { Tooltip } from 'react-tooltip'



const NavButton = () => {
    return <a href="https://drive.google.com/file/d/1DSG3bPXsgp9fu0A7Wleo4XzmHtA6MwHf/view?usp=sharing" target='__blank' class="relative inline-block px-4 py-2 font-semibold group">
        <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#ffdd35] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
        <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-[#ffdd35]"></span>
        <span class="relative text-black">Resume</span>
    </a>
}

export default function Navbar() {
    return (
        <div className='w-[80%] py-4 md:px-8 md:py-4 lg:px-20 xl:px-36'>
            <div className="flex justify-between items-center text-white ">

                <a>
                    <img
                        src={logo}
                        className="App-logo w-12 rounded-full"
                        alt="logo"
                        data-tooltip-content="Greetings!!!😄"
                        data-tooltip-id='logo_tooltip' // Define the tooltip content
                    />
                </a>
                <Tooltip id='logo_tooltip' place="bottom" type="info" effect="solid" style={{ backgroundColor: "#f5f5f5", borderColor: "#ffdd35", borderRadius: '12', color: "#222", fontSize: "15px", fontWeight: "semibold" }} />
                <ul className="hidden md:flex">
                    <li className="p-4"><a href="#education" className="hover:text-[#ffdd35]">Education</a></li>
                    <li className="p-4"><a href="#skills" className="hover:text-[#ffdd35]">Skills</a></li>
                    <li target="" className="p-4"><a href="#projects" className="hover:text-[#ffdd35]">Projects</a></li>
                </ul>
                <NavButton />
            </div>
        </div>
    )
}
