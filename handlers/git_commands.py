from telegram import Update
from telegram.ext import ContextTypes

# Command Handlers
async def status(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    await update.message.reply_text(
        "To check the current status of your repository, use the command:\n"
        "`git status`\n\n"
        "This will show you the state of the working directory and the staging area."
    )

async def add(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    await update.message.reply_text(
            "To add a file to the staging area, use the command:\n"
            "`git add <file_name>`\n\n"
            "This will add the specified file to the staging area."
        )

async def commit(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    await update.message.reply_text(
            "To make a commit with a message, use the command:\n"
            "`git commit -m <commit_message>`\n\n"
            "This will create a commit with your provided message."
        )

async def push(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    await update.message.reply_text(
        "To push your changes to the remote repository, use the command:\n"
        "`git push`\n\n"
        "This will push your local commits to the remote repository."
    )

async def log(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    await update.message.reply_text(
        "To view the commit history, use the command:\n"
        "`git log --oneline`\n\n"
        "This will show the commit history in a concise, one-line format."
    )

async def fetch_pull(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    await update.message.reply_text(
        "To sync your local repository with the remote one, use the command:\n"
        "`git fetch && git pull`\n\n"
        "This will fetch the latest changes from the remote repository and merge them into your local branch."
    )

async def merge(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    await update.message.reply_text(
            "To merge a branch into your current branch, use the command:\n"
            "`git merge <branch_name>`\n\n"
            "This will merge the specified branch into your current branch."
        )

async def branches(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    await update.message.reply_text(
        "To list all the branches in your repository, use the command:\n"
        "`git branch`\n\n"
        "This will show you all the local branches in your repository."
    )

async def create_branch(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    await update.message.reply_text(
            "To create a new branch, use the command:\n"
            "`git checkout -b <branch_name>`\n\n"
            "This will create a new branch and switch to it."
        )

async def delete_branch(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    await update.message.reply_text(
            "To delete a branch, use the command:\n"
            "`git branch -d <branch_name>`\n\n"
            "This will delete the specified branch."
        )

async def amend_commit(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    await update.message.reply_text(
        "To amend the last commit, use the command:\n"
        "`git commit --amend`\n\n"
        "This allows you to modify the last commit, for example, to change the commit message."
    )

async def short_status(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    await update.message.reply_text(
        "To view a concise git status, use the command:\n"
        "`git status -s`\n\n"
        "This will show a short format of the git status, with file changes and their states."
    )

async def switch_branch(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    await update.message.reply_text(
            "To switch to a different branch, use the command:\n"
            "`git switch <branch_name>`\n\n"
            "This will switch to the specified branch."
        )

async def diff(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    await update.message.reply_text(
        "To view the differences between the working directory and the last commit, use the command:\n"
        "`git diff`\n\n"
        "This will show you the changes that have been made since the last commit."
    )

async def undo_add(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    await update.message.reply_text(
            "To undo 'git add' on a file, use the command:\n"
            "`git reset <file_name>`\n\n"
            "This will unstage the file, but not modify the working directory."
        )