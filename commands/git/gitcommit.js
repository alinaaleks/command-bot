var text = "*basic commit*\n" +
"`git commit -m 'Message'`\n\n" +

"*push to GITHUB and set default branch*\n" +
"`git push -u origin main`\n" +
"**then only ➜ ** `git push`\n\n" +

"*push to specific branch*\n" +
"`git push origin <branch>`\n\n" +

"*to all branches*\n" +
"`git push --all origin`";

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