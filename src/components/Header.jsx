import { useRecoilValue } from "recoil";
import { userState } from "../userState";

function Header() {
  const user = useRecoilValue(userState);

  return (
    <div>
      <h2>Header</h2>
      <p>User: {user ? user.username : "Guest"}</p>
    </div>
  );
}

export default Header;