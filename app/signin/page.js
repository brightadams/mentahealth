"use client"
import { signIn, signOut, useSession } from "next-auth/react";

export default function SignInPage() {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 px-6 text-center">
      <div className="bg-white rounded-xl p-6 shadow-md max-w-sm w-full">
        {session ? (
          <>
            <h2 className="text-xl font-semibold">Welcome, {session.user.name} 👋</h2>
            <img src={session.user.image} alt="Profile" className="w-16 h-16 rounded-full mt-4" />
            <p className="text-gray-600 mt-2">{session.user.email}</p>
            <button
              onClick={() => signOut()}
              className="mt-4 bg-red-500 text-white py-2 px-4 rounded-lg shadow"
            >
              Sign Out
            </button>
          </>
        ) : (
          <>
            <h2 className="text-xl font-semibold">Sign In</h2>
            <p className="text-gray-600 mt-2">Sign in with Google to continue</p>
            <button
              onClick={() => signIn("google")}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg shadow"
            >
              Sign in with Google
            </button>
          </>
        )}
      </div>
    </div>
  );
}
