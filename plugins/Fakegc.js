let fs = require('fs')
let handler  = async (m, { conn, usedPrefix: _p }) => {
const {
    MessageType,
    Mimetype
} = require("@adiwajshing/baileys");
const anu = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "6285731855426-1610340626@g.us",
			"inviteCode": "IKcqBMcirblBbc9SqpKuPu",
			"groupName": "HanBotz", 
            "caption": "Hi lort", 
            'jpegThumbnail': fs.readFileSync('./src/hisoka.jpg')
		}
	}
}
conn.sendMessage(m.chat, 'Test',
MessageType.text, {quoted: anu, contextInfo:{"forwardingScore":999, "isForwarded": true}})
}


handler.help = ['fakegc']

handler.tags = ['main']

handler.command = /^fakegc$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler
