import * as yup from "yup";

export default yup.object().shape({
  name: yup.string().required().label('Name'),
  email: yup.string().required().email().label('Email'),
  phone: yup.string().required().length(12).matches(/^\d+$/, 'Only digits').label('Phone'),
});