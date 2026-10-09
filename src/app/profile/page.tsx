"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";

import React, { useState } from 'react';

const ProfilePage = () => {

    const [show, setShow] = useState(false);

    const {data: session} = authClient.useSession();
        const user = session?.user;
        // console.log(user);

    const handleUpdateProfile = async (e:React.SubmitEvent<HTMLElement>) => {
        e.preventDefault()
        const formData = new FormData(e.target);
        const newUserData = Object.fromEntries(formData.entries()) as {name:string, image:string}

        await authClient.updateUser({
            ...newUserData
        });
    }

    const handleShowForm = () => {
        setShow(!show);
    };

    return (
        <div>
            <div className="flex flex-col justify-center items-center gap-2 m-3">
                <div className="avatar ">
                    <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
                        <Image alt="Tailwind-CSS-Avatar-component" src={user?.image as string} width={40} height={40} />
                    </div>
                </div>
                <h2 className="text-center m-3">{user?.name}</h2>
                <p className="text-center m-3">{user?.email}</p>

                <button onClick={handleShowForm} className="btn">Edit Profile</button>

                {show && <form onSubmit={handleUpdateProfile}>
                    <fieldset className="fieldset rounded-box w-md">

                        <label className="label">Name</label>
                        <input name="name" type="text" className="input w-md" placeholder="Name" />

                        <label className="label">ImageURL</label>
                        <input name="image" type="url" className="input w-md" placeholder="Image" />

                        <button type="submit" className="btn text-white bg-red-700 mt-4"> Update Profile</button>
                    </fieldset>
                </form>}
            </div>


        </div>
    );
};

export default ProfilePage;