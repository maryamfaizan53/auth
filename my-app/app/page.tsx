import { SessionWrapper } from "./components/sessionwrapper";
import Login from "./components/login/login";
// import SignOut from './components/login/SignOut';
import  getServerSession  from "next-auth";
import { authOptions } from "../app/api/auth/[...nextauth]/route";



export default async function LoginPage() {
  const session = await getServerSession(authOptions);

  return (
    <SessionWrapper>
      <Login />
    </SessionWrapper>
  );
}

// import Login from "./components/login/login";
// import { SessionWrapper } from "./components/sessionwrapper";


// export default async function Home() {
//   return (
//     <SessionWrapper>
//       <Login />
//     </SessionWrapper>
//   );
// }
