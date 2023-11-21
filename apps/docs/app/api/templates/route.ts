import { NextResponse, type NextRequest } from 'next/server';

import { templates } from './mock-templates'

export function GET(
    _: NextRequest, 
) {
    return NextResponse.json({
        status: 200,
        templates: [...templates.values()]
    })
}