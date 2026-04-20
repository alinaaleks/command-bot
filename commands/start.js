var keyboard = [
    [{text: "GIT", callback_data: "/git"}, {text: "Git Bash", callback_data: "/gitbash"}],
    [{text: "Python", callback_data: "/python"}, {text: "SQL", callback_data: "/sql"}],
    [{text: "ANACONDA", callback_data: "/conda"}],
    [{text: "Docker", callback_data: "/docker"}, {text: "VS Code", callback_data: "/vscode"}],
    [{text: "🔎  Search", callback_data: "/search"}],
];

Bot.sendMessage("Choose topic below.", {
    reply_markup: {
        inline_keyboard: keyboard
    },
    parse_mode: "Markdown"
});