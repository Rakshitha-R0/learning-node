import JOI from 'joi';

export const registerSchema = JOI.object({
    username: JOI.string().required().min(4).max(20),
    email: JOI.string().required().email(),
    password: JOI.string().required().min(6),
    confirmPassword: JOI.ref('password'),
})

export const loginSchema = JOI.object({
    email: JOI.string().required().email(),
    password: JOI.string().required().min(6)
})