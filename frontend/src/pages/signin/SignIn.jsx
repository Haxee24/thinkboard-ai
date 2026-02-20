import {Link} from "react-router";

function SignIn() {
  return (
    <div className="-mt-20 -mb-10 min-h-screen flex items-center justify-center text-white">
      <div className="flex w-full h-150 max-w-md md:max-w-4xl bg-[#242425] p-8 rounded-2xl shadow-lg">
        <img width={450} src="signup/hero2.png" alt="" className="hidden md:block" />
        <div className="flex flex-col justify-center px-8">
          <h2 className="text-3xl font-extrabold font-mono mb-6 text-center">
            Login
          </h2>

          <form className="space-y-4">

            {/* Username */}
            <div>
              <label className="block text-sm mb-1">Username or Email</label>
              <input
                required
                type="text"
                placeholder="johndoe"
                className="w-80 px-4 py-2 rounded-lg bg-[#1a1a1b] border border-white/10 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm mb-1">Password</label>
              <input
                required
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2 rounded-lg bg-[#1a1a1b] border border-white/10 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full mt-4 bg-green-500 text-black font-semibold py-2 rounded-xl hover:bg-green-400 transition"
            >
              Create Account
            </button>
          </form>

          {/* Footer */}
          <p className="text-sm text-center text-white/60 mt-6">
            New user?{" "}
            <span className="text-green-500 cursor-pointer hover:underline">
              <Link to="/signup">Sign up</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
export default SignIn