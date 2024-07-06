const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI=process.env.DATABASE_URL || ""
global.scan = "https://suhail-md-vtsf.onrender.com/";
global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || "5",  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";



module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS : process.env.PREFIX || ".",
  BRANCH : process.env.BRANCH   || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author: process.env.PACK_AUTHER || "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID|| "SUHAIL_03_47_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDY4LFxuICAgICAgICAyMjksXG4gICAgICAgIDUsXG4gICAgICAgIDIyLFxuICAgICAgICAxODQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjQwLFxuICAgICAgICAxODksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1LFxuICAgICAgICAyMjksXG4gICAgICAgIDE2LFxuICAgICAgICAzNixcbiAgICAgICAgMTk2LFxuICAgICAgICA0OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDk2LFxuICAgICAgICAxNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjI3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTA4LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDYxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjAxLFxuICAgICAgICA0MixcbiAgICAgICAgNjYsXG4gICAgICAgIDk3LFxuICAgICAgICAxODAsXG4gICAgICAgIDgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDQ5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDksXG4gICAgICAgIDYyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDI4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDgyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDU0LFxuICAgICAgICA0NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODgsXG4gICAgICAgIDI1LFxuICAgICAgICAwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzksXG4gICAgICAgIDM0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDY3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDU5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTY2LFxuICAgICAgICA1MixcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDg3LFxuICAgICAgICA3NixcbiAgICAgICAgMjQzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTI0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTc3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDcsXG4gICAgICAgIDEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgNDksXG4gICAgICAgIDQwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDYzLFxuICAgICAgICAzMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTYzLFxuICAgICAgICAzMixcbiAgICAgICAgODIsXG4gICAgICAgIDI4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTksXG4gICAgICAgIDIzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDg0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTYyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDM2LFxuICAgICAgICA1NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDk1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDMyLFxuICAgICAgICAzNSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxODgsXG4gICAgICAgIDUzLFxuICAgICAgICA3MixcbiAgICAgICAgMTQxLFxuICAgICAgICA4MSxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNzVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyNixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNjlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNSxcbiAgICAgICAgMTY5LFxuICAgICAgICAzOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjI4LFxuICAgICAgICA4MixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTYxLFxuICAgICAgICA3NixcbiAgICAgICAgMjI5LFxuICAgICAgICA1NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDYyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAzMyxcbiAgICAgICAgMTM0LFxuICAgICAgICA3NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDkxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDczLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDk2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTA5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDkzLFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTcxLFxuICBcImFkdlNlY3JldEtleVwiOiBcImtIRUpJbFhDZXFyN3doT0gxOGZCSDI5Nkk5THdXU0tINCtYTDJrOXRma0E9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm5TUjhzZDczUUVpMFNwS3ZJRVU0dVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNmUxNDVhMDktNjA4Yi00ZTEyLTllNzgtZTAxMTc3ODJlMjc2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwNixcbiAgICAgIDEzNixcbiAgICAgIDE2MCxcbiAgICAgIDg4LFxuICAgICAgMjM2LFxuICAgICAgMzgsXG4gICAgICAyNixcbiAgICAgIDkzLFxuICAgICAgMTA3LFxuICAgICAgMjIwLFxuICAgICAgODQsXG4gICAgICAyMTMsXG4gICAgICA5NSxcbiAgICAgIDM2LFxuICAgICAgMTgxLFxuICAgICAgNzIsXG4gICAgICAzLFxuICAgICAgMTgyLFxuICAgICAgMTE4LFxuICAgICAgMTUxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1NSxcbiAgICAgIDE3LFxuICAgICAgMTc4LFxuICAgICAgNTIsXG4gICAgICAxNDAsXG4gICAgICAxMDcsXG4gICAgICAyMzcsXG4gICAgICAyMTcsXG4gICAgICAxNzMsXG4gICAgICAxNjUsXG4gICAgICA1OCxcbiAgICAgIDg2LFxuICAgICAgMjMxLFxuICAgICAgMjcsXG4gICAgICAxMixcbiAgICAgIDExMyxcbiAgICAgIDIzNixcbiAgICAgIDE1MixcbiAgICAgIDQ1LFxuICAgICAgODZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRjEzUDdaRUpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkxNzgwNDA5ODUxNToxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCThqnguY98fOS6l/CdmL/wnZmA8J2ZkfCdmLzDl82cw5fwnZmJ8J2YvPCdmZTwnZi88J2ZhuS6l3x84LmP8JOGqlxcblxcbsOXzZzDl1xcbsOXzZzDl1xcbsOXzZzDl1xcbsOXzZzDl1xcbsOXzZzDl1xcbsOXzZzDl1xcbsOXzZzDl1xcbsOXzZzDl1xcbsOXzZzDl1xcbsOXzZzDl1xcbsOXzZzDl1xcbsOXzZzDl1xcbsOXzZzDl1wiLFxuICAgIFwibGlkXCI6IFwiOTUxMTI1MzczNjY2Njg6MTFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSU9kL2VvQkVOWDhvclFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJVNDNZa3g5Z21BMmlrdzZ1L29RY1pCWlUrVWM1a1FhME9QcnZsNnRzb1NZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkRxT09YbXVTcFhjNk5QeGIrUTVtT3F3Y1JHTDA4M3pnS2lhaURSSlM3V3djNWpwTFNHampXaGRheFVRbXNuNHlnSXphbmhTWlpiVG8vcmlnZE5OdENnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlJYc0NOWFhRckVmUjArZ3dnRDJDSkRmSE9ZSWtqcUJjbzROaklrem5FUXJBcDJCQndub2lHb2ZjYWk0Zm5DQVVEVnlRZk1Gb1E1YW9hOHdjVlZmakNBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxNzgwNDA5ODUxNToxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDM4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAyMzc2NTZcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9",  // PUT SESSION ID HERE 
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
