import { useState } from "react";
import { ChangeEvent, Dispatch, ReactNode, SetStateAction } from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";

interface Props {
  children: ReactNode;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

const TextField = (props: Props) => {
  const isInvalid = props.value === "";
  const [active, setActive] = useState<boolean>(false);

  return (
    <FormControl isInvalid={isInvalid && active} isRequired>
      <FormLabel>{props.children}</FormLabel>
      <Input
        value={props.value}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          props.setValue(e.target.value);
          setActive(true);
        }}
      />
    </FormControl>
  );
};

export default TextField;
