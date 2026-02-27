const Command = require("../../structures/Command");

module.exports = class Setname extends Command {
    constructor(client, file) {
        super(client, file, {
            name: "setname",
            description: "تغيير اسم البوت",
            category: "Developer",
            owner: true,
        });
    }

    async run(message, args) {
        const newName = args.join(" ");
        if (!newName) return message.reply("يرجى كتابة الاسم الجديد الذي تريده.");

        try {
            await this.client.user.setUsername(newName);
            return message.reply(`✅ تم تغيير اسم البوت بنجاح إلى: **${newName}**`);
        } catch (error) {
            return message.reply(`❌ فشل تغيير الاسم: ${error.message}`);
        }
    }
};
