import * as yup from 'yup';

const schema = yup.object.shape({
    name: yup
        .string()
        .required('Name required')
        .min(2, 'name must be at least 2 characters'),
        size: yup.string(),
        pepperoni: yup.string(),
        pesto: yup.string(),
        sausage: yup.string(),
        pineapple: yup.string(),
        canadianBacon: yup.string(),
        jalapeno: yup.string(),
        specialText: yup.string(),
})

export default schema