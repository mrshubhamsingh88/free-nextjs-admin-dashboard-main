"use client";
import Checkbox from "@/components/form/input/Checkbox";
import Input from "@/components/form/input/InputField";
import Label from "@/components/form/Label";
import Button from "@/components/ui/button/Button";
import { EyeCloseIcon, EyeIcon } from "@/icons";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [greeting, setGreeting] = useState("");
  const [showOtpModal, setShowOtpModal] = useState(true);
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState("");
  const router = useRouter();

  // Function to dynamically change the greeting based on India Time
  useEffect(() => {
    const getGreeting = () => {
      const indiaTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
      const hours = new Date(indiaTime).getHours();

      if (hours >= 5 && hours < 12) return "Good Morning 🌅";
      if (hours >= 12 && hours < 17) return "Good Afternoon ☀️";
      if (hours >= 17 && hours < 21) return "Good Evening 🌆";
      return "Good Evening 🌙";
    };

    setGreeting(getGreeting());
  }, []);
  const handleOTPSubmit = (e) => {
    e.preventDefault();
    if (otp === "0824") {
      setShowOtpModal(false);
      setOtpError("");
    } else {
      setOtpError("❌ Incorrect OTP. Try again!");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage("⚠️ Please fill in both fields!");
      return;
    }

    const validEmail = "cutepanda@admin.com";
    const validPassword = "Panda@superadmin";

    if (email === validEmail && password === validPassword) {
      localStorage.setItem("isLoggedIn", "true");
      router.push("/");
    } else {
      setErrorMessage("Oops! 😕 Incorrect Email or Password 🔑❌");
    }
  };
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col flex-1 lg:w-1/2 w-full"
      >
        {/* Logo Animation */}
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center mb-5"
        >
          <Image src="/images/logo/cute-dancing-panda.gif" alt="Cute Panda" width={100} height={100} />
        </motion.div>

        {/* Dynamic Greeting */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-center text-xl font-semibold text-gray-700 mb-5"
        >
          {greeting}, Cute Panda! 🐼✨
        </motion.div>

        <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
          {/* Welcome Message */}
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-5 sm:mb-8 text-center"
          >
            <span className="text-gray-700 dark:text-white text-lg font-medium">
              Ready to embark on your next adventure?
              <span className="text-blue-500 font-semibold"> Log in now</span> and unlock the magic! ✨💻
            </span>
            {/* <Label className="text-3xl font-extrabold text-pink-600 animate-pulse">
            🚀 Welcome to <span className="text-purple-700">Panda Server</span> 🐼🔐  
            <br />
            
          </Label> */}

            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              Hey, Beautiful Princess 👑✨
              Welcome to your server! 🌸 I hope you're doing wonderfully. 🌟 I wish you love and joy as you explore this special place. 💖
              <br /><br />
              This is the server of the cutest person in the world, Miss Super Admin Panda 🐼🌸. Please enter your login credentials 🔑 to visit your very own adorable server! 💻🎉
              <br /><br />
              Enjoy your time here💕!
            </p>
          </motion.div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <motion.div whileHover={{ scale: 1.02 }} className="transition-transform">
              <Label htmlFor="email" className="text-lg">
                Please Enter Your Server Email 📧 <span className="text-error-500">*</span>
              </Label>
              <Input
                id="email"
                placeholder="Enter your email..."
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </motion.div>

            {/* Password Input */}
            <motion.div whileHover={{ scale: 1.02 }} className="relative transition-transform">
              <Label htmlFor="password" className="text-lg">
                Please Enter Your Server Password 🔒 <span className="text-error-500">*</span>
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pr-12" // Ensures space for the eye icon inside input
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                >
                  {showPassword ? (
                    <EyeIcon className="w-6 h-6 fill-gray-500 dark:fill-gray-400" />
                  ) : (
                    <EyeCloseIcon className="w-6 h-6 fill-gray-500 dark:fill-gray-400" />
                  )}
                </span>
              </div>
            </motion.div>


            {/* Submit Button */}
            <div>
              <Button className="w-full" size="sm">
                Enter the Panda Server 🐼✨
                Step into your cute and cozy space! 🏰💻 Let the adventure begin! 🎉
              </Button>
            </div>

            {/* Error Message */}
            {errorMessage && <p className="text-sm text-red-500 text-center mt-2">{errorMessage}</p>}
          </form>
        </div>
      </motion.div>
      {/* OTP Modal */}
      {
        showOtpModal && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-8 rounded-2xl shadow-2xl max-w-sm w-full text-center"
            >
              <Image
                src="/images/logo/cute-dancing-panda.gif"
                width={60}
                height={60}
                alt="Panda"
                className="mx-auto mb-4"
              />
              <h2 className="text-xl font-bold text-gray-800 mb-3">🔐 Enter OTP</h2>
              <p className="text-sm text-gray-500 mb-5">
                A magical code has been sent to your heart 💖. Please enter it below!
              </p>
              <form onSubmit={handleOTPSubmit} className="space-y-4">
                <Input
                  type="text"
                  maxLength={4}
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter OTP"
                  className="text-center text-lg tracking-widest"
                />
                {otpError && <p className="text-sm text-red-500">{otpError}</p>}
                <Button type="submit" className="w-full bg-pink-600 hover:bg-pink-700">
                  Verify & Begin Your Journey 🐼✨
                </Button>
              </form>
            </motion.div>
          </div>
        )
      }
    </>
  );
}