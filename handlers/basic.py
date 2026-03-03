from telegram import Update
from telegram.ext import ContextTypes

# Start command handler
async def start(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    welcome_message = (
        "Hello! I am Git command Helper.\n"
        "Here are the commands you can use:\n"
        "/status - View the current git status\n"
        "/add - Add a file to git\n"
        "/commit - Make a commit\n"
        "/push - Push changes to the remote repo\n"
        "/log - See the list of commits\n"
        "/fetch_pull - Sync with the GitHub repo\n"
        "/merge - Merge a branch into the current branch\n"
        "/branches - List all branches\n"
        "/create_branch - Create a new branch\n"
        "/delete_branch - Delete a branch\n"
        "/amend_commit - Amend the last commit\n"
        "/short_status - View a short git status\n"
        "/switch - Switch to another branch\n"
        "/diff - View changes since the last commit\n"
        "/undo_add - Undo 'git add'"
    )
    await update.message.reply_text(welcome_message)