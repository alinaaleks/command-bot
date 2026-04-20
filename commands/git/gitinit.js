var text = "*init locally + connect remotely*\n" +
"`git init`\n" +
"`git add .`\n" +
"`git commit -m \"first commit\"`\n\n" +
"`git remote add origin https://github.com/user/repo.git`\n" +
"`git push -u origin main`\n\n" +

"*disconnect (local repo stays)*\n" +
"`git remote remove origin` - disconnect (local repo stays)\n\n" +

"*(!) delete repo (keeps files, removes Git history)*\n" +
"`rm -rf .git`";

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