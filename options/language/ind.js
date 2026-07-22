exports.wait = () => { return `⌛ Processing ⌛` } 
exports.timeEnd = () => { return `Time's Up` } 
exports.succsess = () => { return `✔️ Success ✔️` } 
exports.levelon = () => { return `❬ ✔ ❭ *leveling is now active*` } 
exports.levelnoton = () => { return `❬ X ❭ *leveling disabled*` } 
exports.levelnol = () => { return `*YOUR LEVEL IS STILL* 0 °-°` } 
exports.stick = () => { return `[❗] Failed, an error occurred while converting the image to a sticker ❌` } 
exports.Iv = () => { return `❌ Invalid link ❌` } 
exports.group = () => { return `[❗] This command can only be used inside a group! ❌` } 
exports.ownerG = () => { return `[❗] This command can only be used by the group owner! ❌` } 
exports.ownerB = () => { return `[❗] This command can only be used by the bot owner! ❌` } 
exports.admin = () => { return `[❗] This command can only be used by group admins! ❌` } 
exports.Badmin = () => { return `[❗] This command can only be used when the bot is an admin! ❌` } 
exports.daftarB = (prefix) => { return `──「 NOT REGISTERED YET 」──\nHello friend!\nYou haven't registered yet, please register first... \n\nCommand : ${prefix}register name|age\nExample : ${prefix}register Nazwa|16` } 
exports.daftarD = () => { return `*「 ALREADY REGISTERED 」*\n\n*you are already registered in the bot database*` } 
exports.wrongf = () => { return `*wrong format/empty text*` } 
exports.clears = () => { return `*clear all Success*` } 
exports.pc = () => { return `*「 REGISTRATION 」*\n\nto find out if you are registered, please check the message I sent \n\nNOTE:\n*if you haven't received a message, it means you haven't saved the bot's number*` } 
exports.registered = (namaUser, umurUser, serialUser, time, sender) => { return `*「 REGISTRATION DATA 」*\n\nyou have been registered with the following data \n\n◪ *DATA* \n │ \n ├─ ❏ Name : ${namaUser} \n ├─ ❏ Number : wa.me/${sender.split("@")[0]} \n ├─ ❏ Age : ${umurUser} \n ├─ ❏ Register Time : ${time} \n │ \n └─ ❏ SN : ${serialUser} \n\n ❏ NOTE : \n DON'T FORGET THIS NUMBER BECAUSE IT IS IMPORTANT :v` } 
exports.cmdnf = (prefix, command) => { return `command *${prefix}${command}* not found\ntry typing *${prefix}menu*` } 
exports.owneresce = (pushname) => { return `*sorry but ${pushname} is not the script owner*` } 
exports.limitend = (pushname) => { return `*sorry ${pushname}, your limit for today has run out*\n*the limit resets every day at 24:00*` } 
exports.limitcount = (limitCounts) => { return ` *「 LIMIT COUNT 」* your remaining limit : ${limitCounts} \n\nNOTE : to get more limits, you can level up or use buylimit` } 
exports.satukos = () => { return `*Add parameter 1/enable or 0/disable` } 
exports.uangkau = (pushname, sender, uangkau) => { return `◪ *ATM*\n ❏ *Name* : ${pushname}\n ❏ *Number* : ${sender.split("@")[0]}\n ❏ *Balance* : ${uangkau}` }
