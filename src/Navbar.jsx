import Logo from "../src/assets/LOGO.png";
import Allpage from "./Allpage";

export default function Navbar() {
    return (
        <div>
            <nav style={{ backgroundColor: "#88AB8E" }} className="relative   shadow-lg">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="relative flex h-20 items-center justify-between">

                        <div className="flex flex-1 items-center justify-start space-x-4">
                            <img
                                src={Logo}
                                alt="Textorium Logo"
                                className="h-12 sm:h-14 w-auto object-contain"
                            />
                            <h1 style={{color:"#EEE7DA",fontSize:"30px"}} className="text-white text-lg sm:text-xl font-extrabold tracking-wide">
                                AASHISH-TEXTORIUM
                            </h1>
                        </div>

                    </div>
                </div>
            </nav>

            <Allpage />
        </div>
    );
}
