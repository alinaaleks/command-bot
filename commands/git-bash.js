var text = "*is being developed*\n" +
"`pwd`\n" +
"`cd`\n" +
"`ls`\n" +
"`touch`\n" +
"`start`";

// Back button
var keyboard = [
    [{text: "◀  Back", callback_data: "/start"}]
];

Bot.sendMessage(text, {
    parse_mode: "Markdown",
    reply_markup: {
        inline_keyboard: keyboard
    }
});