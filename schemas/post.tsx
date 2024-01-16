import * as z from "zod";

export const postSchema = z.object({
  title: z
    .string()
    .min(1, {
      message: "O título deve ter pelo menos 1 caractere",
    })
    .max(100, {
      message: "O título deve ter no máximo 100 caracteres",
    }),
  text: z
    .string()
    .min(1, {
      message: "O texto deve ter pelo menos 1 caractere",
    })
    .max(500, {
      message: "O texto deve ter no máximo 500 caracteres",
    }),
});
