import React, { useEffect, useState, useRef } from "react";
import SB from "../src/assets/SB.webp";
import RB from "../src/assets/RD.jpg";
import OB from "../src/assets/Ob.jpg";
import Footer from "./Footer";

// brands array tumhara pehle wala hi use kar lo
const brands = [
    {
        name: "Raymond",
        items: {
            Pant: [
                {
                    name: "Raymond Men'S Solid Trouser Pant Fabric",
                    img: "https://m.media-amazon.com/images/I/A1rqK1xq1pL.jpg",
                    type: "Suiting",

                },
                {
                    name: "Raymond Men's Terry Rayon Checks Unstitched ",
                    img: "https://www.thelibasstore.com/wp-content/uploads/2022/09/LSRAYTR268BKSGRNSTRUCREPE14025FAUG.jpg",
                    type: "Suiting",

                },
                {
                    name: "Raymond Sapphire Terry wool Matti Plain",
                    img: "https://mantire.in/cdn/shop/files/rn-image_picker_lib_temp_f4477e52-0a38-4170-9ab8-fa8a830bd468.jpg?crop=center&height=240&v=1725786361&width=240",
                    type: "Suiting",

                },
                {
                    name: "Raymond Men's Wool Checks Super 120's",
                    img: "https://www.thelibasstore.com/wp-content/uploads/2022/10/LSRAYWOOLSUIT903DKBLBLMRSLFCHK60JANN.jpg",
                    type: "Suiting",

                },
                {
                    name: "RAYMOND ESPRIDO SUPER 120'S MERINO WOOL",
                    img: "https://5.imimg.com/data5/SELLER/Default/2024/5/416722882/UY/CD/QH/26866112/raymond-esprido-super-120-s-merino-wool-unstitched-suiting-fabric.jpg",
                    type: "Suiting",

                },
                {
                    name: " Raymond Super 100s count 45%Wool Plain",
                    img: "https://mantire.in/cdn/shop/files/IMG-20250706_090211_compress60.jpg?crop=center&height=240&v=1751797465&width=240",
                    type: "Suiting",

                },
                {
                    name: "Raymond Men's Wool Checks Super 100's",
                    img: "https://www.thelibasstore.com/wp-content/uploads/2022/10/LSRAYWOOLSUIT819LGRYGRYCHKJAN50N-366x433.jpg",
                    type: "Suiting",

                },
                {
                    name: " Raymond Super 35% Wool Blended Stretchable Slub ",
                    img: "https://mantire.in/cdn/shop/files/IMG-20250705_134554_compress13.jpg?crop=center&height=600&v=1751780961&width=600",
                    type: "Suiting",

                },
                {
                    name: "Raymond Super 70's Merino Wool & Polyester",
                    img: "https://godavaritextiles.com/cdn/shop/files/rn-image_picker_lib_temp_ceef0015-d7cb-4364-9e55-6bcaac213e93.heic?v=1728433962&width=1946",
                    type: "Suiting",

                },
                {
                    name: "Suit Fabric Raymond 45% Wool Blended Check",
                    img: "https://mantire.in/cdn/shop/files/IMG-20250705_103918_compress28.jpg?crop=center&height=800&v=1751695536&width=800",
                    type: "Suiting",

                },
                {
                    name: "Raymond Men's 52% Wool Super 130's Checks Unstitched ",
                    img: "https://www.thelibasstore.com/wp-content/uploads/2024/12/LSRAYWOOLSUIT1039BKSLFCHK260DEC.jpg",
                    type: "Suiting",

                },
                {
                    name: "Cavalero Men's 70% Wool Super 130's Striped Unstitched",
                    img: "https://www.thelibasstore.com/wp-content/uploads/2023/03/LSCVWOOLSUIT942DKGRYWHSTRPMAR.jpg",
                    type: "Suiting",

                },
            ],

            Shirt: [
                {
                    name: "Shirt Fabric Raymond 100% Cotton",
                    img: "https://mantire.in/cdn/shop/files/IMG-20250609_120431_compress95.jpg?v=1749452453",
                    type: "Shirting",
                },
                {
                    name: "Raymond Men's 100% Pure Linen 60 LEA Self Design Unstitched ",
                    img: "https://www.thelibasstore.com/wp-content/uploads/2024/06/LSSHRAYLIN187DFYLWSLF170JUN.jpg",
                    type: "Shirting",
                },
                {
                    name: "Raymond Men's Linen Checks Unstitched ",
                    img: "https://www.thelibasstore.com/wp-content/uploads/2022/09/LSRAYLINENTR208YLSLFSTRUCHKSEP.jpg",
                    type: "Shirting",
                },
                {
                    name: "White with Pastel Green Checks",
                    img: "https://detailory.in/cdn/shop/files/5_ac623ec6-2e87-4724-95d1-ff650218f521.jpg?v=1752819636",
                    type: "Shirting",
                },
                {
                    name: "Raymond Classique Pure Egyptian Cotton Stripes Unstitched ",
                    img: "https://5.imimg.com/data5/ECOM/Default/2023/3/292748454/AQ/SL/CO/26866112/20230315-161751-500x500.jpg",
                    type: "Shirting",
                },
                {
                    name: "Shirt Fabric Raymond Polished Cotton Digital",
                    img: "https://mantire.in/cdn/shop/files/IMG-20250609_115526_compress2.jpg?v=1749452453",
                    type: "Shirting",
                },
                {
                    name: "Raymond Ink Cotton Printed Unstitched Shirting Fabric ",
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKSS82DhMqjdC4dyNooUWpCaXbjzoN27QwuXSBqxZze73anIr_JudbkU8qH6ETTRtIPKc&usqp=CAU",
                    type: "Shirting",
                },
                {
                    name: "Raymond Men's Giza Cotton Black Printed Unstitched ",
                    img: "https://5.imimg.com/data5/SELLER/Default/2024/4/406421345/CB/VJ/TR/115760983/raymond-men-s-giza-cotton-black-printed-unstitched-shirt-fabric.jpg",
                    type: "Shirting",
                },
                {
                    name: "Raymond Premium Giza Cotton Digital Printed",
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_pdzysSiJc6myUC7pTl7K9bHdUDhSFEnf8Q&s",
                    type: "Shirting",
                },
                {
                    name: "Raymond Men's Giza Cotton Printed Unstitched Shirting Fabric",
                    img: "https://www.thelibasstore.com/wp-content/uploads/2022/05/LSRAYSH144BKWHPRTPOPMAY-1.jpg",
                    type: "Shirting",
                },
                {
                    name: "Combo of Raymond Blackish Grey Self Design Trouser Fabric",
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQspZ_wq6cO62OJQZeXl1YZdaPS34TKNEJKfA&s",
                    type: "Shirting",
                },
                {
                    name: "Buy Raymond Men Blue Printed Shirt Clothing Fabric",
                    img: "https://assets.myntassets.com/w_412,q_30,dpr_3,fl_progressive,f_webp/assets/images/7505860/2018/10/4/95e2da70-2e13-4322-b66d-2ac45ce75ed81538642156782-Raymond-Men-Blue-Printed-Shirt-Clothing-Fabric-9241538642156729-3.jpg",
                    type: "Shirting",
                },

            ],

            SuitColor: [
                {
                    name: "Polyester RAYMOND COLORADO UNSTITCHED",
                    img: "https://5.imimg.com/data5/SELLER/Default/2024/5/416889783/RF/CU/BI/26866112/raymond-colorado-pinstripes-unstitched-suiting-fabric-royal-blue.jpg",
                    type: "Suit-Color",
                },
                {
                    name: "Raymond Men's Polyester Viscose Checks ",
                    img: "https://www.thelibasstore.com/wp-content/uploads/2022/09/LSRAYTR280RBLSLFCHK14035VAUG-1.jpg",
                    type: "Suit-Color"
                },
                {
                    name: "RAYMOND Techno Stretch Wool Blend Unstitched Suiting Fabric-Dark Blue",
                    img: "https://images.jdmagicbox.com/quickquotes/images_main/raymond-techno-stretch-wool-blend-unstitched-suiting-fabric-dark-blue-383593949-qkh3r.jpg",
                    type: "Suit-Color",
                },
                {
                    name: "Suit Fabric Raymond Poly Viscose ",
                    img: "https://mantire.in/cdn/shop/files/IMG-20250721_103548_compress11.jpg?v=1753158967",
                    type: "Suit-Color"
                },
                {
                    name: "Raymond Suit Fabric ",
                    img: "https://i.pinimg.com/originals/ed/b5/66/edb566075c7d56dd1fa822d068526e16.jpg",
                    type: "Suit-Color",
                },
                {
                    name: "Raymond Men Blue Striped Polyester Viscose Blend ",
                    img: "https://www.jiomart.com/images/product/original/rvdf3xtfbo/raymond-men-blue-striped-polyester-viscose-blend-1-25-meter-trouser-fabric-product-images-rvdf3xtfbo-0-202301010223.jpg?im=Resize=(500,630)",
                    type: "Suit-Color"
                }
            ],
        },
    },

    {
        name: "Siyaram",
        items: {
            Pant: [
                {
                    name: "Siyaram TR Premium Suiting Fabric",
                    img: "https://www.thelibasstore.com/wp-content/uploads/2021/05/LSSIYATR104DKGRNSLFBRDCHK75-1.jpg",
                    type: "Suiting",
                },
                {
                    name: "Siyaram Men's Blended Unstitched Trouser",
                    img: "https://mantire.in/cdn/shop/files/IMG-20250602_142250_compress6.jpg?crop=center&height=800&v=1748857792&width=800",
                    type: "Suiting",
                },
                {
                    name: "Siyaram Poly Viscose Plain Trouser Fabric",
                    img: "https://mantire.in/cdn/shop/files/IMG-20251026_102829_compress41.jpg?v=1761457297",
                    type: "Suiting",
                },
                {
                    name: "Siyaram Terry Rayon Checks",
                    img: "https://m.media-amazon.com/images/I/81DijSkTHyL.AC_UY1100.jpg",
                    type: "Suiting",
                },
                {
                    name: "Siyaram Men's Terry Rayon Striped Trouser Fabric",
                    img: "https://m.media-amazon.com/images/I/81m0kSeNRUS.jpg",
                    type: "Suiting",
                },
                {
                    name: "Siyaram Polyester Viscose Trouser Material",
                    img: "https://mantire.in/cdn/shop/files/IMG-20250821_100331_compress77.jpg?v=1755756995",
                    type: "Suiting",
                },
                {
                    name: "Siyaram Charcoal Black Textured Suiting",
                    img: "https://mantire.in/cdn/shop/files/IMG-20250824_101212_compress65.jpg?crop=center&height=600&v=1756013150&width=600",
                    type: "Suiting",
                },
                {
                    name: "Siyaram Rich Black Plain Suiting Fabric",
                    img: "https://mantire.in/cdn/shop/files/IMG-20250602_100225_compress67.jpg?crop=center&height=600&v=1748842199&width=600",
                    type: "Suiting",
                },
                {
                    name: "Siyaram Dark Navy Suiting Poly Viscose",
                    img: "https://m.media-amazon.com/images/I/71truH10sML.AC_UY1100.jpg",
                    type: "Suiting",
                },
                {
                    name: "Siyaram Men's Fine Poly Blend Trouser Fabric",
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqQw9RmpT_ED89s7cm7lyOKdo4i0HE91vO7w&s",
                    type: "Suiting",
                },
                {
                    name: "Siyaram Premium Terry Rayon Textured",
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2-i-Cf-PntS0hzQAD7-AgdwnKXt3uiB9Gug&s",
                    type: "Suiting",
                },
                {
                    name: "Siyaram Terry Rayon Solid Black",
                    img: "https://m.media-amazon.com/images/I/71wMeiaMIOS.AC_UF1000,1000_QL80.jpg",
                    type: "Suiting",
                },
            ], Shirt: [
                {
                    name: "Siyaram Pure Cotton Shirt Fabric",
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPOXUFbNAkUvg-wto8PnvtNtZ2JeXOLb5ypQ&s",
                    type: "Shirting",
                },
                {
                    name: "Siyaram Men's Cotton Striped Shirting",
                    img: "https://www.thelibasstore.com/wp-content/uploads/2025/06/LSSIYASH50WHBKSTRPPOP180MAY.jpg",
                    type: "Shirting",
                },
                {
                    name: "Siyaram Printed Cotton Shirting",
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe6t-Ac9Dskq--17G7tz6JDbjlVZtvIo0lkA&s",
                    type: "Shirting",
                },
                {
                    name: "Siyaram Giza Cotton Premium Shirting",
                    img: "https://www.thelibasstore.com/wp-content/uploads/2025/07/LSJHSH152GRYPKFLRLJAQ200JUL-1.jpg",
                    type: "Shirting",
                },
                {
                    name: "Siyaram Men Micro Print Shirt Fabric",
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyyEVgdDNwlhlWRN9kaAJLYxj5Wj1epsgHiw&s",
                    type: "Shirting",
                },
                {
                    name: "Siyaram Checkered Cotton Shirt Fabric",
                    img: "https://fabricbhandar.com/cdn/shop/files/WhatsApp_Image_2023-04-28_at_4.21.47_PM_48af2f36-7427-43b3-b303-524e84a004cd.jpg?v=1682679457&width=1445",
                    type: "Shirting",
                },
                {
                    name: "Siyaram Satin Finish Shirt Fabric",
                    img: "https://rukminim2.flixcart.com/image/480/640/xif0q/fabric/y/s/9/no-2-25-m-unstitched-na-sky-blue-shining-siyaram-s-original-imagjrgczhacsgq8.jpeg?q=90",
                    type: "Shirting",
                },
                {
                    name: "Siyaram Men's Classic Printed Shirting",
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2iO2Klkd_Ueo0hU48b_OegJJLYrXxbbMa4cQ5qcSRXKa1lWyrlog96qRxH9oJ3OYmzjQ&usqp=CAU",
                    type: "Shirting",
                },
                {
                    name: "Siyaram Premium Oxford Cotton",
                    img: "https://fabricbhandar.com/cdn/shop/files/WhatsApp_Image_2023-04-28_at_4.34.42_PM_3_ab2804e2-7f73-4830-9fc0-a566f628f2c5.jpg?v=1682680173&width=1445",
                    type: "Shirting",
                },
                {
                    name: "Siyaram Men's Formal Striped Shirting",
                    img: "https://images.jdmagicbox.com/quickquotes/images_main/siyaram-mens-pure-cotton-self-design-unstitched-shirting-fabric-sky-blue-2227787815-wgqmawap.jpg",
                    type: "Shirting",
                },
                {
                    name: "Siyaram Printed Soft Cotton Fabric",
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfbCyis7iv07M-SMhsyPbSw-D9oBhKSABVjA&s",
                    type: "Shirting",
                },
                {
                    name: "Siyaram Cotton Blend Premium Shirt Fabric",
                    img: "https://fabricbhandar.com/cdn/shop/products/custom_resized_68d47de5-1d59-4036-9644-c942b193b482.jpg?v=1674226536&width=1445",
                    type: "Shirting",
                },
            ],
            SuitColor: [
                {
                    name: "Siyaram Suiting Solid Navy Blue",
                    img: "https://www.thelibasstore.com/wp-content/uploads/2019/09/LSSIYA191SKBLWHCHKDKNBLSLFCHKAUG-6.jpg",
                    type: "Suit-Color",
                },
                {
                    name: "Siyaram Men's Checks Suit Fabric",
                    img: "https://m.media-amazon.com/images/I/81DijSkTHyL.AC_UY1100.jpg",
                    type: "Suit-Color",
                },
                {
                    name: "Siyaram Poly Viscose Rich Maroon Suit Fabric",
                    img: "https://mantire.in/cdn/shop/files/IMG-20250709_100430_compress74.jpg?crop=center&height=800&v=1752038319&width=800",
                    type: "Suit-Color",
                },
                {
                    name: "Siyaram Premium Classic Grey Suiting",
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRRKkONO8BtPSQhhTa7H_sDDgyxqMZCoPzBA&s",
                    type: "Suit-Color",
                },
                {
                    name: "Siyaram Men's Self-Textured Suit Fabric",
                    img: "https://mantire.in/cdn/shop/files/IMG-20250212_084044_compress81.jpg?crop=center&height=600&v=1739333605&width=600",
                    type: "Suit-Color",
                },
            ],

        }
    },

    {
        name: "Arvind",
        items: {
            Pant: [
                { name: "Arvind TR Suiting Premium", img: "https://5.imimg.com/data5/CE/GR/HS/SELLER-11812347/arvind-suiting-fabric-500x500.jpg", type: "Suiting" },
                { name: "Arvind Poly Viscose Check Suiting", img: "https://5.imimg.com/data5/IR/HE/MY-8069837/poly-viscose-check-suiting-fabric.jpg", type: "Suiting" },
                { name: "Arvind Terry Rayon Plain", img: "https://m.media-amazon.com/images/I/91O9WRWLOmL.AC_UY1100.jpg", type: "Suiting" },
                { name: "Arvind Wool Rich Premium Suiting", img: "https://mantire.in/cdn/shop/files/IMG-20250529_103308_compress31.jpg?crop=center&height=600&v=1748502224&width=600", type: "Suiting" },
                { name: "Arvind Blue Stripes Suiting", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6gZ0Zy4uIK-XI10oUVVSY_Dvs29rMOj9s1Q&s", type: "Suiting" },
                { name: "Arvind Super 80s Merino Blend", img: "https://m.media-amazon.com/images/I/91XPnShVvLL.AC_UY1100.jpg", type: "Suiting" },
                { name: "Arvind Classic Black Trouser Fabric", img: "https://www.thelibasstore.com/wp-content/uploads/2018/09/LSADCORD65DKGREY.jpg", type: "Suiting" },
                { name: "Arvind Premium Grey Twill", img: "https://www.thelibasstore.com/wp-content/uploads/2023/11/LSADTR78LGRYSTRU8OCT.jpg", type: "Suiting" },
                { name: "Arvind Micro Checks Suiting", img: "https://fabrictales.in/cdn/shop/files/PXL_20250712_090950298.PORTRAIT.ORIGINAL-Photoroom.jpg?v=1757423474&width=1946", type: "Suiting" },
                { name: "Arvind Corporate Suiting Fabric", img: "https://m.media-amazon.com/images/I/81aqx-XY8PL.AC_UY1100.jpg", type: "Suiting" },
                { name: "Arvind Men’s Wool Blend Suit Fabric", img: "https://m.media-amazon.com/images/I/914tC2L0jtL.AC_UY1100.jpg", type: "Suiting" },
                { name: "Arvind Superior Polyester Viscose", img: "https://m.media-amazon.com/images/I/91n6FVHiyYL.AC_UY1100.jpg", type: "Suiting" },
            ],

            Shirt: [
                { name: "Arvind 100% Cotton Shirting", img: "https://mantire.in/cdn/shop/files/IMG-20250904_102916_compress68.jpg?crop=center&height=800&v=1756968545&width=800", type: "Shirting" },
                { name: "Arvind Giza Cotton Premium", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTki0WI62tiAG8d8X0PuF_vxlnrnCd6tGjANg&s", type: "Shirting" },
                { name: "Arvind Linen Blend Shirting", img: "https://www.mansfab.com/cdn/shop/products/no-1-70-m-unstitched-na-arvindlinenuropa-0013-mans-fab-original-imaggftamfzucgsy_800x.jpg?v=1683715290", type: "Shirting" },
                { name: "Arvind Printed Digital Shirt Fabric", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSER-UmPSth47yjOWSsyM44BTcTZTjJV1XYyw&s", type: "Shirting" },
                { name: "Arvind Oxford Cotton Shirt Fabric", img: "https://www.thelibasstore.com/wp-content/uploads/2020/05/LSADSH72SANDDOLLARBGSTRURYOX-3.jpg", type: "Shirting" },
                { name: "Arvind Fil-a-Fil Cotton", img: "https://image.made-in-china.com/2f0j00SNDTiAMskGco/100-Cotton-Fil-a-Fil-Yarn-Dyed-Fabric-for-Shirts.webp", type: "Shirting" }
            ],

            SuitColor: [
                { name: "Arvind Royal Blue Suiting Color", img: "https://mantire.in/cdn/shop/files/IMG-20241027_093827_compress3.jpg?v=1730002887", type: "Suit-Color" },
                { name: "Arvind Premium Suit Fabric", img: "https://m.media-amazon.com/images/I/91n4es-Q7vL.AC_UY1100.jpg", type: "Suit-Color" },
                { name: "Arvind Maroon Checks Suit Color", img: "https://fabrictales.in/cdn/shop/files/PXL_20250609_074701166.PORTRAIT.ORIGINAL.jpg?v=1757423567&width=1920", type: "Suit-Color" },
                { name: "Arvind Jet Black Suit Fabric", img: "https://www.thelibasstore.com/wp-content/uploads/2023/04/LSADSH76BKSOLIDSATSTRAPR.jpg", type: "Suit-Color" },
                { name: "Arvind Charcoal Grey Suit Fabric", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHfqlRmudfxJ2LgjQuhYgdhWUsmG0RDGf8aQ&s", type: "Suit-Color" },
                { name: "Arvind Wine Color Suit Fabric", img: "https://fabrictales.in/cdn/shop/files/PXL_20250609_074701166.PORTRAIT.ORIGINAL.jpg?v=1757423567&width=1946", type: "Suit-Color" },
            ],
        }
    }

];

const bannerImages = [{ img: SB }, { img: RB }, { img: OB }];

export default function FabricDisplay() {
    const [expanded, setExpanded] = useState({});
    const [current, setCurrent] = useState(0);
    const [fade, setFade] = useState(true);
    const brandRefs = useRef({});
    const brandListRef = useRef(null); // ← Brands list ke liye ref

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrent((prev) => (prev + 1) % bannerImages.length);
                setFade(true);
            }, 500);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const toggleExpand = (brandName, category) => {
        setExpanded((prev) => ({
            ...prev,
            [brandName]: {
                ...prev[brandName],
                [category]: !prev[brandName]?.[category],
            },
        }));
    };

    const scrollToBrand = (brandName) => {
        if (brandName === "allBrands" && brandListRef.current) {
            brandListRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        } else if (brandRefs.current[brandName]) {
            brandRefs.current[brandName].scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="bg-white text-black min-h-screen">

            {/* Banner */}
            <div className="w-full h-56 sm:h-72 md:h-217 relative overflow-hidden">
                {bannerImages.map((img, idx) => (
                    <img
                        key={idx}
                        src={img.img}
                        alt={`Banner ${idx + 1}`}
                        className={`absolute top-0 left-0 w-full h-full object-center transition-opacity duration-500 ${idx === current ? "opacity-100" : "opacity-0"}`}
                    />
                ))}
            </div>

            {/* Brand Horizontal List */}
            <div ref={brandListRef} className="mt-6 p-4 sm:p-6 bg-gray-100 rounded-lg shadow-md">
                <h2 className="text-xl sm:text-2xl font-bold text-center mb-4 sm:mb-6">
                    All these brands are available in our shop
                </h2>
                <div className="flex flex-col sm:flex-row sm:overflow-x-auto gap-3 sm:gap-6 px-2 sm:px-4">
                    {["Siyaram", "Raymond", "Mayur", "Donear", "Villa Italia", "Arvind"].map(
                        (brand, idx) => (
                            <div
                                key={idx}
                                className="flex flex-col items-center cursor-pointer transform transition duration-300 hover:bg-black hover:text-white rounded-lg px-3 py-2 shadow hover:shadow-lg w-full sm:min-w-[120px]"
                                onClick={() => scrollToBrand(brand)}
                            >
                                <span className="font-semibold text-sm sm:text-base text-center">{brand}</span>
                            </div>
                        )
                    )}
                </div>

            </div>

            {/* Brand Details */}
            <div className="p-4 sm:p-6 space-y-12 sm:space-y-16">
                {brands.map((brand, i) => (
                    <div key={i} ref={(el) => (brandRefs.current[brand.name] = el)}>
                        <h2 className="text-2xl sm:text-4xl font-extrabold text-center mb-6 sm:mb-10 border-b border-gray-300 pb-1 sm:pb-2">
                            {brand.name}
                        </h2>

                        {Object.keys(brand.items).map((cat) => {
                            const showAll = expanded[brand.name]?.[cat];
                            const itemsToShow = showAll
                                ? brand.items[cat]
                                : brand.items[cat].slice(0, 3);

                            return (
                                <div key={cat} className="mb-12 sm:mb-16">
                                    <h3 className="text-xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center underline decoration-gray-300">
                                        {cat} Collection
                                    </h3>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
                                        {itemsToShow.map((item, idx) => (
                                            <div
                                                key={idx}
                                                className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition relative group bg-gray-50 w-full"
                                            >
                                                <img
                                                    src={item.img}
                                                    className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform"
                                                />
                                                <div className="absolute bottom-0 left-0 w-full bg-black/30 text-white py-1 sm:py-2 text-center text-sm sm:text-lg opacity-0 group-hover:opacity-100 transition">
                                                    {item.type}
                                                </div>
                                                <div className="p-3 sm:p-5 text-center">
                                                    <h3 className="text-sm sm:text-lg font-bold">{item.name}</h3>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {brand.items[cat].length > 3 && (
                                        <div className="text-center mt-4 sm:mt-6">
                                            <button
                                                onClick={() => toggleExpand(brand.name, cat)}
                                                className="px-4 sm:px-6 py-1.5 sm:py-2 border border-black text-black font-semibold rounded hover:bg-black hover:text-white transition text-sm sm:text-base"
                                            >
                                                {showAll ? "Show Less" : "See All"}
                                            </button>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div>

            {/* Footer */}
            <Footer
                scrollToBrand={() => scrollToBrand("allBrands")}
                scrollToTop={scrollToTop}
            />
        </div>
    );

}

