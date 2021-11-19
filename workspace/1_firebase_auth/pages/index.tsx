import Head from 'next/head'
import { firebaseConfig } from '../lib/firebase'
import { initializeApp } from 'firebase/app'
export const app = initializeApp(firebaseConfig)
import { useRouter } from 'next/router'
import { getFirestore } from "firebase/firestore"

import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { doc, setDoc } from 'firebase/firestore'
const db = getFirestore();

const auth = getAuth()

export const Home = (): JSX.Element => {
  const router = useRouter()
  const [user, setUser] = useState<any>('')

  useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, (u) => {
      if (u) {
        const uid = u.uid
        setUser(user)
      } else {
        router.push('/login')
      }
    })
  }, [])

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hello {user?.displayName}</h1>
      <button
        onClick={() => {
          signOut(auth)
            .then(() => {
              // Sign-out successful.
            })
            .catch((error) => {
              // An error happened.
            })
        }}
      >
        Logout
      </button>
      <button
        onClick={async () => {
          // Add a new document in collection "cities"
          await setDoc(doc(db, 'cities', 'LA'), {
            name: 'Los Angeles',
            state: 'CA',
            country: 'USA',
          })
        }}
      >Dodaj Los Angeles</button>
    </div>
  )
}

export default Home
