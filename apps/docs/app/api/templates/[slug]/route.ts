import { NextResponse } from 'next/server';
import { templates } from '../mock-templates'


export function GET(
    req: NextResponse, 
    { params }: { params: { slug: string } }
) {
    console.log(`Attempting to retrieve ${params.slug} template`)

    const template = templates.get(params.slug)

    if (!template)
        return NextResponse.json({
            status: 404,
            message: `Unable to retrieve ${params.slug} template`
        })

    console.log("Returning template ", template)

    return NextResponse.json({
        status: 200,
        template
    })
}