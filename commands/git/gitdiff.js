var text = "*what's changed but not staged?*\n" +
"`git diff`\n\n" +

"*what's staged for commit?*\n" +
"`git diff --staged`\n\n" +

"*changes SUMMARY*\n" +
"`git diff --stat`\n" +
"`git log --shortstat`\n\n" +

"*compare mith main branch*\n" +
"`git diff main`\n\n" +

"*see last commit details*\n" +
"`git show`\n\n" +
  
"*show changes (diff) in each commit*\n" +
"`git log -p`\n" +
"`git log --patch`";

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