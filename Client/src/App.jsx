import { SignedIn, SignedOut, SignInButton, SignOutButton } from '@clerk/clerk-react'
import './App.css'

function App() {
  return (
    <>
      <h1 >Welcome to the Talent-IQ platform</h1>
      <SignedOut>
        <SignInButton mode="modal">
          <button className=''>Sign up please</button>
        </SignInButton>  
      </SignedOut>

      <SignedIn>
        <SignOutButton/>
      </SignedIn>
      

    </>
  )
}

export default App
