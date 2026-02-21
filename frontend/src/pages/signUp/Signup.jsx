import { Link } from "react-router";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router";

function Signup() {
  const [form, setForm] = useState({
    fullname: "",
    username: "",
    email: "",
    password: ""
  });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const res = await fetch("http://localhost:4000/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      toast.success("Account created successfully!");
      navigate("/signin");
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="-mt-20 -mb-10 min-h-screen flex items-center justify-center text-white">
      <div className="flex h-150 w-full max-w-md md:max-w-4xl bg-[#0f0c0c] p-8 rounded-2xl shadow-lg">
        <img width={450} src="signup/hero5.png" alt="" className="hidden md:block" />
        <div className="flex flex-col justify-center px-8">
          <h2 className="text-3xl font-extrabold font-mono mb-6 text-center">
            Sign Up
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-sm mb-1">Full Name</label>
              <input
                name="fullname"
                value={form.fullname}
                onChange={(e)=> setForm({...form, fullname: e.target.value})}
                required
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-2 rounded-lg bg-[#1a1a1b] border border-white/10 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Username */}
            <div>
              <label className="block text-sm mb-1">Username</label>
              <input
                name="username"
                required
                value={form.username}
                onChange={(e)=> setForm({...form, username: e.target.value})}
                type="text"
                placeholder="johndoe"
                className="w-80 px-4 py-2 rounded-lg bg-[#1a1a1b] border border-white/10 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                name="email"
                required
                value={form.email}
                onChange={(e)=> setForm({...form, email: e.target.value})}
                type="email"
                placeholder="john@example.com"
                className="w-full px-4 py-2 rounded-lg bg-[#1a1a1b] border border-white/10 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm mb-1">Password</label>
              <input
                name="password"
                required
                value={form.password}
                onChange={(e) => setForm({...form, password: e.target.value})}
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
            Already have an account?{" "}
            <span className="text-green-500 cursor-pointer hover:underline">
              <Link to="/signin">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup