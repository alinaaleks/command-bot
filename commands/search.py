from telegram import Update
from telegram.ext import ContextTypes


COMMANDS = {
    "merge": "git merge branch_name",
    "status": "git status",
    "log": "git log --oneline",
    "branch": "git branch"
}


async def find(update: Update, context: ContextTypes.DEFAULT_TYPE):

    if not context.args:
        await update.message.reply_text("Usage: /find <keyword>")
        return

    keyword = context.args[0].lower()

    results = []

    for cmd, explanation in COMMANDS.items():
        if keyword in cmd:
            results.append(f"{cmd} → `{explanation}`")

    if results:
        await update.message.reply_text(
            "\n".join(results),
            parse_mode="Markdown"
        )
    else:
        await update.message.reply_text("No command found.")