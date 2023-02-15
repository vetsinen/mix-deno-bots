import { Bot } from "https://deno.land/x/grammy@v1.14.1/mod.ts";
import {
    type Conversation,
    type ConversationFlavor,
    conversations,
    createConversation,
} from "https://deno.land/x/grammy_conversations@v1.1.1/mod.ts";

type FestContext = Context & ConversationFlavor;
type FestConversation = Conversation<MyContext>;

// Create an instance of the `Bot` class and pass your authentication token to it.
const bot = new Bot("5958048904:AAEPgMwy-afj4_-HMJ2REm6s2krB6_NcYbY"); // <-- put your authentication token between the ""

// You can now register listeners on your bot object `bot`.
// grammY will call the listeners when users send messages to your bot.

// Handle the /start command.
bot.command("start", (ctx) => ctx.reply("Hello, this is merengueBot"));
bot.command('ping', (ctx) => ctx.reply(`Pong! ${new Date()} ${Date.now()}`))

// Handle other messages.
bot.on("message", (ctx) => ctx.reply("Got another message!"));

async function festReg(conversation: FestConversation, ctx: FestContext) {
    await ctx.reply("How many favorite movies do you have?");
    const count = await conversation.form.number();
    const movies: string[] = [];
    for (let i = 0; i < count; i++) {
        await ctx.reply(`Tell me number ${i + 1}!`);
        const titleCtx = await conversation.waitFor(":text");
        movies.push(titleCtx.msg.text);
    }
    await ctx.reply("Here is a better ranking!");
    movies.sort();
    await ctx.reply(movies.map((m, i) => `${i + 1}. ${m}`).join("\n"));
}

// Now that you specified how to handle messages, you can start your bot.
// This will connect to the Telegram servers and wait for messages.

// Start the bot.
bot.start();
