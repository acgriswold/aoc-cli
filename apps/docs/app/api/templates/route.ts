import { NextResponse } from 'next/server';

import { templates } from './mock-templates'

export function GET(
    req: NextResponse
) {
    console.log("Returning ts template ", templates)

    return NextResponse.json({
        status: 200,
        templates: [...templates.values()]
    })
}