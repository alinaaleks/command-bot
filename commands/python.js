var keyboard = [
    [{text: "Explore dataset", callback_data: "/pythonexplore"}, {text: "Other", callback_data: "/python"}],
    [{text: "Block 1", callback_data: "/python"}, {text: "Block 2", callback_data: "/python"}],
    [{text: "🔎  Search", callback_data: "/search"}],
    [{text: "HOME", callback_data: "/start"}]
];

Bot.sendMessage("TOPICS:", {
    reply_markup: {
        inline_keyboard: keyboard
    },
    parse_mode: "Markdown"
});