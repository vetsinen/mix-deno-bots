import { Bot } from "./deps.deno.ts";

export const bot = new Bot(Deno.env.get("BOT_TOKEN") || "5958048904:AAEPgMwy-afj4_-HMJ2REm6s2krB6_NcYbY");

bot.command("start", (ctx) => ctx.reply("Welcome! Up and running."));

bot.command("ping", (ctx) => ctx.reply(`Pong! ${new Date()} ${Date.now()}`));
