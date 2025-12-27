const fs = require('fs'); const moment = require('moment-timezone'); module.exports = { config: { name: "info", version: "1.0", countDown: 20, role: 0, shortDescription: { vi: "", en: "" }, longDescription: { vi: "", en: "" }, category: "owner", guide: { en: "owner" }, envConfig: {} }, onStart: async function ({ message }) { const botName ="𝐊𝐀𝐑𝐌𝐀 𝐀𝐊𝐀𝐁𝐀𝐍𝐄"; const Prefix = "/"; const authorName = "𝐍𝐀𝐁𝐈𝐍 𝐒𝐈𝐍𝐆𝐉𝐀𝐋𝐈"; const ownAge = "𝟏𝟖+; const authorFB = "www.facebook.com/nabin.mgrx.237081"; const urls = JSON.parse(fs.readFileSync('Mateo.json')); const link = urls[Math.floor(Math.random() * urls.length)]; const now = moment().tz('Africa/lagos'); const date = now.format('MMMM Do YYYY'); const time = now.format('h:mm:ss A'); const uptime = process.uptime(); const seconds = Math.floor(uptime % 60); const minutes = Math.floor((uptime / 60) % 60); const hours = Math.floor((uptime / (60 * 60)) % 24); const days = Math.floor(uptime / (60 * 60 * 24)); const uptimeString = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`; message.reply({ body: `╭──────────────◯
\│⏥『 BOT-INFO 』⏥
\│■ BOT-NAME: ${botName}
\│■ BOT-PREFIX: ${prefix}
\│■ BOT-VERSION: ${global.Goatbot.package.version}
\│■ BOT-UPTIME: ${uptimeString}
\│■ DATE: ${date}
\│■ TIME: ${time}
\┣━━━━━━━━━━━━━┫
\│『 OWNER-INFO 』
\│❐ NAME: ${authorName}
\│❐ AGE: ${ownAge}
\│❐ GENDER: 𝐌𝐚𝐋𝐞
\│❐ STATUS: 𝐬𝐢𝐧𝐠𝐥𝐞 
\│❐ FACEBOOK: ${authorFB}
\╰──────────────◯
\===============`, attachment: await global.utils.getStreamFromURL(link) }); }, onChat: async function({ event, message, getLang }) { if (event.body && event.body.toLowerCase() === "info") { this.onStart({ message }); } } };e, getLang }) { if (event.body && event.body.toLowerCase() === "info") { this.onStart({ message }); } } };
