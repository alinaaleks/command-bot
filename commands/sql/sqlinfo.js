var text =
"*Show all tables & columns in schema*\n" +
"```sql\n" +
"SELECT \n" +
"    table_schema,\n" +
"    table_name,\n" +
"    column_name,\n" +
"    data_type,\n" +
"    is_nullable\n" +
"FROM information_schema.columns\n" +
"WHERE table_schema = 'raw'\n" +
"ORDER BY table_name, ordinal_position;\n" +
"```\n\n" +

"*What this shows:*\n" +
"- All tables in schema `raw`\n" +
"- All columns per table\n" +
"- Data types\n" +
"- Nullability";

// Back button
var keyboard = [
    [{text: "◀  Back", callback_data: "/sql"}, {text: "HOME", callback_data: "/start"}]
];

Bot.sendMessage(text, {
    parse_mode: "Markdown",
    reply_markup: {
        inline_keyboard: keyboard
    }
});