<template>
    <div className="w-full h-[calc(100vh-108px)] flex items-center justify-center">
        <div className="w-full max-w-screen-md mx-auto py-12 text-center rounded border border-black">
            <h1 className="text-3xl font-semibold text-red-500">404 Not Found Page</h1>

            <p className="text-lg mt-4 mb-1 font-medium">Oops! The page you're looking for cannot
                be found.</p>

            <div className="mt-6 w-full flex items-center justify-center">
                <router-link to="/">
                <button className="bg-red-500 text-red-100 hover:bg-red-400 px-4 py-2 rounded-full">
                    Back to Home
                </button>
                </router-link>
            </div>
        </div>
    </div>
</template>