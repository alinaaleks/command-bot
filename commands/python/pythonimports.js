var text =

"*Basic Setup*\n" +
"`import pandas as pd`\n" +
"`df = pd.read_csv(\"file.csv\")`";

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