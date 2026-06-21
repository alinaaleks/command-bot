var keyboard = [
    [{text: "Schema Info", callback_data: "/sqlinfo"}, {text: "Other", callback_data: "/sql"}],
    [{text: "Block 1", callback_data: "/sql"}, {text: "Block 2", callback_data: "/sql"}],
    [{text: "🔎  Search", callback_data: "/search"}],
    [{text: "HOME", callback_data: "/start"}]
];

Bot.sendMessage("TOPICS:", {
    reply_markup: {
        inline_keyboard: keyboard
    },
    parse_mode: "Markdown"
});