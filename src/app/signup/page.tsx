"use client";

import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

const SignUpPage = () => {

    const onSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const user = Object.fromEntries(formData.entries()) as {
            name: string;
            image: string;
            email: string;
            password: string;
        };

        const {data, error} = await authClient.signUp.email({
            ...user,

            callbackURL: "/"
        })

        if (data) {
            // console.log("User signed up successfully:", data);
            redirect("/")
        }

        if (error) {
            // console.error("Error signing up:", error);
        }

        // console.log(user);
    };

    const handleGoogleSignin = async () => {
            await authClient.signIn.social({
                provider: "google",
            });
        };
    
        const handleGithubSignin = async () => {
            await authClient.signIn.social({
                provider: "github",
            });
        };

    return (
        <div className="flex flex-col items-center justify-center mt-5">
            <h1 className="text-2xl font-bold text-red-700">সাইন আপ</h1>
            <form onSubmit={onSubmit}>
                <fieldset className="fieldset rounded-box w-md">
                    
                    <label className="label">Name</label>
                    <input name="name" type="text" className="input w-md" placeholder="Name" />

                    <label className="label">ImageURL</label>
                    <input name="image" type="url" className="input w-md" placeholder="Image" />

                    <label className="label">Email</label>
                    <input name="email" type="email" className="input w-md" placeholder="Email" />

                    <label className="label">Password</label>
                    <input name="password" type="password" className="input w-md" placeholder="Password" />

                    <button type="submit" className="btn text-white bg-red-700 mt-4">সাইন আপ</button>
                </fieldset>
            </form>

            <button onClick={handleGoogleSignin} className='btn'>Sign in with Google</button>
            <button onClick={handleGithubSignin} className='btn'>Sign in with GitHub</button>
        </div>
    );
};

export default SignUpPage;