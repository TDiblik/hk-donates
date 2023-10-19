import { useState } from "react";
import { Button, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import TextField from "./TextField";
import { LoginProps, RegisterProps } from "./types";
import { useNavigate } from "react-router-dom";

import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const [formData, setFormData] = useState<LoginProps>({
    email: "",
    password: "",
  });

  const handleSubmit = async () => {
    if (!formData) return;

    const res = fetch("/api/v1/public/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
      }),
    });

    console.log(res);
  };

  const updateField = (fieldName: keyof LoginProps, value: any) => {
    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
  };

  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Login</h1>
      <div className={styles.content}>
        <form>
          <TextField
            placeholder="Email"
            value={formData.email}
            setValue={(value) => updateField("email", value)}
          />
          <TextField
            placeholder="Heslo"
            type="password"
            value={formData.password}
            setValue={(value) => updateField("password", value)}
          />
          <div className={styles.formFooter}>
            <Button onClick={() => navigate("/")} variant="outline">
              Zpět
            </Button>
            <Button
              className={styles.actionButton}
              background="#0A2F83"
              color="white"
              onClick={handleSubmit}
            >
              Přihlásit se
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
