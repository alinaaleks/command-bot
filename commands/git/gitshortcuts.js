var text = "*git s*\n" +
"`git config --global alias.s \"status -sb\"`\n\n" +

"*git a*\n" +
"`git config --global alias.a \"add .\"`\n\n" +

"*git c*\n" +
"`git config --global alias.c \"commit -m\"`\n\n" +

"*git p*\n" +
"`git config --global alias.p \"push\"`\n\n" +
  
"*git lg*\n" +
"`git config --global alias.lg \"log --oneline --graph --decorate\"`\n\n" +

"*see all aliases*\n" +
"`git config --global --get-regexp alias`\n\n" +
  
  "*re-set the alias*\n" +
"Just run the correct `git config` command again";

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