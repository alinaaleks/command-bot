from handlers.basic import start
from handlers.git_commands import (
    status, add, commit, push, log,
    fetch_pull, merge, branches,
    create_branch, delete_branch,
    amend_commit, short_status,
    switch_branch, diff, undo_add
)
from telegram.ext import Application, CommandHandler
import logging
import os

# Set up logging
logging.basicConfig(format='%(asctime)s - %(message)s', level=logging.INFO)
logger = logging.getLogger(__name__)

# Create the Application and Add Handlers
def main() -> None:
    token = os.getenv("TELEGRAM_BOT_TOKEN") # Fetch token securely
    if not token:
        logger.error("TELEGRAM_BOT_TOKEN is missing!")
        raise ValueError("TELEGRAM_BOT_TOKEN is not set.")

    logger.info("Starting Git Command Bot...")
    
    application = Application.builder().token(token).build()

    application.add_handler(CommandHandler("start", start))
    application.add_handler(CommandHandler("status", status))
    application.add_handler(CommandHandler("add", add))
    application.add_handler(CommandHandler("commit", commit))
    application.add_handler(CommandHandler("push", push))
    application.add_handler(CommandHandler("log", log))
    application.add_handler(CommandHandler("fetch_pull", fetch_pull))
    application.add_handler(CommandHandler("merge", merge))
    application.add_handler(CommandHandler("branches", branches))
    application.add_handler(CommandHandler("create_branch", create_branch))
    application.add_handler(CommandHandler("delete_branch", delete_branch))
    application.add_handler(CommandHandler("amend_commit", amend_commit))
    application.add_handler(CommandHandler("short_status", short_status))
    application.add_handler(CommandHandler("switch", switch_branch))
    application.add_handler(CommandHandler("diff", diff))
    application.add_handler(CommandHandler("undo_add", undo_add))

    application.run_polling()

if __name__ == "__main__":
    main()
