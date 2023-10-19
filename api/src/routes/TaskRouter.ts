// import express from "express";
// import {TaskDbModel, possible_programming_languages} from "../models/TaskModel";
// import {z} from "zod";
// import {
//   is_mongo_model_valid,
//   validate_req_schema,
//   z_id_in_params_req,
//   z_string_required_non_empty,
// } from "../utils/validation";
// import {unable_to_find_id, unable_to_validate_mongo_model} from "../utils/responses";
//
// const router = express.Router();
//
// // Get all
// router.get("/task", async (req, res) => {
//   const tasks = await TaskDbModel.find({});
//   return res.status(200).send({tasks: tasks});
// });
//
// // Get by id
// router.get("/task/:id", validate_req_schema(z_id_in_params_req), async (req, res) => {
//   const task = await TaskDbModel.findById(req.params.id);
//   if (task == null) {
//     return unable_to_find_id(res);
//   }
//   return res.status(200).send({task: task});
// });
//
// // Create new
// const task_create_req = z.object({
//   body: z
//     .object({
//       title: z_string_required_non_empty("title"),
//       programming_language: z.enum(possible_programming_languages),
//       description: z_string_required_non_empty("description"),
//       default_editor_value: z_string_required_non_empty("default_editor_value"),
//       visible_tests: z_string_required_non_empty("visible_tests"),
//       hidden_tests: z_string_required_non_empty("hidden_tests"),
//     })
//     .required(),
// });
// router.post("/task", validate_req_schema(task_create_req), async (req, res) => {
//   const new_task = new TaskDbModel({
//     title: req.body.title,
//     programming_language: req.body.programming_language,
//     description: req.body.description,
//     default_editor_value: req.body.default_editor_value,
//     visible_tests: req.body.visible_tests,
//     hidden_tests: req.body.hidden_tests,
//   });
//   if (!(await is_mongo_model_valid(new_task))) {
//     return unable_to_validate_mongo_model(res);
//   }
//   await new_task.save();
//
//   return res.status(201).send({new_task: new_task});
// });
//
// // Update by id
// const task_update_req = task_create_req.merge(z_id_in_params_req);
// router.post("/task/:id", validate_req_schema(task_update_req), async (req, res) => {
//   const task_to_update = await TaskDbModel.findById(req.params.id);
//   if (task_to_update == null) {
//     return unable_to_find_id(res);
//   }
//
//   task_to_update.title = req.body.title;
//   task_to_update.programming_language = req.body.programming_language;
//   task_to_update.description = req.body.description;
//   task_to_update.default_editor_value = req.body.default_editor_value;
//   task_to_update.visible_tests = req.body.visible_tests;
//   task_to_update.hidden_tests = req.body.hidden_tests;
//
//   if (!(await is_mongo_model_valid(task_to_update))) {
//     return unable_to_validate_mongo_model(res);
//   }
//   await task_to_update.save();
//
//   return res.status(200).send({updated_task: task_to_update});
// });
//
// // Delete by id
// router.delete("/task/:id", validate_req_schema(z_id_in_params_req), async (req, res) => {
//   const result = await TaskDbModel.findByIdAndDelete(req.params.id);
//   if (result == null) {
//     return unable_to_find_id(res);
//   }
//
//   return res.status(204).send();
// });
//
// export {router as TaskRouter};
//
