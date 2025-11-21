import { useState, useEffect } from "react";

import Section2 from "../src/assets/section2.avif";
import Section3 from "../src/assets/section3.jpg";
import Siyaram from "../src/assets/siyaram.jpg";
import Raymond from "../src/assets/raymond.jpg";
import Linen from "../src/assets/linen-cotton-fabrics.jpeg";
import Arvind from "../src/assets/arvind.jpeg";
import Ocm from "../src/assets/Ocm.webp";
import Donear from "../src/assets/Donear.jpg";
import Mayur from "../src/assets/Mayur.jpg";
import Vila from "../src/assets/Vila.jpg";

import SB from "../src/assets/SB.webp";
import RB from "../src/assets/RD.jpg";
import OB from "../src/assets/Ob.jpg";

import Footer from "./Footer";

// BRAND LIST
const fabricBrands = [
    { name: "Siyaram", description: "Siyaram fabric delivers fine weaving, rich texture, and long-lasting comfort—perfect for timeless premium fashion.", image: Siyaram },
    { name: "Raymond", description: "Raymond fabric brings unmatched finesse, refined craftsmanship, and an elegant drape that defines true luxury tailoring.", image: Raymond },
    { name: "Linen", description: "Linen fabric offers natural breathability, feather-light comfort, and a refined texture ideal for effortless elegance.", image: Linen },
    { name: "Arvind", description: "Arvind fabric blends innovative craftsmanship with superior durability, giving modern style a premium, polished finish.", image: Arvind },
    { name: "OCM", description: "OCM fabric features a smooth finish, refined blends, and an elegant drape—making it perfect for premium, well-tailored formal wear.", image: Ocm },
    { name: "Donear", description: "Donear fabric offers sleek patterns, smooth texture, and durable blends, delivering comfort and style for everyday confidence.", image: Donear },
    { name: "Mayur", description: "Mayur fabric provides a polished look with its smooth finish, elegant patterns, and reliable durability for all-day comfort.", image: Mayur },
    { name: "Villaitalia", description: "Villaitalia fabric showcases a luxurious feel, fine detailing, and a sophisticated European-inspired finish for premium styling.", image: Vila },
];

// SLIDER IMAGES
const sliderImages = [{ img: SB }, { img: RB }, { img: OB }];

export default function Allpage() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % sliderImages.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ backgroundColor: "#88AB8E" }} className="px-4 md:px-6 lg:px-8 w-full flex flex-col space-y-12 bg-white text-gray-800">

            {/* ---------- SLIDER ---------- */}
            <br />
            <div>
                <div style={{ backgroundColor: "#AFC8AD" }} className="m-auto w-full max-w-7xl h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden  relative shadow-lg">
                    {sliderImages.map((item, i) => (
                        <img
                            key={i}
                            src={item.img}
                            className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000
                            ${i === index ? "opacity-100" : "opacity-0"}`}
                        />
                    ))}
                </div>
            </div>

            {/* ---------- ABOUT SECTION ---------- */}
            <div style={{ backgroundColor: "#AFC8AD" }} className="w-full max-w-7xl mx-auto  rounded-2xl p-6 flex flex-col md:flex-row gap-6 shadow-lg bg-gray-50">
                <div className="w-full md:w-1/2 h-64 sm:h-80 md:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden shadow-md">
                    <img className="w-full h-full object-cover rounded-2xl" src={Section2} alt="" />
                </div>
                <div className="w-full md:w-1/2 space-y-6 flex flex-col justify-center">
                    <h2 style={{ color: "#EEE7DA" }} className="text-3xl sm:text-4xl font-extrabold text-center tracking-wide">
                        Why Our Textorium is the Best
                    </h2>
                    <p style={{ color: "#000000ff" }} className="text-lg sm:text-xl font-semibold text-center leading-relaxed text-gray-800">
                        Our Textorium stands out as one of the most trusted and premium textile destinations because we focus on delivering unmatched quality, modern designs, and exceptional customer experience...
                    </p>
                    <p style={{ color: "#000000ff" }} className="text-lg sm:text-xl font-semibold text-center leading-relaxed text-gray-800">
                        With years of experience and thousands of satisfied customers, we ensure that every visitor enjoys personalized service, genuine pricing, and a smooth shopping experience...
                    </p>
                </div>
            </div>

            {/* ---------- EXPERIENCE SECTION ---------- */}
            <div style={{ backgroundColor: "#AFC8AD" }} className="w-full max-w-7xl mx-auto  rounded-2xl p-6 flex flex-col md:flex-row gap-6 shadow-lg bg-gray-50">
                <div  className="w-full md:w-1/2 space-y-4 flex flex-col justify-center">
                    <h2 style={{ color: "#EEE7DA" }} className="text-3xl sm:text-4xl font-extrabold text-center text-indigo-600">
                        Experience the Textorium Difference
                    </h2>
                    {[
                        "Premium quality you can trust — crafted for everyday comfort.",
                        "Minimal design, maximum durability.",
                        "Where elegance meets exceptional quality.",
                        "Simple. Clean. Beautifully crafted.",
                        "Luxury in every detail — designed for pure comfort.",
                        "Timeless design. Modern quality. Endless durability.",
                    ].map((text, idx) => (
                        <p key={idx} className="text-lg sm:text-xl font-bold text-gray-800">
                            {"=>"} {text}
                        </p>
                    ))}
                </div>
                <div className="w-full md:w-1/2 h-64 sm:h-80 md:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden shadow-md">
                    <img className="w-full h-full object-cover rounded-2xl" src={Section3} alt="" />
                </div>
            </div>

            {/* ---------- FABRIC BRANDS ---------- */}
            <div className="w-full max-w-7xl mx-auto">
                <h2 style={{ color: "#EEE7DA" }} className="text-3xl md:text-4xl font-extrabold text-center mb-6 text-indigo-600">
                    These Are the Premium Fabrics We Offer
                </h2>
                <div style={{ backgroundColor: "#AFC8AD" }} className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-6  rounded-2xl p-4 sm:p-6 shadow-lg bg-gray-50">
                    {fabricBrands.map((brand) => (
                        <div style={{ backgroundColor: "#AFC8AD" }}
                            key={brand.name}
                            className=" rounded-2xl p-2 space-y-3 transition-all duration-300 hover:shadow-2xl hover:scale-105 bg-white"
                        >
                            <div className="h-64 sm:h-56 md:h-64 lg:h-64 rounded-2xl overflow-hidden shadow-md">
                                <img
                                    src={brand.image}
                                    alt={brand.name}
                                    className="w-full h-full object-cover rounded-2xl"
                                />
                            </div>
                            <div style={{ backgroundColor: "#AFC8AD" }} className="bg-gray-50 border rounded-2xl text-base sm:text-lg font-semibold p-4 text-gray-800">
                                {brand.description}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}
