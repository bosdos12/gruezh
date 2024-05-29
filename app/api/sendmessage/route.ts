import { NextRequest, NextResponse } from "next/server";
import * as nodemailer from "nodemailer"; 


let websitecontacttransporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'klickwebcontact@gmail.com',
    pass: 'lvauxrogswqqkapt'
  }
});


export const POST = async (req: NextRequest, res: NextResponse) => {


  // Get the request json
  const {
    name,
    vorname,
    email,
    telefonnummer,
    nachricht } = await req.json();

  console.log(name, vorname, email, telefonnummer, nachricht);

  // Make sure all input fields have been filled
  if (
    !name          || name.length <= 1          ||
    !vorname       || vorname.length <= 1       ||
    !email         || email.length <= 1         ||
    !telefonnummer || telefonnummer.length <= 1 ||
    !nachricht     || nachricht.length <= 1
  ) {
    return NextResponse.json({message: "Please fill out the contact form."}, {status: 400});
  }


  try {
    await websitecontacttransporter.sendMail({
      from: 'dimensitecontactemail@gmail.com',
      to: "adakcelinawork@gmail.com",
      subject: `New message from your website - ${new Date()}`,
      html: `
        <p>${name}</p>
        <p>${vorname}</p>
        <p>${email}</p>
        <p>${telefonnummer}</p>
        <p>${nachricht}</p>
      `
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json({message: "Internal server error"}, {status: 500});
  };


  return NextResponse.json({message: "Your message has been sent successfully."}, {status: 200});
}