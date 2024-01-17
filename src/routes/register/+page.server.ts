import { xata } from "$lib/xata";
import { fail, type Actions, redirect, error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async (event) => {
  const sesion = await event.locals.getSession();
  if (sesion) {
    redirect(307, "/");
  }
};

export const actions: Actions = {
  create: async ({ request }) => {
    const data = await request.formData();
    const email = data.get("email")?.toString();
    const name = data.get("name")?.toString();
    if (!email) {
      return fail(400, { email, missing: true });
    }
    const user = await xata.db.nextauth_users
      .filter({
        email,
      })
      .getFirst();

    if (user) {
      return error(400, {
        message: "Email has been used",
      });
    }
    await xata.db.nextauth_users.create({
      email,
      name,
    });

    return redirect(307, "/login");
  },
};
