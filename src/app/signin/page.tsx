"use client";

import { authClient } from '@/lib/auth-client';
import React from 'react';
// import toast from 'react-hot-toast';
import { toast } from 'react-toastify';


const SignInPage = () => {

    const onSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const user = Object.fromEntries(formData.entries()) as {
            email: string;
            password: string;
        };

        const {data, error} = await authClient.signIn.email({
            ...user,
            callbackURL: "/"
        })

        if (data) {
            toast.success("Signed in successfully!");
            console.log("User signed in successfully:", data);
        }

        if (error) {
            toast.error(error.message);
            
            console.error("Error signing in:", error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center mt-5">
            <h1 className="text-2xl font-bold text-red-700">সাইন ইন</h1>
            <form onSubmit={onSubmit}>
                <fieldset className="fieldset rounded-box w-md">

                    <label className="label">Email</label>
                    <input name="email" type="email" className="input w-md" placeholder="Email" />

                    <label className="label">Password</label>
                    <input name="password" type="password" className="input w-md" placeholder="Password" />

                    <button type="submit" className="btn text-white bg-red-700 mt-4">সাইন ইন</button>
                </fieldset>
            </form>
        </div>
    );
};

export default SignInPage;