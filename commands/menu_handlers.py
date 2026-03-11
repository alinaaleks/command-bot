# navigation brain of the bot

from telegram import Update
from telegram.ext import ContextTypes
from keyboards.inline_menus import branching_menu, main_menu


async def menu_router(update: Update, context: ContextTypes.DEFAULT_TYPE):

    query = update.callback_query
    await query.answer()

    data = query.data


    if data == "branching":
        await query.edit_message_text(
            "Branching commands:",
            reply_markup=branching_menu()
        )


    elif data == "back_main":
        await query.edit_message_text(
            "Main menu:",
            reply_markup=main_menu()
        )


    elif data == "create_branch":
        await query.edit_message_text(
            "Create a branch:\n\n`git checkout -b branch_name`",
            parse_mode="Markdown"
        )


    elif data == "merge_branch":
        await query.edit_message_text(
            "Merge a branch:\n\n`git merge branch_name`",
            parse_mode="Markdown"
        )