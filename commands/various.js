var keyboard = [
    [{text: "FFMPEG", callback_data: "/ffmpeg"}, {text: "Other block", callback_data: "/various"}],
    [{text: "Block 1", callback_data: "/various"}, {text: "Block 2", callback_data: "/various"}],
    [{text: "🔎  Search", callback_data: "/search"}],
    [{text: "HOME", callback_data: "/start"}]
];

Bot.sendMessage("TOPICS:", {
    reply_markup: {
        inline_keyboard: keyboard
    },
    parse_mode: "Markdown"
});