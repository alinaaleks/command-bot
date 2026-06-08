var text = "*create with message*\n" +
"`git stash push -m \"WIP: la la la\"`\n\n" +

"*list all stashes*\n" +
"`git stash list`\n\n" +

"*show detailed changes in latest*\n" +
"`git stash show -p`\n\n" +

"*apply changes*\n" +
"`git stash apply` **(➜ keeps in stash!)**\n" +
"`git stash pop` **(➜ removes from stash!)**\n\n" +

"*apply stash to different branch*\n" +
"`git stash`\n" +
"`git checkout branch-b`\n" +
"`git stash apply`\n\n" +
  
"*DELETE*\n" +
"`git stash drop` **(newest)**\n" +
"`git stash drop 2 / stash@{2}` **(by index or exact)**\n" +
"`git stash clear` **(ALL stashes)**";

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