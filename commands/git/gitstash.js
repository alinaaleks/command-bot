var text = "*need to switch branches urgently*\n" +
"`git stash push -m \"WIP: half-finished function\"`\n\n" +
"**then  ➜ ** `git stash pop`\n\n" +

"*apply stash to different branch*\n" +
"`git stash`\n" +
"`git checkout branch-b`\n" +
"`git stash apply`\n\n" +

"*compare stash with current work*\n" +
"`git stash show -p`\n\n" +

"*list all stashes*\n" +
"`git stash list`\n\n" +
  
"*show detailed changes in latest stash*\n" +
"`git stash show -p`";

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