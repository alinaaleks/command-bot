var text = "*is being developed*\n" +
"`conda activate myenv`\n" +
"`conda info --envs` <= list envs\n" +
"`conda env list`\n" +
"`conda create --name <my-env>`";

// Back button
var keyboard = [
    [{text: "◀  Back", callback_data: "/start"}]
];

Bot.sendMessage(text, {
    parse_mode: "Markdown",
    reply_markup: {
        inline_keyboard: keyboard
    }
});