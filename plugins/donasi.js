let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, fla + 'donasi', `
┌「 *Donasi • Emoney* 」
├ Dana 088212768618
├ Gopay 088212768618
└────
`.trim(), '©sadexa', 'donasi', '.donasi', m)
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
