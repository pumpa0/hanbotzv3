let { MessageType } = require('@adiwajshing/baileys')
let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	if (!db.data.chats[m.chat].rpg && m.isGroup) throw 'Feature Rpg Dimatikan Di grup ini\nKetik *!on* *rpg* untuk mengaktifkan fitur'

let name = global.db.data.users[m.sender].name
let level = global.db.data.users[m.sender].level
let exp = global.db.data.users[m.sender].exp
let banteng = global.db.data.users[m.sender].banteng
let harimau = global.db.data.users[m.sender].harimau
let gajah = global.db.data.users[m.sender].gajah
let kambing = global.db.data.users[m.sender].kambing
let panda = global.db.data.users[m.sender].panda
let buaya = global.db.data.users[m.sender].buaya
let kerbau = global.db.data.users[m.sender].kerbau
let sapi = global.db.data.users[m.sender].sapi
let monyet = global.db.data.users[m.sender].monyet
let babihutan = global.db.data.users[m.sender].babihutan
let babi = global.db.data.users[m.sender].babi
let ayam = global.db.data.users[m.sender].ayam
let past = `*ã ISI KANDANG ã*
  
kandang: *${name}*

Level: *${level}*
Exp: *${exp}*

*JENIS-JENIS*
ð banteng = *${banteng}*
ð harimau = *${harimau}*
ð gajah = *${gajah}*
ð kambing = *${kambing}*
ð¼ panda = *${panda}*
ð buaya = *${buaya}*
ð kerbau = *${kerbau}*
ð® sapi = *${sapi}*
ð monyet = *${monyet}*
ð babi hutan = *${babihutan}*
ð babi = *${babi}*
ð ayam = *${ayam}*

ð» Total Isi: *${banteng + harimau + gajah + kambing + panda + buaya + kerbau + sapi + monyet + babihutan + babi + ayam}* Jenis`
let isi = ` *ð = ${banteng}*
*ð = ${harimau}*
*ð = ${gajah}*
*ð = ${kambing}*
*ð¼ = ${panda}*
*ð = ${buaya}*
*ð = ${kerbau}*
*ð® = ${sapi}*
*ð = ${monyet}*
*ð = ${babihutan}*
*ð = ${babi}i*
*ð = ${ayam}*`.trim()
  await conn.send2ButtonLoc(m.chat, await(await fetch(kandang)).buffer(), past, 'Â©KANDANG', 'Dompet', '#dompet', 'SHOP', '#shop', m)
  }
  handler.help = ['kotakhewan', 'kandang', 'kandanghewan']
  handler.tags = ['rpg']
  handler.command = /^(kandang(hewan)?|kotak(hewan)?)$/i
module.exports = handler
handler.register = true

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
