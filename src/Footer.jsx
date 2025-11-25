export default function Footer({ scrollToBrand }) {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const openShopMap = () => {
        window.open(
            "https://www.google.com/maps/dir/21.1711181,72.8869927/Plot+No,+Aashish+Tailors+and+Textorium,+20,+Godadara+Naher+Rd,+D+K+Nagar,+Godadara,+Surat,+Gujarat+395012/@21.1735395,72.8677652,15z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3be04fc4091ec031:0xe84438cbe281a927!2m2!1d72.8691631!2d21.1736253?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D",
            "_blank"
        ); // shop location
    };

    return (
        <footer className="bg-black text-white py-10 mt-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* About */}
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold mb-4">Aashish-Textorium</h3>
                    <p className="text-gray-300 text-sm sm:text-base">
                        Premium fabrics for everyday elegance. Quality you can trust, comfort you deserve.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
                        <li
                            className="hover:text-white cursor-pointer transition"
                            onClick={scrollToTop}
                        >
                            Home
                        </li>
                        <li
                            className="hover:text-white cursor-pointer transition"
                            onClick={openShopMap}
                        >
                            Locate Shop
                        </li>
                        <li
                            className="hover:text-white cursor-pointer transition"
                            onClick={() => scrollToBrand("scrollToBrandList")}
                        >
                            Brands
                        </li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                    <p className="text-gray-300 text-sm sm:text-base">Email: Aashish@textorium.com</p>
                    <p className="text-gray-300 text-sm sm:text-base">Phone: +91 98765 43210</p>
                </div>
            </div>

            <div className="mt-10 text-center text-gray-500 text-xs sm:text-sm">
                © 2025 Textorium. All rights reserved.
            </div>
        </footer>
    );
}
