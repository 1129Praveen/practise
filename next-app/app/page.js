"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function Page() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg">Loading…</p>
      </div>
    );
  }

  if (!session?.user) {
    return (
      <div className="flex items-center justify-center h-screen">
        <button
          onClick={() => signIn("authaction")}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg"
        >
          Login with AuthAction
        </button>
      </div>
    );
  }

  return <Dashboard user={session.user} onSignOut={() => signOut()} />;
}

function Dashboard({ user, onSignOut }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl text-black font-bold">My Dashboard</h1>
          <button
            onClick={onSignOut}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg"
          >
            Sign Out
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-black">Welcome back, {user.name}</h2>
          <p className="text-black">Your email: {user.email}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-lg text-black font-medium mb-2">Profile</h3>
            <p className="text-gray-700">View and edit your profile information.</p>
            <Link href="/" className="mt-4 inline-block text-blue-600 hover:underline">
              Go to Profile →
            </Link>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-lg text-black font-medium mb-2">Settings</h3>
            <p className="text-gray-700">Manage your account settings and preferences.</p>
            <Link href="/" className="mt-4 inline-block text-blue-600 hover:underline">
              Go to Settings →
            </Link>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-lg text-black font-medium mb-2">Analytics</h3>
            <p className="text-gray-700">See a snapshot of your usage and stats.</p>
            <Link href="/" className="mt-4 inline-block text-blue-600 hover:underline">
              View Analytics →
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
