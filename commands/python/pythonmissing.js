var text =
"*Missing Values*\n" +
"`df.isnull().sum()` **missing per column**\n" +
"`df.dropna()` **drop rows with nulls**\n" +
"`df.fillna(0)` **fill with value**";

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