#!/usr/bin/env node

import { addClientFolder } from "./command/add"

process.on("SIGINT", () => process.exit(0))
process.on("SIGTERM", () => process.exit(0))

async function main() {

    const originCommands        = process.argv
    const originCommandsLegth   = originCommands.length
    const commands              = originCommands.slice(2, originCommandsLegth)

    // Create for Client
    const client = "-c"
    const isForClient   = commands.find(item => item === client);
    const clientIndex   = commands.indexOf(client);

    // Create for Server API
    const server = "-s"
    const isServer      = commands.find(item => item === server);

    // Directory name
    const directoryName = "-d"
    const issetDirName  = commands.find(item => item === directoryName);
    const indexDir      = commands.indexOf(directoryName);


    // Checking Folder name
    const folderName    = commands[clientIndex + 1] != directoryName ? commands[clientIndex + 1] : undefined
    const newDirectory  = commands[indexDir + 1] ??  undefined

    if (isForClient) {

        if (!folderName) {
            console.log(`Could not find folder name is ${folderName}`);
            process.exit(0)
        }
        addClientFolder(folderName)
    }

}

main()
