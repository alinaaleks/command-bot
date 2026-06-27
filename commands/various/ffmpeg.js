var text =
"*GIF to MP4 conversion*\n" +

"```bash\n" +
"ffmpeg -i demo.gif \\\n" +
"-vf \"scale=1000:-1:flags=lanczos,fps=30\" \\\n" +
"-c:v libx264 \\\n" +
"-crf 18 \\\n" +
"-preset slow \\\n" +
"-movflags +faststart \\\n" +
"-an demo.mp4\n" +
"```\n\n" +

"- Upscales width to 1000px (keeps aspect ratio)\n" +
"- Sets 30 FPS, uses H.264 codec\n" +
"- High quality (CRF 18)\n" +
"- Optimized for web playback\n" +
"- Removes audio track\n\n" +

"*MP3 to M4A conversion*\n" +

"```bash\n" +
"ffmpeg -i demo.mp3 -vn -c:a aac -b:a 128k demo.m4a\n" +
"```\n\n" +

"- Uses AAC codec\n" +
"- Sets audio bitrate to 128k\n" +
"- Ignores video stream\n\n" +

"*MP4 compression*\n" +

"```bash\n" +
"ffmpeg -i demo.mp4 \\\n" +
"-vf \"scale=1200:-2:flags=lanczos\" \\\n" +
"-c:v libx264 \\\n" +
"-crf 18 \\\n" +
"-preset slow \\\n" +
"-movflags +faststart \\\n" +
"-an demo.mp4\n" +
"```\n\n" +

"- Upscales width to 1200px (keeps aspect ratio)";

// Back button
var keyboard = [
    [
        {text: "◀  Back", callback_data: "/various"},
        {text: "HOME", callback_data: "/start"}
    ]
];

Bot.sendMessage(text, {
    parse_mode: "Markdown",
    reply_markup: {
        inline_keyboard: keyboard
    }
});