import React, { useEffect, useState } from 'react'
import { firebaseConfig } from '../lib/firebase'
import { initializeApp } from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

type Props = {}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)

const register: React.FC<Props> = ({}): JSX.Element => {
  const auth = getAuth()
  const [pass, setPass] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {}, [])

  const handleForm = () => {
    createUserWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        console.log(user)

        // ...
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.warn(errorMessage)

        // ..
      })
  }

  return (
    <section>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleForm()
        }}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.currentTarget.value)
          }}
        />
        <input
          type="password"
          value={pass}
          onChange={(e) => {
            setPass(e.currentTarget.value)
          }}
        />
        <button>Submit</button>
      </form>
    </section>
  )
}

export default register
