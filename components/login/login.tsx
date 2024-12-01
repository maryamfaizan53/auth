"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function Login() {
  const [message, setMessage] = useState("");

  const handleSignIn = async (provider: string) => {
    try {
      setMessage(`Signing in with ${provider}...`);
      await signIn(provider);
    } catch (err) {
      console.error("Sign in error:", err);
      setMessage("Error signing in. Please try again.");
    }
  };

  return (
    <div
      className="min-h-screen bg-contain bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: "url('/iphonew.JPG')", 
      }}
    >
      <div className=" bg-opacity-90 p-12 rounded-lg shadow-lg w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-6">Sign In with samad</h1>
        <div className="space-y-2">
          <button
            onClick={() => handleSignIn("github")}
            className="w-full flex items-center justify-center bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded"
          >
            <img
              src="/github-icon.png" // Replace with your image path
              alt="GitHub"
              className="w-6 h-6 mr-2"
            />
            Sign in with GitHub
          </button>
          <button
            onClick={() => handleSignIn("google")}
            className="w-full flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            <img
              src="/google-icon.png" // Replace with your image path
              alt="Google"
              className="w-6 h-6 mr-2"
            />
            Sign in with Google
          </button>
          <button
            onClick={() => handleSignIn("facebook")}
            className="w-full flex items-center justify-center bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded"
          >
            <img
              src="/facebook-icon.png" // Replace with your image path
              alt="Facebook"
              className="w-6 h-6 mr-2"
            />
            Sign in with Facebook
          </button>
        </div>
        {message && <div className="mt-4 text-blue-600">{message}</div>}
      </div>
    </div>
  );
}


// // components/login/Login.tsx

// "use client";

// import { signIn } from "next-auth/react";
// import { useState } from "react";

// export default function Login() {
//   const [message, setMessage] = useState("");

//   const handleSignIn = async (provider: string) => {
//     try {
//       setMessage(`Signing in with ${provider}...`);
//       await signIn(provider);
//     } catch (err) {
//       console.error("Sign in error:", err);
//       setMessage("Error signing in. Please try again.");
//     }
//   };

//   return (
//     <div className="text-center p-8">
//       <h1 className="text-3xl mb-6">Sign In</h1>
//       <div className="space-y-4">
//         <button
//           onClick={() => handleSignIn("github")}
//           className="w-full bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded"
//         >
//           Sign in with GitHub
//         </button>
//         <button
//           onClick={() => handleSignIn("google")}
//           className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
//         >
//           Sign in with Google
//         </button>
//         <button
//           onClick={() => handleSignIn("facebook")}
//           className="w-full bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded"
//         >
//           Sign in with Facebook
//         </button>
//       </div>
//       {message && <div className="mt-4 text-blue-600">{message}</div>}
//     </div>
//   );
// }
