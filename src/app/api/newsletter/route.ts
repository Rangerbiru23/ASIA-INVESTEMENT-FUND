import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, name, preferences } = body

    // Validation
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
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

    // Log the newsletter subscription
    console.log('Newsletter Subscription:', {
      email,
      name,
      preferences,
      timestamp: new Date().toISOString()
    })

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 800))

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed to newsletter',
      data: {
        id: Math.random().toString(36).substr(2, 9),
        email,
        name,
        preferences: preferences || ['investment-tips', 'market-updates'],
        subscribedAt: new Date().toISOString(),
        status: 'active'
      }
    })

  } catch (error) {
    console.error('Newsletter API Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'PT ASIA INVESTMENT FUND Newsletter API',
    endpoints: {
      'POST /api/newsletter': 'Subscribe to newsletter',
      'GET /api/newsletter': 'API information'
    },
    newsletter: {
      company: 'PT ASIA INVESTMENT FUND',
      description: 'Get the latest investment insights, market analysis, and financial tips',
      frequency: 'Weekly',
      categories: [
        {
          id: 'investment-tips',
          name: 'Investment Tips',
          description: 'Expert advice on investment strategies'
        },
        {
          id: 'market-updates',
          name: 'Market Updates',
          description: 'Latest market trends and analysis'
        },
        {
          id: 'meta-ads-insights',
          name: 'Meta Ads Insights',
          description: 'Technology and digital marketing investment opportunities'
        },
        {
          id: 'financial-planning',
          name: 'Financial Planning',
          description: 'Personal finance and wealth management tips'
        }
      ]
    }
  })
}