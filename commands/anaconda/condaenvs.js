var text = "*DA setup*\n" +
"`conda create -n new-env python=3.11`\n" +
"`conda activate new-env`\n\n" +
"`conda install pandas numpy sqlalchemy psycopg2 jupyter`\n" +
"`jupyter notebook`\n" +
"`pip install openpyxl`\n\n" +


"*useful commands*\n" +
"`conda env list`\n" +
"`conda deactivate`\n\n" +

"*(!) delete environment*\n" +
"`conda remove -n new-env --all`";

// Back button
var keyboard = [
    [{text: "◀  Back", callback_data: "/conda"}, {text: "HOME", callback_data: "/start"}]
];

Bot.sendMessage(text, {
    parse_mode: "Markdown",
    reply_markup: {
        inline_keyboard: keyboard
    }
});


