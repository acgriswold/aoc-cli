import { Command } from "commander";
import chalk from "chalk";

import * as z from "zod";

import { logger } from "@/src/utils/logger";
import { handleError } from "@/src/utils/handle-error";


const initOptionsSchema = z.object({
    nonInteractive: z.boolean(),
    directory: z.string(),
})

type InitOptionsSchemaType = z.infer<typeof initOptionsSchema>;


export const init = new Command()
    .name("init")
    .description("initializes your project and install dependencies")
    .option("-n, --non-interactive", "skip confirmation prompt.", false)
    .option(
        "-d, --directory <cwd>",
        "the working directory."
    )
    .action(async (opts) => {
        try {
            const options = initOptionsSchema.parse(opts)

            await runInit(options)

            logger.newLine()
            logger.info(
                `${chalk.green("Success!")} Project initialization completed. 0 files added`
            )
            logger.newLine()
        }
        catch (error) {
            handleError(error)
        }
    })

export async function runInit({ directory, nonInteractive }: InitOptionsSchemaType) {
    console.log("init")
}
