var text = "*build the site and start local preview server*\n" +
"`bundle exec jekyll serve`\n" +
"`bundle exec jekyll serve --livereload`\n\n" +

"*delete generated _site, for fresh build*\n" +
"`bundle exec jekyll clean`";

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