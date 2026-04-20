var text = "*new branch*\n" +
"`git checkout -b`\n\n" +

"*switch*\n" +
"`git switch`\n\n" +

"*delete*\n" +
"`git branch -d`\n\n" +

"*delete (!with unmerged changes)*\n" +
"`git branch -D`";

// Back button
var keyboard = [
    [{text: "◀  Back", callback_data: "/git"}, {text: "HOME", callback_data: "/start"}]
];

Bot.sendMessage(text, {
    parse_mode: "Markdown",
    reply_markup: {
        inline_keyboard: keyboard
    }
});