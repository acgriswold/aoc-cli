type FileProps = {
    name: string,
    content: string
}

export type TemplateProps = {
    name: string,
    files: FileProps[]
}

export const templates = new Map<string, TemplateProps>([
    ["python", {
        name: "Python template (basic)",
        files: [
            {
                name: "aoc-test.py",
                content: 'print("Running aoc python")\n\ndef main():\n\tprint("Executing main")\n\nif __name__ == "__main__":\n\tmain()'
            }
        ]
    }]
])


export type TemplatesProps = typeof templates