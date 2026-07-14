import { NextResponse } from 'next/server'

const WEB3FORMS_API_KEY = '629edf10-e2a1-4f25-987c-2f6cad013911'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Forward to Web3Forms
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_API_KEY,
        ...body,
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      return NextResponse.json(
        { error: data.message || 'Failed to send message.' },
        { status: response.status }
      )
    }

    return NextResponse.json({ success: true, message: 'Message sent successfully!' })
  } catch {
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}