import { xata } from "$lib/xata";
import { fail, type Actions, redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { superValidate, setError } from "sveltekit-superforms/server";
import { RegisterSchema } from "$lib/schema";

export const load: PageServerLoad = async (event) => {
  const sesion = await event.locals.getSession();
  if (sesion) {
    redirect(307, "/");
  }
  return {
    form: await superValidate(RegisterSchema),
  };
};

export const actions: Actions = {
  default: async (event) => {
    const form = await superValidate(event, RegisterSchema);
    if (!form.valid) {
      return fail(400, {
        form,
      });
    }
    const user = await xata.db.nextauth_users
      .filter({
        email: form.data.email,
      })
      .getFirst();

    if (user) {
      return setError(form, "email", "E-mail already exists.");
    }

    await xata.db.nextauth_users.create({
      name: form.data.name,
      email: form.data.email,
    });
    return redirect(307, "/login");
  },
};
