let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
╠═〘 PEMBAYARAN 〙 ═
╠═ Untuk Pembayaran Via Gopay
║- wa.me/6285731855426
╠═〘 Han 〙 ═
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*Sewa Bot*', 'status@broadcast') 
}
handler.help = ['viadigi']
handler.tags = ['info']
handler.command = /^viadigi$/i

module.exports = handler
