"use client";
import Input from "@/components/form/input/InputField";
import Label from "@/components/form/Label";
import Button from "@/components/ui/button/Button";
import { EyeCloseIcon, EyeIcon } from "@/icons";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter for redirection

export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter(); // Initialize router for redirection

  // Static credentials for validation
  const validEmail = "cutepanda@admin.com";
  const validPassword = "Panda@superadmim";

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Check if the provided credentials match the static ones
    if (email === validEmail && password === validPassword) {
      // If credentials are correct, set login flag in localStorage
      localStorage.setItem("isLoggedIn", "true");
      
      // Redirect to dashboard
      router.push("/");
    } else {
      // If credentials are incorrect, show error message
      setErrorMessage("Oops! 😕 Incorrect Email or Password 🔑❌");
    }
  };

  return (
    <div className="flex flex-col flex-1 lg:w-1/2 w-full">
      {/* <div className="w-full max-w-md sm:pt-10 mx-auto mb-5">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
        >
          <ChevronLeftIcon />
          Back to dashboard
        </Link>
      </div> */}
      <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
        <div>
          <div className="mb-5 sm:mb-8">
            <Label>
            Login on Panda Server 🐼🔐
Ready to connect? Log in now to access the Panda Server and start your adventure! 🚀💻 
            </Label>
            <p className="text-sm text-gray-500 dark:text-gray-400">
            Hey, Beautiful Princess 👑✨
Welcome to your server! 🌸 I hope you&apos;re doing wonderfully. 🌟 I wish you love and joy as you explore this special place. 💖

This is the server of the cutest person in the world, Miss Super Admin Panda 🐼🌸. Please enter your login credentials 🔑 to visit your very own adorable server! 💻🎉

Enjoy your time here💕!

            </p>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <Label>
                  Please Enter Your Server Email 📧 <span className="text-error-500">*</span>{" "}
                  </Label>
                  <Input
                    placeholder="Think.."
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <Label>
                  Please Enter Your Server Password 🔒 <span className="text-error-500">*</span>{" "}
                  </Label>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password🔒"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
                    >
                      {showPassword ? (
                        <EyeIcon className="fill-gray-500 dark:fill-gray-400" />
                      ) : (
                        <EyeCloseIcon className="fill-gray-500 dark:fill-gray-400" />
                      )}
                    </span>
                  </div>
                </div>
                {/* <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Checkbox checked={isChecked} onChange={setIsChecked} />
                    <span className="block font-normal text-gray-700 text-theme-sm dark:text-gray-400">
                      Keep me logged in
                    </span>
                  </div>
                  <Link
                    href="/reset-password"
                    className="text-sm text-brand-500 hover:text-brand-600 dark:text-brand-400"
                  >
                    Forgot password?
                  </Link>
                </div> */}
                <div>
                  <Button className="w-full" size="sm">
                  Enter the Panda Server 🐼✨
                  Step into your cute and cozy space! 🏰💻 Let the adventure begin! 🎉
                  </Button>
                </div>
                {errorMessage && (
                  <p className="text-sm text-red-500 text-center mt-2">{errorMessage}</p>
                )}
              </div>
            </form>

            {/* <div className="mt-5">
              <p className="text-sm font-normal text-center text-gray-700 dark:text-gray-400 sm:text-start">
                Don&apos;t have an account? {""}
                <Link
                  href="/signup"
                  className="text-brand-500 hover:text-brand-600 dark:text-brand-400"
                >
                  Sign Up
                </Link>
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}