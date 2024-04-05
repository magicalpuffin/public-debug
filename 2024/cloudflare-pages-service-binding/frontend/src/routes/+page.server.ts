import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async (event) => {
  const respHello1 = await event.platform?.env.GREET.fetch("http://internal");
  const textHello1 = await respHello1.text();

  console.log(textHello1);
  return { textHello1 };
};
