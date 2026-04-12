import { useRecoilState } from "recoil";
import { userState } from "../userState";
import { useState } from "react";

function Login() {
  const [user, setUser] = useRecoilState(userState);
  const [name, setName] = useState("");

  const login = () => {
    setUser({ username: name });
    setName("");
  };

  return (
    <div>
      <h3>Login</h3>

      {!user && (
        <>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter username"
          />
          <button onClick={login}>Login</button>
        </>
      )}
    </div>
  );
}

export default Login;