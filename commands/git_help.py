from telegram import Update
from telegram.ext import ContextTypes


async def status(update: Update, context: ContextTypes.DEFAULT_TYPE):

    text = (
        "Check repository status:\n\n"
        "`git status`"
    )

    await update.message.reply_text(text, parse_mode="Markdown")


async def branches(update: Update, context: ContextTypes.DEFAULT_TYPE):

    text = (
        "List branches:\n\n"
        "`git branch`"
    )

    await update.message.reply_text(text, parse_mode="Markdown")


async def log(update: Update, context: ContextTypes.DEFAULT_TYPE):

    text = (
        "Show commit history:\n\n"
        "`git log --oneline`"
    )

    await update.message.reply_text(text, parse_mode="Markdown")


async def diff(update: Update, context: ContextTypes.DEFAULT_TYPE):

    text = (
        "Show changes since last commit:\n\n"
        "`git diff`"
    )

    await update.message.reply_text(text, parse_mode="Markdown")