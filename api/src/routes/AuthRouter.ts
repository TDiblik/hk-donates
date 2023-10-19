import express from "express";
import {z} from "zod";
import {validate_req_schema, z_string_required_non_empty} from "../utils/validation";

const router = express.Router();

const login_req_schema = z.object({
  body: z
    .object({
      email: z_string_required_non_empty("email").email({
        message: "email field must be formatted as an email address.",
      }),
      password: z_string_required_non_empty("password"),
    })
    .required(),
});
router.post("/auth/login", validate_req_schema(login_req_schema), async (req, res) => {
  const {email, password} = req.body;
  if (email == "abc@seznam.cz" && password == "123") {
    return res.status(200).send({
      user_id: 1,
      email: "abc@seznam.cz",
      is_company: true,
    });
  } else if (email == "bca@seznam.cz" && password == "123") {
    return res.status(200).send({
      user_id: 2,
      email: "bca@seznam.cz",
      is_company: false,
    });
  }
  return res.status(400).send({
    msg: "user not found",
  });
});

router.post("/auth/register", validate_req_schema(login_req_schema), async (req, res) => {
  const {email, password} = req.body;
  if ((email == "abc@seznam.cz" && password == "123") || (email == "bca@seznam.cz" && password == "123")) {
    return res.status(409).send({
      msg: "user already exists",
    });
  }
  return res.status(201).send({});
});

export {router as AuthRouter};
