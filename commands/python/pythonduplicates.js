var text =
"*Duplicates*\n" +
"`df.duplicated().sum()` **count**\n" +
"`df.drop_duplicates()` **remove**";

// Back button
var keyboard = [
    [{text: "◀  Back", callback_data: "/python"}, {text: "HOME", callback_data: "/start"}]
];

Bot.sendMessage(text, {
    parse_mode: "Markdown",
    reply_markup: {
        inline_keyboard: keyboard
    }
});