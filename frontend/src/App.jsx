import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from '@clerk/clerk-react';

/**
 * Render the app heading and Clerk authentication controls that vary with the user's session.
 *
 * @returns {JSX.Element} A React element containing a welcome heading and authentication widgets: a SignInButton shown when signed out, a SignOutButton shown when signed in, and a UserButton.
 */
function App() {

  return (
    <>
      <h1>Welcome to Remote Codify</h1>
      <SignedOut>
        <SignInButton mode='modal' />
      </SignedOut>
      <SignedIn>
        <SignOutButton />
      </SignedIn>
      <UserButton />
    </>
  )
}

export default App