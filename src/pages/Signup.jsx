import React from 'react';

const Signup = () => {
    return (
        <div className="relative flex justify-center items-center h-screen" style={{ backgroundImage: `url(/src/assets/bg.png)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 flex flex-col items-center p-16 text-black bg-white rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-6">Sign In</h2>
                <form className="space-y-4 items-center flex flex-col">
                    <div className="flex flex-col">
                        <label htmlFor="username" className="text-sm mb-1 text-gray-700">Username:</label>
                        <input type="text" id="username" name="username" className="p-2 border rounded-lg border-gray-300 focus:outline-none focus:border-gray-500" />
                    </div>
 
                    <div className="flex flex-col">
                        <label htmlFor="password" className="text-sm mb-1">Password:</label>
                        <input type="password" id="password" name="password" className="p-2 border rounded-lg border-gray-300 focus:outline-none focus:border-gray-500" />
                    </div>

                    <button type="submit" className="bg-[#F9B131] text-white w-2/4 py-2 px-4 rounded-full hover:bg-green-600 focus:outline-none ">Sign In</button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
