"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import Image from "next/image";

const UserInfo = () => {

    const {data: session} = authClient.useSession();
    const user = session?.user;
    // console.log(user);

    const handleSignout = async () => {
        await authClient.signOut();
    };

    return (
        <div>
            {
                user ? <div>
                    <div className="avatar flex flex-col items-center gap-2">
                        <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
                            <Image alt="Tailwind-CSS-Avatar-component" src={user?.image as string} width={40} height={40} />
                        </div>
                    </div>
                    <h2>{user?.name}</h2>
                    <button onClick={handleSignout} className="btn btn-error btn-sx">Sign Out</button>
                </div> : <div className="flex items-center gap-3 justify-end">
                    <Link href="/signin">
                        <button className="btn h-8 bg-white hover:bg-red-100 border-2 hover:border-[#C10007]">সাইন ইন</button>
                    </Link>
                    <Link href="/signup">
                        <button className="btn h-8 bg-[#C10007] hover:bg-[#f70008] text-white">সাইন আপ</button>
                    </Link>
                </div>
            }

        </div>
    );
};

export default UserInfo;