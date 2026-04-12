import { useRecoilState } from "recoil";
import { userState } from "../userState";

function Logout() {
  const [user, setUser] = useRecoilState(userState);

  if (!user) return null;

  return (
    <div>
      <button onClick={() => setUser(null)}>Logout</button>
    </div>
  );
}

export default Logout;