import { clientID, guildID, token } from "./config";
import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";
import { SlashCommandBuilder } from "@discordjs/builders";

const commands = [
  new SlashCommandBuilder().setName("ping").setDescription("replies with pong"),
].map((command) => command.toJSON());

const rest = new REST({ version: "9" }).setToken(token);

rest
  .put(Routes.applicationGuildCommands(clientID, guildID), {
    body: commands,
  })
  .then(() => console.log("registered application commands"))
  .catch(console.error);
