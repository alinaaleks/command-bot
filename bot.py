import os
import logging

from telegram.ext import (
    Application,
    CommandHandler
)

from commands.basic import start, help_command
from commands.git_help import status, branches, log, diff


logging.basicConfig(
    format="%(asctime)s - %(message)s",
    level=logging.INFO
)


def main():

    token = os.getenv("TELEGRAM_BOT_TOKEN")

    if not token:
        raise ValueError("TELEGRAM_BOT_TOKEN is not set")

    app = Application.builder().token(token).build()

    # basic
    app.add_handler(CommandHandler("start", start))
    app.add_handler(CommandHandler("help", help_command))

    # git commands
    app.add_handler(CommandHandler("status", status))
    app.add_handler(CommandHandler("branches", branches))
    app.add_handler(CommandHandler("log", log))
    app.add_handler(CommandHandler("diff", diff))

    print("Bot is running...")

    app.run_polling()


if __name__ == "__main__":
    main()