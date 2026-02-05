import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left Side – Branding / Info */}
      {/* Left Side – Branding / Info with Animation */}
      <div className="relative hidden lg:flex flex-col justify-center items-center overflow-hidden bg-gradient-to-br from-indigo-600 to-purple-700 text-white p-10">
        {/* Animated gradient blobs */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-400/30 rounded-full blur-3xl animate-floatSlow" />
        <div className="absolute top-40 -right-20 w-96 h-96 bg-indigo-400/30 rounded-full blur-3xl animate-floatMedium" />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-pink-400/20 rounded-full blur-3xl animate-floatFast" />

        {/* Content */}
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome back 👋</h1>
          <p className="text-lg text-white/90 max-w-md">
            Sign in to continue learning with AI-powered study material, smart
            notes, and personalized content.
          </p>

          <div className="mt-10 text-sm text-white/70">
            © {new Date().getFullYear()} AI LMS. All rights reserved.
          </div>
        </div>
      </div>

      {/* Right Side – Clerk Sign In */}
      {/* Right Side – Clerk Sign In with background animation */}

      {/* Right Side – Clerk Sign In with background animation */}
      <div className="relative flex items-center justify-center p-6 overflow-hidden bg-slate-50 w-full">
        {/* Animated background blobs */}
        <div className="absolute -top-20 -left-20 w-full h-80 bg-indigo-300/30 rounded-full blur-3xl animate-floatSlow" />
        <div className="absolute top-40 -right-20 w-full h-80 bg-purple-300/30 rounded-full blur-3xl animate-floatMedium" />
        <div className="absolute bottom-10 left-1/3 w-full h-72 bg-pink-300/20 rounded-full blur-3xl animate-floatFast" />

        {/* Clerk SignIn only */}
        <div className="relative z-10 w-full max-w-md">
          <SignIn
            appearance={{
              variables: {
                colorPrimary: "#4f46e5",
                borderRadius: "0.75rem",
              },
              elements: {
                card: "shadow-xl backdrop-blur-xl bg-white/90 border border-white/40",
                headerTitle: "text-xl font-semibold",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
