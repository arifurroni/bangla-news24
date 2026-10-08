import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <div className="bg-white mt-10">
            <hr className="border-gray-200 mb-3" />
            <div className="mx-[5%] md:mx-[15%]">
                
                <div className="flex justify-between items-center">
                    <div>
                        <p>&copy; 2026 BanglaBulletin</p>
                    </div>
                    <div className="mb-3">
                        <p>Source: <Link href="https://www.bbc.com/bangla" target="_blank" rel="noopener noreferrer">BBC Bangla</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;