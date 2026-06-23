var text =
"*Basics*\n" +
"`import matplotlib.pyplot as plt`\n" +
"`df[\"column\"].hist()`\n" +
"`df[\"column\"].value_counts().plot(kind=\"bar\")`\n" +
"`plt.show()`";

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