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
        if (!args.length) return message.reply("يرجى كتابة الاسم الجديد.");
        const newName = args.join(" ");

        try {
            await this.client.user.setUsername(newName);
            return message.reply(`✅ تم تغيير الاسم إلى: **${newName}**`);
        } catch (error) {
            console.error(error);
            return message.reply(`❌ خطأ: ${error.message}`);
        }
    }
};
