import Allpage from "./Allpage";
import Logo from "../src/assets/LOGO.png";

export default function Navbar() {
    return (
        <div>
            <nav className="w-full py-4 px-4 sm:px-6 md:px-8 bg-white shadow-lg border-b border-white/10 flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center">
                    <img
                        src={Logo}
                        alt="Textorium Logo"
                        className="h-10 sm:h-12 w-auto object-contain"
                    />
                </div>

                {/* Center Heading */}
                <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-wide text-black text-center flex-1">
                    AASHISH — TEXTORIUM
                </h1>

                {/* Right empty div for spacing */}
                <div className="w-10 sm:w-12"></div>
            </nav>

            <Allpage />
        </div>
    );
}
