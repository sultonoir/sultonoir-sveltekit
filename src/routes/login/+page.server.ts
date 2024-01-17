import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async (event) => {
  const sesion = await event.locals.getSession();
  if (sesion) {
    redirect(307, "/");
  }
};
