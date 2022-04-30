/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as nodemailer from "nodemailer";
import * as Credentials from "../../core/config/app-config";
import * as _ from 'lodash';

export async function sendMail(receiver: any,subject: string,text:any, html:any) {
  try {

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: Credentials.appConfig.MAILER_EMAIL, // generated ethereal user
        pass: Credentials.appConfig.MAILER_PASSWORD // generated ethereal password
      }
    });

    const content = {
      from: Credentials.appConfig.MAILER_SENDER_NAME, // sender address
      to: receiver, // list of receivers
      subject: subject, 
      text: text, 
      html: html,
      attachments: [
        // {
        //   filename: "attachment.pdf",
        //   content: file.createReadStream()
        // }
      ]
    }

    if(!html){
      _.omit(content,['html'])
    }

    if(!text){
      _.omit(content,['text'])
    }

    const info = await transporter.sendMail(content);

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    
  } catch (err) {
    console.log(err);
  }
  return;
}

export async function sendMailWithAttachment(receiver: any,subject: string,text:any, html:any,attachment:any) {
  try {

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: Credentials.appConfig.MAILER_EMAIL, // generated ethereal user
        pass: Credentials.appConfig.MAILER_PASSWORD // generated ethereal password
      }
    });

    const content = {
      from: Credentials.appConfig.MAILER_SENDER_NAME, // sender address
      to: receiver, // list of receivers
      subject: subject, 
      text: text, 
      html: html,
      attachments: [
        {
          filename: "invoice.pdf",
          content: attachment
        }
      ]
    }

    if(!html){
      _.omit(content,['html'])
    }

    if(!text){
      _.omit(content,['text'])
    }

    const info = await transporter.sendMail(content);

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    
  } catch (err) {
    console.log(err);
  }
  return;
}