import * as yup from 'yup';

export const cerealValidationSchema = yup.object().shape({
  carga: yup.string().required(),
});
