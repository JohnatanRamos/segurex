import type { APIRoute } from "astro";
import { Resend } from "resend";

export const prerender = false;

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { name, phone, message } = body;

    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "tramites@segurexservicios.com",
      subject: "Una nueva persona quiere contactarte",
      html: `
        <h1>Nuevo mensaje desde tu página web 🚀</h1>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${phone}</p>
        <p><strong>Mensaje:</strong> ${message}</p>
      `,

    });

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false, error }), {
      status: 500,
    });
  }
};
