const { Message } = require("discord.js");
const { LavaClient } = require("../../structures/LavaClient");

module.exports = {
    name: "setname",
    description: "تغيير اسم البوت",
    category: "Developer",
    owner: false, // لضمان أنك الوحيد الذي يمكنه استخدامه
    run: async (client, message, args) => {
        const newName = args.join(" ");
        if (!newName) return message.reply("يرجى كتابة الاسم الجديد الذي تريده.");

        try {
            await client.user.setUsername(newName);
            return message.reply(`✅ تم تغيير اسم البوت بنجاح إلى: **${newName}**`);
        } catch (error) {
            return message.reply(`❌ فشل تغيير الاسم: ${error.message}`);
        }
    },
};
