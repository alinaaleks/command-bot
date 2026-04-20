var text = "*setting global*\n" +
"`git config --global user.name \"Your Name\"`\n\n" +
"`git config --global user.email \"your.email@example.com\"`\n\n" +

"*set editor for commit messages*\n" +
"`git config --global core.editor \"code --wait\"`\n\n" +

"*list global configs*\n" +
"`git config --global --list`\n\n" +
  
"*view specifics*\n" +
"`git config user.name`\n" +
"`git config user.email`";

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