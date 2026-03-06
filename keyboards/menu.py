from telegram import ReplyKeyboardMarkup


def main_menu():
    keyboard = [
        ["Status", "Log"],
        ["Branches", "Diff"],
        ["Help"]
    ]

    return ReplyKeyboardMarkup(
        keyboard,
        resize_keyboard=True
    )