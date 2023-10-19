import { useEffect, useState } from "react";
import TextField from "./TextField";

import styles from "./LoginForm.module.css";
import { Button } from "@chakra-ui/react";

const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async () => {
    const res = fetch("/api/v1/public/auth/login", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    console.log(res);
  };

  return (
    <div className={styles.container}>
      <form>
        <TextField value={email} setValue={setEmail}>
          Email
        </TextField>
        <TextField value={password} setValue={setPassword}>
          Password
        </TextField>
        <Button onClick={handleSubmit}>Submit</Button>
      </form>
    </div>
  );
};

export default LoginForm;
