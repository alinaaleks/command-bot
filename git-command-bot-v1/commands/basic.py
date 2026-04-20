from telegram import Update
from telegram.ext import ContextTypes
from keyboards.inline_menus import main_menu


async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):

    await update.message.reply_text(
        "Welcome to Git Helper.\nChoose a category:",
        reply_markup=main_menu()
    )


async def help_command(update: Update, context: ContextTypes.DEFAULT_TYPE):

    text = (
        "Available commands:\n\n"
        "/status\n"
        "/branches\n"
        "/log\n"
        "/diff\n"
    )

    await update.message.reply_text(text)