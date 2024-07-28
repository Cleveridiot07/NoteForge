import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { signupUser } from '../../api/auth'; // Assuming you have an api/auth.js file with signUser function

const SignUp = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        setError(null);

        if (!isValidEmail(email)) {
            setError('Username must include "@"');
            return;
        }

        try {
            const userData = {
                username: email,
                password: password,
            };

            const response = await signupUser(userData);
            console.log('SignUp response:', response);
            
            const token = response.token;
            localStorage.setItem('token', token);
            navigate('/home');
        } catch (error) {
            console.error('SignUp error:', error);
            setError('Failed to sign up. Please try again.'); // Handle specific error messages from backend if needed
        }
    };

    return (
        <div>
            <div className="min-h-[80vh] bg-aliceblue py-10 flex flex-col justify-center sm:py-12">
                <form className="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                        <div className="max-w-md mx-auto">
                            <div>
                                <h1 className="text-2xl font-semibold">SignUp</h1>
                            </div>
                            <div className="divide-y divide-gray-200">
                                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                    <div className="relative">
                                        <input
                                            id="email"
                                            name="email"
                                            type="text"
                                            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                            placeholder="UserName"
                                            value={email}
                                            onChange={(e) => {
                                                setEmail(e.target.value);
                                            }}
                                        />
                                        <label
                                            htmlFor="email"
                                            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                        >
                                            Username
                                        </label>
                                    </div>
                                    <div className="relative">
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => {
                                                setPassword(e.target.value);
                                            }}
                                        />
                                        <label
                                            htmlFor="password"
                                            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                        >
                                            Password
                                        </label>
                                    </div>
                                    <div className="relative">
                                        <button
                                            type="submit"
                                            onClick={handleSignUp}
                                            className="bg-cyan-500 text-white rounded-md px-2 py-1"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                    <div className="text-xs text-red-400">{error}</div>
                                </div>
                            </div>
                        </div>
                        <div className="text-xs p-5 text-center text-gray-600">Already have an Account?</div>
                        <Link to="/login" className="w-full flex justify-center">
                            <button className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                                <span>Login</span>
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
