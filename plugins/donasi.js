let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(bank)).buffer(), `
*───────「 DONATE 」 ─────*
╭═══════════════
║╭─── [ DONASI ] ───
║│➸ _*Gopay*_: 
║│- 085807149213
║│
║│➸ _*Pulsa*_: 
║│- 6285731855426
║│
║│➸ _*OWNER*_
║│- wa.me/6285731855426
║╰────────────
╰═══════════════
`.trim(), 'Donasi jan asal mencet', 'Owner Bot', '.owner')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
