import os
import logging

from telegram.ext import (
    Application,
    CommandHandler,
    CallbackQueryHandler
)

from commands.basic import start
from commands.menu_handlers import menu_router
from commands.search import find


logging.basicConfig(
    format="%(asctime)s - %(message)s",
    level=logging.INFO
)


def main():

    token = os.getenv("TELEGRAM_BOT_TOKEN")

    if not token:
        raise ValueError("TELEGRAM_BOT_TOKEN is not set")

    app = Application.builder().token(token).build()

    # command handlers
    app.add_handler(CommandHandler("start", start))
    app.add_handler(CommandHandler("find", find))

    # menu button handler
    app.add_handler(CallbackQueryHandler(menu_router))

    print("Bot is running...")

    app.run_polling()


if __name__ == "__main__":
    main()