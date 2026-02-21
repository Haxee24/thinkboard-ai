import { useAuth } from "../../context/authContext"

function Profile() {
  const { user } = useAuth();
  console.log(user);
  return (
    <div>
      <h1>Profile</h1>
      <p>Welcome to your profile page!</p>
      <p>{user.fullname}</p>
      <p>{user.email}</p>
    </div>
  )
}

export default Profile