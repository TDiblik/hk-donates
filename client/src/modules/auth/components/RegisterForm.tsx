import { useState } from "react";
import { Button, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import TextField from "./TextField";
import { RegisterProps } from "./types";

import styles from "./LoginForm.module.css";

const RegisterForm = () => {
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
            email: formData.email,
            password: formData.password,
            passwordCheck: formData.passwordCheck,
          }
        : {
            companyName: formData.companyName,
            companyIco: formData.companyIco,
            email: formData.email,
            password: formData.password,
            passwordCheck: formData.passwordCheck,
          };

    if (radioValue === "1") {
      const res = fetch("/api/v1/public/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          individual_title_before_name: formData.individualTitle,
          individual_name: formData.individualFirstName,
          individual_surname: formData.individualSurname,
          individual_title_after_name: formData.individualTitleAfterName,
          email: formData.email,
          password: formData.password,
          is_company: false,
        }),
      });
    } else {
      const res = fetch("/api/v1/public/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          company_name: formData.companyName,
          company_ico: formData.companyIco,
          email: formData.email,
          password: formData.password,
          is_company: true,
        }),
      });
    }
  };

  const updateField = (fieldName: keyof RegisterProps, value: any) => {
    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Registrace</h1>
      <div className={styles.content}>
        <div className={styles.radioItems}>
          <RadioGroup onChange={setRadioValue} value={radioValue}>
            <Stack direction="row" justify="center" gap={120}>
              <Radio value="1">Jednotlivec</Radio>
              <Radio value="2">Firma</Radio>
            </Stack>
          </RadioGroup>
        </div>
        <form>
          {radioValue === "1" ? (
            <>
              <div className={styles.horizontalFormItem}>
                <TextField
                  placeholder="Titul"
                  value={formData.individualTitle}
                  setValue={(value) => updateField("individualTitle", value)}
                />
                <TextField
                  placeholder="Jméno"
                  value={formData.individualFirstName}
                  setValue={(value) =>
                    updateField("individualFirstName", value)
                  }
                />
              </div>
              <div className={styles.horizontalFormItem}>
                <TextField
                  placeholder="Příjmení"
                  value={formData.individualSurname}
                  setValue={(value) => updateField("individualSurname", value)}
                />
                <TextField
                  placeholder="Titul"
                  value={formData.individualTitleAfterName}
                  setValue={(value) =>
                    updateField("individualTitleAfterName", value)
                  }
                />
              </div>
            </>
          ) : (
            <>
              <div className={styles.horizontalFormItem}>
                <TextField
                  placeholder="Název firmy"
                  value={formData.companyName}
                  setValue={(value) => updateField("companyName", value)}
                />
                <TextField
                  placeholder="IČO firmy"
                  value={formData.companyIco}
                  setValue={(value) => updateField("companyIco", value)}
                />
              </div>
            </>
          )}
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
          <TextField
            placeholder="Heslo znovu"
            type="password"
            value={formData.passwordCheck}
            setValue={(value) => updateField("passwordCheck", value)}
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
              Registrovat
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
