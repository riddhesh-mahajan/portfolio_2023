import { NextRequest, NextResponse } from "next/server";
const sgMail = require("@sendgrid/mail");
const moment = require("moment");

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  return NextResponse.json({ a: "b" });
}

type postPayload = {
  fullName: string;
  companyName: string;
  purpose: string;
  preferredCommunicationChannel: string;
  communicationChannelUsername: string;
};

export async function POST(request: NextRequest) {
  const payload: postPayload = await request.json();

  // Send email to owner
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: "riddhesh.maha@gmail.com",
    from: "portfolio@willuseai.com",
    subject: `Portfolio update (${moment(new Date()).format(
      "DD/MM/YYYY HH:mm"
    )})`,
    text: `${payload.fullName} has contacted you. Details: ${JSON.stringify(
      payload
    )}
      `,
    html: `
      <p>Full Name: ${payload.fullName}</p>
      <p>Company Name: ${payload.companyName}</p>
      <p>Purpose: ${payload.purpose}</p>
      <p>Preferred Communication Channel: ${payload.preferredCommunicationChannel}</p>
      <p>Communication Channel Username: ${payload.communicationChannelUsername}</p>
    `,
  };

  if (process.env.SEND_EMAILS === "true") {
    try {
      await sgMail.send(msg);
    } catch (error: any) {
      console.error(error);

      if (error.response) {
        console.error(error.response.body);
      }
    }
  }

  return NextResponse.json({ message: "Contact request created successfully" });
}
