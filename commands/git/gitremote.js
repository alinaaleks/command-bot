var text = "*copy remote repo locally*\n" +
"`git clone <url>`\n\n" +

"*get latest changes*\n" +
"`git pull`\n\n" +

"*list remotes*\n" +
"`git remote -v`\n\n" +

"*change remote URL*\n" +
"`git remote set-url origin <new-url>`";

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