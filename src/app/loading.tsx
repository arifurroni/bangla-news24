// import React from 'react';

const LoadingPage = () => {
    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-red-50 px-4">
            {/* Background decoration */}
            <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-red-200/40 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-rose-300/40 blur-3xl" />

            {/* Loading card */}
            <div className="relative w-full max-w-md rounded-3xl border border-red-100 bg-white/80 p-10 text-center shadow-xl shadow-red-200/40 backdrop-blur-md">
                {/* Animated spinner */}
                <div className="relative mx-auto mb-7 flex h-20 w-20 items-center justify-center">
                    <div className="absolute inset-0 animate-spin rounded-full border-4 border-red-100 border-t-red-600" />
                    <div className="h-10 w-10 animate-pulse rounded-full bg-red-500/15" />
                </div>

                <h1 className="text-2xl font-extrabold text-red-700 sm:text-3xl">
                    Please Wait
                </h1>

                <p className="mt-3 text-sm leading-6 text-gray-500 sm:text-base">
                    We are getting everything ready for you.
                </p>

                {/* Animated dots */}
                <div className="mt-6 flex items-center justify-center gap-2">
                    <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-red-400 [animation-delay:-0.3s]" />
                    <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-red-500 [animation-delay:-0.15s]" />
                    <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-red-600" />
                </div>

                <p className="mt-6 text-xs font-medium uppercase tracking-[0.2em] text-red-400">
                    Loading your content
                </p>
            </div>
        </div>
    );
};

export default LoadingPage;