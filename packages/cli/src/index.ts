#!/usr/bin/env node

import { Command } from "commander"

import { init } from "@/src/command/init"

import { getPackageInformation } from '@/src/utils/get-package-information'

process.on("SIGINT", () => process.exit(0))
process.on("SIGTERM", () => process.exit(0))

async function main() {
    const packageInformation = getPackageInformation()

    const cli = new Command()
        .name("aoc-cli")
        .description("add advent of code files and data to your project")
        .version(
            packageInformation.version ?? "0.0.5",
            "-v, --version",
            "display the version number"
        )

    cli.addCommand(init)

    cli.parse()
}

main()