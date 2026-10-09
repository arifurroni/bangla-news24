import Link from 'next/link';
// import React from 'react';

const notFound = () => {
    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-red-50 px-6">
            {/* Background decoration */}
            <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-red-200/40 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-rose-300/40 blur-3xl" />

            {/* Content */}
            <div className="relative w-full max-w-xl rounded-3xl border border-red-100 bg-white/80 p-8 text-center shadow-xl shadow-red-200/40 backdrop-blur-md sm:p-12">
                <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-red-100 text-4xl">
                    🔍
                </div>

                <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-red-500">
                    Oops! Something went wrong
                </p>

                <h1 className="text-8xl font-black tracking-tight text-red-600 sm:text-9xl">
                    404
                </h1>

                <h2 className="mt-4 text-2xl font-bold text-gray-900 sm:text-3xl">
                    Page Not Found
                </h2>

                <p className="mx-auto mt-4 max-w-md leading-7 text-gray-600">
                    The page you&apos;re looking for doesn&apos;t exist, may have been
                    moved, or is temporarily unavailable.
                </p>

                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                    <Link
                        href="/"
                        className="rounded-xl bg-red-600 px-7 py-3 font-semibold text-white shadow-lg shadow-red-200 transition duration-300 hover:-translate-y-1 hover:bg-red-700 hover:shadow-xl"
                    >
                        ← Back to Home
                    </Link>

                    {/* <button
                        onClick={() => window.history.back()}
                        className="rounded-xl border border-red-200 bg-white px-7 py-3 font-semibold text-red-600 transition duration-300 hover:bg-red-50"
                    >
                        Go Back
                    </button> */}
                </div>

                <div className="mt-10 border-t border-red-100 pt-5">
                    <p className="text-sm text-gray-400">
                        Error Code: 404 · Page Not Found
                    </p>
                </div>
            </div>
        </div>
    );
};

export default notFound;