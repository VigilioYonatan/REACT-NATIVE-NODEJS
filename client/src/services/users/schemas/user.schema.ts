import * as z from 'zod';
import {emailValid} from '../../../utils/helper.util';
export const user = z
  .object({
    id: z.string(),
    nombre: z.string().min(3).max(20),
    email: z.string().refine((email: string) => emailValid(email), {
      message: 'Correo no válido',
    }),
    password: z.string().min(3).max(20),
    edad: z
      .number()
      .refine(val => val > 10, {message: 'minimo 10 de edad'})
      .refine(val => val < 200, {message: 'máximo 200 edad'}),
  })
  .strict({message: 'Este campo no está permitido'});

export type User = z.infer<typeof user>;

export const userCreateSchema = user.omit({id: true});
export type UserCreateSchema = z.infer<typeof userCreateSchema>;
