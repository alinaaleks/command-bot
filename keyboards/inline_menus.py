from telegram import InlineKeyboardButton, InlineKeyboardMarkup


def main_menu():

    keyboard = [
        [InlineKeyboardButton("Basics", callback_data="basics")],
        [InlineKeyboardButton("Config", callback_data="config")],
        [InlineKeyboardButton("Branching", callback_data="branching")],
        [InlineKeyboardButton("Undo", callback_data="undo")],
        [InlineKeyboardButton("Stash", callback_data="stash")],
        [InlineKeyboardButton("Search command", callback_data="search")]
    ]

    return InlineKeyboardMarkup(keyboard)

def branching_menu():

    keyboard = [
        [InlineKeyboardButton("Create branch", callback_data="create_branch")],
        [InlineKeyboardButton("Switch branch", callback_data="switch_branch")],
        [InlineKeyboardButton("Merge branch", callback_data="merge_branch")],
        [InlineKeyboardButton("Delete branch", callback_data="delete_branch")],
        [InlineKeyboardButton("⬅ Back", callback_data="back_main")]
    ]

    return InlineKeyboardMarkup(keyboard)