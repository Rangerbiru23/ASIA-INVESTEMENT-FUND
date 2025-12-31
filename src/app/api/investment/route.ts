import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, investmentAmount, investmentType, riskProfile, timeframe } = body

    // Validation
    if (!name || !email || !investmentAmount || !investmentType || !riskProfile) {
      return NextResponse.json(
        { error: 'All required fields must be filled' },
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

    // Investment amount validation (minimum 1 million IDR)
    if (investmentAmount < 1000000) {
      return NextResponse.json(
        { error: 'Minimum investment amount is Rp 1.000.000' },
        { status: 400 }
      )
    }

    // Log the investment request
    console.log('Investment Request:', {
      name,
      email,
      phone,
      investmentAmount,
      investmentType,
      riskProfile,
      timeframe,
      timestamp: new Date().toISOString()
    })

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1500))

    // Calculate expected returns based on risk profile and investment type
    const expectedReturns = calculateExpectedReturns(investmentAmount, investmentType, riskProfile, timeframe)

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Investment application submitted successfully',
      data: {
        id: Math.random().toString(36).substr(2, 9),
        name,
        email,
        phone,
        investmentAmount,
        investmentType,
        riskProfile,
        timeframe,
        expectedReturns,
        submittedAt: new Date().toISOString(),
        status: 'pending_review'
      }
    })

  } catch (error) {
    console.error('Investment API Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'PT ASIA INVESTMENT FUND Investment API',
    endpoints: {
      'POST /api/investment': 'Submit investment application',
      'GET /api/investment': 'API information and available investment types'
    },
    investmentTypes: [
      {
        id: 'conservative',
        name: 'Conservative Fund',
        description: 'Low risk, stable returns',
        minAmount: 1000000,
        expectedReturn: '6-8% per year',
        riskLevel: 'Low'
      },
      {
        id: 'balanced',
        name: 'Balanced Fund',
        description: 'Medium risk, balanced growth',
        minAmount: 5000000,
        expectedReturn: '10-15% per year',
        riskLevel: 'Medium'
      },
      {
        id: 'aggressive',
        name: 'Aggressive Growth Fund',
        description: 'High risk, high potential returns',
        minAmount: 10000000,
        expectedReturn: '18-25% per year',
        riskLevel: 'High'
      },
      {
        id: 'meta-ads',
        name: 'Meta Ads Integration Fund',
        description: 'Technology-focused with Meta Ads integration',
        minAmount: 5000000,
        expectedReturn: '15-20% per year',
        riskLevel: 'Medium-High'
      }
    ],
    riskProfiles: [
      { id: 'conservative', name: 'Conservative', description: 'Prioritize capital preservation' },
      { id: 'moderate', name: 'Moderate', description: 'Balance between growth and safety' },
      { id: 'aggressive', name: 'Aggressive', description: 'Maximize returns, accept higher risk' }
    ]
  })
}

function calculateExpectedReturns(amount: number, type: string, risk: string, timeframe?: number) {
  const baseReturns = {
    conservative: 0.07,
    balanced: 0.125,
    aggressive: 0.215,
    'meta-ads': 0.175
  }

  const riskMultiplier = {
    conservative: 0.9,
    moderate: 1.0,
    aggressive: 1.1
  }

  const baseReturn = baseReturns[type as keyof typeof baseReturns] || 0.1
  const multiplier = riskMultiplier[risk as keyof typeof riskMultiplier] || 1.0
  const annualReturn = baseReturn * multiplier
  
  const years = timeframe || 1
  const totalReturns = amount * Math.pow(1 + annualReturn, years) - amount
  
  return {
    annualReturnRate: (annualReturn * 100).toFixed(2) + '%',
    expectedTotalReturns: Math.round(totalReturns),
    finalAmount: Math.round(amount + totalReturns),
    timeframe: years + ' year' + (years > 1 ? 's' : '')
  }
}