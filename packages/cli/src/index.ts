import { Command } from "commander"

import { init } from "@/src/command/init"

async function main() {
    const cli = new Command()
        .name("aoc-cli")
        .description("add advent of code files and data to your project")
        .version(
            "0.0.0",
            "-v, --version",
            "display the version number"
        )

    cli.addCommand(init)

    cli.parse()
}

main()