from telegram import Update
from telegram.ext import ContextTypes
from keyboards.menu import main_menu


async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):

    text = (
        "Hey! I am your Git command helper.\n\n"
        "Choose a topic below or type /help"
    )

    await update.message.reply_text(
        text,
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