import { Button } from '@chakra-ui/react';
import { Navbar } from '../components';
import { signIn, signOut, useSession, SessionContextValue } from 'next-auth/react';

export function Index() {
  const { data: session, status } = useSession();
  return (
    <div id="welcome">
      <Navbar />
      <h1 className="text-center text-5xl font-bold text-teal-700 mt-20">
        <span> Hello {session?.user?.name || 'There!'} </span>
        Welcome Doodllr 👋
      </h1>
      <div className="text-center my-5">
        {!session && (
          <>
            <p className="text-3xl text-red-500 font-medium">Not Logged In</p>
            <Button my="2" onClick={() => signIn()} colorScheme="green">
              Sign In
            </Button>
          </>
        )}
        {session && (
          <>
            <p className="text-3xl text-green-500 font-medium">Hello {session?.user?.email}</p>
            <Button my="2" onClick={() => signOut()} colorScheme="red">
              Sign Out
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

export default Index;
