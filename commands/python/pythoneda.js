var text =
"*Quick Check*\n" +
"`df.info()`\n" +
"`df.describe(include=\"all\")`\n" +
"`df.isnull().sum()`\n" +
"`df.duplicated().sum()`\n\n" +

"*First Look at Data*\n" +
"`df.head()`\n" +
"`df.tail()`\n" +
"`df.sample(5)`\n" +
"`value_counts()`\n\n" +

"*Structure & Types*\n" +
"`df.shape`\n" +
"`df.columns`\n" +
"`df.dtypes`\n" +
"`df.info()`\n\n" +

"*Descriptive Statistics*\n" +
"`df.describe()`\n" +
"`df.describe(include=\"all\")` **include categorical**";

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