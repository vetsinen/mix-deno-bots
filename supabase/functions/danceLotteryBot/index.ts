// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import { serve } from "https://deno.land/std@0.131.0/http/server.ts"



console.log(`Function "telegram-bot" up and running!`)
console.log('token ', Deno.env.get('BOT_TOKEN') )

import { Bot, webhookCallback } from "https://deno.land/x/grammy@v1.8.3/server.ts";

const bot = new Bot(Deno.env.get('BOT_TOKEN')  || '5958048904:AAEPgMwy-afj4_-HMJ2REm6s2krB6_NcYbY');

bot.command("start", (ctx) => ctx.reply("Welcome! Up and running."));

bot.command('ping', (ctx) => ctx.reply(`Pong! ${new Date()} ${Date.now()}`))

const handleUpdate = webhookCallback(bot, "std/http");

serve(async (req) => {
  try {
    const url = new URL(req.url);

    // if (url.searchParams.get('secret') !== Deno.env.get('FUNCTION_SECRET'))
    //   return new Response('not allowed', { status: 405 })

    return await handleUpdate(req);
  } catch (err) {
    console.error(err);
  }
})
