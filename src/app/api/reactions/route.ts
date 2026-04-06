import { NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

const DB_FILE = path.join(process.cwd(), 'reactions.json')

async function readDB() {
  try {
    const data = await fs.readFile(DB_FILE, 'utf8')
    return JSON.parse(data)
  } catch (error) {
    // If file doesn't exist or is invalid, return empty object
    return {}
  }
}

async function writeDB(data: any) {
  try {
    await fs.writeFile(DB_FILE, JSON.stringify(data, null, 2))
  } catch (err) {
    console.error('Failed to write reactions', err)
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const slug = searchParams.get('slug')
  
  if (!slug) return NextResponse.json({ error: 'Slug required' }, { status: 400 })
  
  const db = await readDB()
  const reactions = db[slug] || { up: 0, down: 0, views: 0 }
  
  // Backwards compatibility for early rows
  if (reactions.views === undefined) reactions.views = 0
  
  return NextResponse.json(reactions)
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { slug, action } = body
    
    if (!slug || !['up', 'down', 'view'].includes(action)) {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
    }
    
    const db = await readDB()
    if (!db[slug]) {
      db[slug] = { up: 0, down: 0, views: 0 }
    }
    if (db[slug].views === undefined) {
      db[slug].views = 0
    }
    
    // Increment specific action
    db[slug][action] += 1
    
    await writeDB(db)
    
    return NextResponse.json(db[slug])
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
