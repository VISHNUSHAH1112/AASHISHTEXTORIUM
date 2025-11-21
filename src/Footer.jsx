import React from 'react'

export default function Footer() {
    return (
        <footer style={{ backgroundColor: "#88AB8E" }} className="w-full bg-gray-950 text-gray-300 py-12 px-6">

            {/* Main Container */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10">

                {/* Brand Section */}
                <div>
                    <h2 style={{ color: "#EEE7DA" }} className="text-3xl font-bold tracking-wide text-white">
                        Aashish-Textorium
                    </h2>
                    <p style={{ color: "#F2F1EB" }} className="mt-4 text-sm text-gray-400 leading-relaxed">
                        Premium-quality fabrics crafted with precision, comfort, and timeless style.
                    </p>
                </div>

                {/* Empty for better spacing (Premium Look) */}
                <div className="hidden sm:block"></div>

                {/* Contact Section */}
                <div>
                    <h3 style={{ color: "#EEE7DA" }} className="text-xl font-semibold text-white mb-3">
                        Contact Us
                    </h3>
                    <ul style={{ color: "#F2F1EB" }} className="space-y-2 text-sm text-gray-400">
                        <li>Email: Aashish@textorium.com</li>
                        <li>Phone: +91 98765 XXXXX</li>
                        <li>Location: Surat, India</li>
                    </ul>
                </div>

            </div>

            {/* Bottom Border Line */}
            <div style={{ color: "#423928ff" }} className="border-t border-gray-800 mt-12 pt-5 text-center">
                <p className="text-gray-500 text-sm">
                    © 2025 Textorium. All Rights Reserved.
                </p>
            </div>
        </footer>
    )
}
