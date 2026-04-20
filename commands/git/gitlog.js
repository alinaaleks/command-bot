var text = "*short status*\n" +
"`git status -s`\n" +
"`git status --short`\n\n" +

"*view commits*\n" +
"`git log --oneline`\n\n" +

"*with all details*\n" +
"`git log --oneline --graph --decorate`\n\n" +

"*last N commits*\n" +
"`git log --oneline -5`";

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