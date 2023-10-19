import { useState } from "react";
import { Button, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import TextField from "./TextField";
import { LoginProps, RegisterProps } from "./types";

import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const [formData, setFormData] = useState<RegisterProps>({
    email: "",
    password: "",
    passwordCheck: "",
    individualTitle: "",
    individualFirstName: "",
    individualSurname: "",
    individualTitleAfterName: "",
    companyName: "",
    companyIco: "",
  });
  const [radioValue, setRadioValue] = useState<string>("1");

  const handleSubmit = async () => {
    if (!formData) return;

    const data =
      radioValue === "1"
        ? {
            individualTitle: formData.individualTitle,
            individualName: formData.individualFirstName,
            individualSurname: formData.individualSurname,
            individualTitleAfterName: formData.individualTitleAfterName,
          }
        : {
            companyName: formData.companyName,
            companyIco: formData.companyIco,
          };

    const res = fetch("/api/v1/public/auth/login", {
      method: "POST",
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
        ...data,
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

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Login</h1>
      <div className={styles.content}>
        <RadioGroup onChange={setRadioValue} value={radioValue}>
          <Stack direction="row">
            <Radio value="1">Jednotlivec</Radio>
            <Radio value="2">Firma</Radio>
          </Stack>
        </RadioGroup>
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
            <Button onClick={handleSubmit} variant="outline">
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
