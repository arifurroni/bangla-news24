import Image from 'next/image';
import React from 'react';
import NavLinks from './NavLinks';
import Link from 'next/link';
import UserInfo from './UserInfo';

const Header = () => {

    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
    });
    return (
        <header className="bg-white shadow-md">
            <div className="flex justify-between items-center py-3 mx-[5%] md:mx-[15%]">
                <div></div>
                <Link href="/">
                    <div className="flex items-center gap-2">
                        <Image
                            loading="eager"
                            className={"w-10 h-10"}
                            src="/logo.webp"
                            alt="Logo"
                            width={50}
                            height={50}
                        />
                        <div>
                            <div>Bangla News 24</div>
                            <div>{date}</div>
                        </div>
                    </div>
                </Link>

                <UserInfo />
            </div>

            <NavLinks />
        </header>
        
    );
};

export default Header;