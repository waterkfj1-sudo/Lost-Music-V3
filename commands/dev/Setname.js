const { Message } = require("discord.js");

module.exports = {
    name: "setname",
    description: "تغيير اسم البوت",
    category: "Developer",
    owner: true, // لضمان أنك الوحيد الذي يمكنه استخدامه
    run: async (client, message, args) => {
        const newName = args.join(" ");
        if (!newName) return message.reply("يرجى كتابة الاسم الجديد الذي تريده.");

        try {
            // قمنا بإلغاء الحاجة لعمل require للملف المفقود واستخدمنا المتغير المتاح مباشرة
            await client.user.setUsername(newName);
            return message.reply(`✅ تم تغيير اسم البوت بنجاح إلى: **${newName}**`);
        } catch (error) {
            return message.reply(`❌ فشل تغيير الاسم: ${error.message}`);
        }
    },
};
