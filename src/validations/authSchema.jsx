import * as yup from 'yup'
 export const registerSchema=yup.object({
    fullName:yup.string().required("fullName is required").min(3,"fullName must be contain at least 3 char"),
    userName:yup.string().required("userName is required").min(3,"userName must be contain at least 3 char"),
    email:yup.string().required("Email is required").email("Invalid Email").min(8).max(30),
    password:yup.string().required("Password is required").min(6,"password muust be contain at least 6 char")
    .matches(/[A-Z]/,"Password must be contain upper letter")
    .matches(/[a-z]/,"Password must be contain lower letter")
    .matches(/[0-9]/,"Password must be contain number"),
    phoneNumber:yup.string().required("PhoneNumber is required")
    .matches(/^05\d{8}$/,"phoneNumber must be start in 05 and must be 10digit")
})


export const loginSchema=yup.object({
    
  
    email:yup.string().required("Email is required").email("Invalid Email").min(8).max(30),
    password:yup.string().required("Password is required").min(6,"password muust be contain at least 6 char")
    .matches(/[A-Z]/,"Password must be contain upper letter")
    .matches(/[a-z]/,"Password must be contain lower letter")
    .matches(/[0-9]/,"Password must be contain number"),
    
})

export const resetPassSchema=yup.object({
    
  code:yup.string().required("Code is required").matches(/^\d{4}$/,"Code must contain exactly 4 digits"),
    email:yup.string().required("Email is required").email("Invalid Email").min(8).max(30),
    newPassword:yup.string().required("Password is required").min(6,"password muust be contain at least 6 char")
    .matches(/[A-Z]/,"Password must be contain upper letter")
    .matches(/[a-z]/,"Password must be contain lower letter")
    .matches(/[0-9]/,"Password must be contain number"),
    
})

