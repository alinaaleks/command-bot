var text = "*UNSTAGE*\n" +
"`git restore --staged` ** ➜  file (changes remain)**\n" +
"`git reset` ** ➜  everything (changes remain)**\n\n" +

"*change message only*\n" +
"`git commit --amend -m 'New commit message'`\n\n" +

"*forgot file, keep original message*\n" +
"`git add <file>`\n" +
"`git commit --amend --no-edit`\n\n" +

"*uncommit and unstage (keep changes in WD)*\n" +
"`git reset HEAD~1`\n\n" +
  
"*UNDO CHANGES*\n" +
"`git restore .` ** ➜  revert to last commit (!changes lost)**\n" +
"`git clean -f` ** ➜  remove untracked files**";



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