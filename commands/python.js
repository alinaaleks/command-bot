var keyboard = [
    [{text: "Imports", callback_data: "/pythonimport"}, {text: "EDA", callback_data: "/pythoneda"}],
    [{text: "Missing Values", callback_data: "/pythonmissing"}, {text: "Duplicates", callback_data: "/pythonduplicates"}],
    [{text: "Type Fixes", callback_data: "/pythontupes"}, {text: "Visuals", callback_data: "/pythonvisuals"}],
    [{text: "🔎  Search", callback_data: "/search"}],
    [{text: "HOME", callback_data: "/start"}]
];

Bot.sendMessage("TOPICS:", {
    reply_markup: {
        inline_keyboard: keyboard
    },
    parse_mode: "Markdown"
});