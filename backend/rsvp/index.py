import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Получает анкету гостя свадьбы и отправляет её на почту молодожёнов."""

    cors_headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": cors_headers, "body": ""}

    body = json.loads(event.get("body") or "{}")

    name = body.get("name", "—")
    attending = body.get("attending", "—")
    guests = body.get("guests", "—")
    allergies = body.get("allergies", "—")
    music = body.get("music", "—")

    attending_text = {"yes": "Да, буду!", "no": "К сожалению, нет", "maybe": "Пока не знаю"}.get(attending, attending)

    html = f"""
    <html><body style="font-family: Georgia, serif; color: #2a2018; background: #faf8f5; padding: 32px;">
      <h2 style="font-weight: 300; font-size: 28px; color: #4a7a4a;">Новая анкета гостя 💌</h2>
      <table style="width: 100%; border-collapse: collapse; margin-top: 24px;">
        <tr style="border-bottom: 1px solid #e8e0d8;">
          <td style="padding: 12px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 2px; width: 200px;">Имя гостя</td>
          <td style="padding: 12px 0; font-size: 16px;">{name}</td>
        </tr>
        <tr style="border-bottom: 1px solid #e8e0d8;">
          <td style="padding: 12px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">Придёт?</td>
          <td style="padding: 12px 0; font-size: 16px;">{attending_text}</td>
        </tr>
        <tr style="border-bottom: 1px solid #e8e0d8;">
          <td style="padding: 12px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">Гостей с собой</td>
          <td style="padding: 12px 0; font-size: 16px;">{guests}</td>
        </tr>
        <tr style="border-bottom: 1px solid #e8e0d8;">
          <td style="padding: 12px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">Аллергии</td>
          <td style="padding: 12px 0; font-size: 16px;">{allergies}</td>
        </tr>
        <tr>
          <td style="padding: 12px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">Музыка</td>
          <td style="padding: 12px 0; font-size: 16px;">{music}</td>
        </tr>
      </table>
      <p style="margin-top: 32px; color: #aaa; font-size: 12px;">Антон & Виктория · 09.08.2026 · Банкетный зал Сокол, г. Курган</p>
    </body></html>
    """

    msg = MIMEMultipart("alternative")
    msg["Subject"] = f"Анкета гостя: {name}"
    msg["From"] = "young.to.die04@mail.ru"
    msg["To"] = "young.to.die04@mail.ru"
    msg.attach(MIMEText(html, "html", "utf-8"))

    smtp_password = os.environ.get("SMTP_PASSWORD", "")
    with smtplib.SMTP_SSL("smtp.mail.ru", 465) as server:
        server.login("young.to.die04@mail.ru", smtp_password)
        server.sendmail("young.to.die04@mail.ru", "young.to.die04@mail.ru", msg.as_string())

    return {
        "statusCode": 200,
        "headers": cors_headers,
        "body": json.dumps({"ok": True}),
    }
