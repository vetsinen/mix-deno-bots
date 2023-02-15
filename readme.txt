To invoke:

curl -i --location --request POST 'http://localhost:54321/functions/v1/' \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
  --header 'Content-Type: application/json' \
  --data '{"name":"Functions"}'

supabase functions deploy hello --project-ref kbcyylgkgsvjpmcmkxvu --no-verify-jwt

supabase secrets list --project-ref kbcyylgkgsvjpmcmkxvu
supabase link --project-ref kbcyylgkgsvjpmcmkxvu

supabase functions serve tg-bot  --no-verify-jwt --env-file ./.env

supabase functions deploy tg-bot --project-ref kbcyylgkgsvjpmcmkxvu --no-verify-jwt

supabase link --project-ref kbcyylgkgsvjpmcmkxvu

https://api.telegram.org/bot5958048904:AAEPgMwy-afj4_-HMJ2REm6s2krB6_NcYbY/setWebhook?url=https://kbcyylgkgsvjpmcmkxvu.functions.supabase.co/tg-bot?secret=supa1234

Deploying
Create the function:
supabase functions deploy --no-verify-jwt telegram-bot
Contact @BotFather to create a bot and get its token.
Set the secrets:
supabase secrets set BOT_TOKEN=your_token FUNCTION_SECRET=random_secret
Set your bot’s webhook URL to https://<PROJECT_NAME>.functions.supabase.co/telegram-bot (replacing <...> with respective values). To do that, you open the request URL in your browser:
https://api.telegram.org/bot<BOT_TOKEN>/setWebhook?url=https://<PROJECT_NAME>.functions.supabase.co/telegram-bot?secret=<FUNCTION_SECRET>
