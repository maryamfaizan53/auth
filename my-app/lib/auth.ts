import  getServerSession  from "next-auth";
import { authOptions } from "../app/api/auth/[...nextauth]/route";

export const auth = async () => {
  return getServerSession(authOptions);
};




// // my-app/lib/auth.ts
// import  NextAuth from 'next-auth';
// import GitHubProvider from 'next-auth/providers/github';
// import GoogleProvider from 'next-auth/providers/google'


//  export const {handlers, auth, signIn , signOut}= NextAuth({
//     providers:[
//         GitHubProvider({
//             clientId:process.env.GITHUB_CLIENT_ID as string,
//             clientSecret:process.env.GITHUB_CLIENT_SECRET as string,
//         }),
//         GoogleProvider({
//             clientId:process.env.GOOGLE_CLIENT_ID as string,
//             clientSecret:process.env.GOOGLE_CLIENT_SECRET as string,
//         }),
      
      
    
//     ],
//     secret: process.env.NEXTAUTH_SECRET,
//   pages: {
//     signIn: '/login',
//   },
//     } 




   