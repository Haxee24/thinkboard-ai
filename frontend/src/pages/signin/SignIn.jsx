import {Link} from "react-router";
import { useAuth } from "../../context/authContext";
import { useState } from "react";
import { useNavigate } from "react-router";

function SignIn() {
  const navigate = useNavigate();
  const {login} = useAuth();
  const [form, setForm] = useState({
    userid: "",
    password: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const res = await fetch("http://localhost:4000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify(form)
      });
      const data = await res.json();
      console.log(data);
      login(data.user);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="-mt-20 -mb-10 min-h-screen flex items-center justify-center text-white">
      <div className="flex w-full h-150 max-w-md md:max-w-4xl bg-[#242425] p-8 rounded-2xl shadow-lg">
        <img width={450} src="signup/hero2.png" alt="" className="hidden md:block" />
        <div className="flex flex-col justify-center px-8">
          <h2 className="text-3xl font-extrabold font-mono mb-6 text-center">
            Login
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Username */}
            <div>
              <label className="block text-sm mb-1">Username or Email</label>
              <input
                name="userid"
                required
                value={form.userid}
                onChange={(e)=> setForm({...form, userid: e.target.value})}
                type="text"
                placeholder="johndoe"
                className="w-80 px-4 py-2 rounded-lg bg-[#1a1a1b] border border-white/10 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm mb-1">Password</label>
              <input
                name="password"
                required
                type="password"
                value={form.password}
                onChange={(e) => setForm({...form, password: e.target.value})}
                placeholder="••••••••"
                className="w-full px-4 py-2 rounded-lg bg-[#1a1a1b] border border-white/10 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className=" w-full mt-4 bg-green-500 text-black font-semibold py-2 rounded-xl hover:bg-green-400 transition"
            >
              Login
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