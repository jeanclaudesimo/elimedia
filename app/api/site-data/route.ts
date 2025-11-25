import { NextResponse } from 'next/server';
import { siteData } from '@/data/site-data';

export async function GET() {
  return NextResponse.json(siteData, {
    headers: {
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
