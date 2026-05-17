import { NextRequest, NextResponse } from 'next/server'

// Dummy schema for contact form data
interface ContactData {
  id?: string
  name: string
  email: string
  phone?: string
  subject: string
  message: string
  createdAt?: string
  status?: string
}

// Simple in-memory storage for dummy data
let contactSubmissions: ContactData[] = []

// GET endpoint - retrieve all contact submissions (for admin dashboard)
export async function GET(request: NextRequest) {
  try {
    // In a real app, this would check authentication
    console.log('[v0] GET /api/contact - Retrieving contacts')
    
    return NextResponse.json({
      success: true,
      data: contactSubmissions,
      count: contactSubmissions.length,
      message: 'Contact submissions retrieved successfully'
    }, { status: 200 })
  } catch (error) {
    console.error('[v0] GET /api/contact error:', error)
    return NextResponse.json({
      success: false,
      message: 'Failed to retrieve contact submissions'
    }, { status: 500 })
  }
}

// POST endpoint - create new contact submission
export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as ContactData
    
    // Validate required fields
    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json({
        success: false,
        message: 'Missing required fields: name, email, subject, message'
      }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json({
        success: false,
        message: 'Invalid email format'
      }, { status: 400 })
    }

    // Create new contact submission with metadata
    const newContact: ContactData = {
      id: `contact_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      name: body.name,
      email: body.email,
      phone: body.phone || '',
      subject: body.subject,
      message: body.message,
      createdAt: new Date().toISOString(),
      status: 'new'
    }

    // Store in dummy database
    contactSubmissions.push(newContact)
    
    console.log('[v0] Contact submission received:', {
      id: newContact.id,
      name: newContact.name,
      email: newContact.email,
      subject: newContact.subject,
      createdAt: newContact.createdAt
    })

    // Return 200 as requested
    return NextResponse.json({
      success: true,
      data: newContact,
      message: 'Contact submission received successfully. We will get back to you soon.'
    }, { status: 200 })

  } catch (error) {
    console.error('[v0] POST /api/contact error:', error)
    return NextResponse.json({
      success: false,
      message: 'Failed to process contact submission'
    }, { status: 500 })
  }
}

// DELETE endpoint - clear all submissions (admin only)
export async function DELETE(request: NextRequest) {
  try {
    const initialCount = contactSubmissions.length
    contactSubmissions = []
    
    console.log('[v0] Cleared all contact submissions')
    
    return NextResponse.json({
      success: true,
      message: `Cleared ${initialCount} contact submissions`
    }, { status: 200 })
  } catch (error) {
    console.error('[v0] DELETE /api/contact error:', error)
    return NextResponse.json({
      success: false,
      message: 'Failed to clear submissions'
    }, { status: 500 })
  }
}
