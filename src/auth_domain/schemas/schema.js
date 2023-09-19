import Joi from "joi";


export const registerValidator = (data) => {
  const rule = Joi.object({
    name: Joi.string().min(6).max(225).required(),
    email: Joi.string().min(6).max(225).required(),
    password: Joi.string()
      .pattern(new RegExp("^[a-zA-Z0-9]{6,20}$"))
      .required(),
  });
  return rule.validate(data);
};
