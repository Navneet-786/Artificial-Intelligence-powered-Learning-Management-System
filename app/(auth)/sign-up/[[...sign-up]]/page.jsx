import { SignUp } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left Side – Image + Overlay + Animation */}
      <div className="relative hidden lg:flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/3d-cartoon-back-school.jpg" // 👉 public/auth-signup.jpg
          alt="AI Learning"
          fill
          className="object-cover"
          priority
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Animated blobs */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-indigo-400/30 rounded-full blur-3xl animate-floatSlow" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/30 rounded-full blur-3xl animate-floatMedium" />

        {/* Content */}
        <div className="relative z-10 text-center text-white p-10">
          <h1 className="text-4xl font-bold mb-4">Start your journey </h1>
          <p className="text-lg text-white/90 max-w-md">
            Join AI LMS and unlock personalized learning, smart notes, and
            AI-powered study material.
          </p>

          <div className="mt-10 text-sm text-white/70">
            Learn smarter. Learn faster.
          </div>
        </div>
      </div>

      {/* Right Side – Clerk Sign Up with animated background */}
      <div className="relative flex items-center justify-center p-6 overflow-hidden bg-slate-50 w-full">
        {/* Background blobs */}
        <div className="absolute -top-20 -left-20 w-full h-80 bg-indigo-300/30 rounded-full blur-3xl animate-floatSlow" />
        <div className="absolute top-40 -right-20 w-full h-80 bg-purple-300/30 rounded-full blur-3xl animate-floatMedium" />
        <div className="absolute bottom-10 left-1/3 w-full h-72 bg-pink-300/20 rounded-full blur-3xl animate-floatFast" />

        {/* Clerk SignUp */}
        <div className=" z-10  max-w-[100%] ">
          <SignUp
            appearance={{
              variables: {
                colorPrimary: "#4f46e5",
                borderRadius: "0.75rem",
              },
              elements: {
                card: "shadow-2xl backdrop-blur-xl bg-white/95 border border-white/50",
                headerTitle: "text-xl font-semibold",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
