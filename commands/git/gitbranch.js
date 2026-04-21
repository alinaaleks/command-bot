var text = "*new branch*\n" +
"`git checkout -b`\n\n" +

"*MERGE*\n" +
"**1. switch to main:**  `git switch` | `git checkout`\n" +
"**2.**  `git merge`\n\n" +

"*list all*\n" +
"`git branch`\n\n" +

"*delete*\n" +
"`git branch -d`\n" +
"`git branch -D` **(!with unmerged changes)**";

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