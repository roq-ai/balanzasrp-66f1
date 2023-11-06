import * as yup from 'yup';

export const transportistaValidationSchema = yup.object().shape({
  razonsocial: yup.string().required(),
});
