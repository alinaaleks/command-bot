var text =
"*Quick Type Fixing*\n" +
"`df[\"col\"] = df[\"col\"].astype(float)\n" +
"`df[\"date\"] = pd.to_datetime(df[\"date\"])";

// Back button
var keyboard = [
    [{text: "◀  Back", callback_data: "/python"}, {text: "HOME", callback_data: "/start"}]
];

Bot.sendMessage(text, {
    parse_mode: "Markdown",
    reply_markup: {
        inline_keyboard: keyboard
    }
});