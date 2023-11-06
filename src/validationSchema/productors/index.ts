import * as yup from 'yup';

export const productorValidationSchema = yup.object().shape({
  razonsocial: yup.string().required(),
});
