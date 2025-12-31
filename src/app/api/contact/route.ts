import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message, service } = body

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Log the contact request (in production, you'd save to database)
    console.log('Contact Request:', {
      name,
      email,
      phone,
      message,
      service,
      timestamp: new Date().toISOString()
    })

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Contact form submitted successfully',
      data: {
        id: Math.random().toString(36).substr(2, 9),
        name,
        email,
        phone,
        service,
        submittedAt: new Date().toISOString()
      }
    })

  } catch (error) {
    console.error('Contact API Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'PT ASIA INVESTMENT FUND Contact API',
    endpoints: {
      'POST /api/contact': 'Submit contact form',
      'GET /api/contact': 'API information'
    },
    company: {
      name: 'PT ASIA INVESTMENT FUND',
      phone: '085285703582',
      email: 'info@asiainvestmentfund.co.id',
      address: 'GRAND INDONESIA Jl. M.H Thamrin No. 1 Kel. Menteng, Kec. Menteng, Kota Adm. Jakarta Pusat, Prov. DKI Jakarta'
    }
  })
}