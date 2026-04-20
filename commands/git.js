var keyboard = [
    [{text: "Init / Delete", callback_data: "/gitinit"}, {text: "Remote", callback_data: "/gitremote"}],
    [{text: "Commit / PUSH", callback_data: "/gitcommit"}, {text: "Status / Log", callback_data: "/gitlog"}],
    [{text: "UNDO", callback_data: "/gitundo"}, {text: "Branch", callback_data: "/gitbranch"}],
    [{text: "DIFF", callback_data: "/gitdiff"}, {text: "Stash", callback_data: "/gitstash"}],
    [{text: "Config", callback_data: "/gitconfig"}, {text: "Shortcuts", callback_data: "/gitshortcuts"}],
    [{text: "🔎  Search", callback_data: "/search"}],
    [{text: "HOME", callback_data: "/start"}]
];

Bot.sendMessage("TOPICS:", {
    reply_markup: {
        inline_keyboard: keyboard
    },
    parse_mode: "Markdown"
});