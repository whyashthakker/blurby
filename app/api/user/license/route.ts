import { NextResponse } from 'next/server';
import { getUser, getLicenseKeyByUser } from '@/lib/db/queries';

export async function GET() {
  try {
    const user = await getUser();
    
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const licenseKey = await getLicenseKeyByUser(user.id);
    
    return NextResponse.json(licenseKey);
  } catch (error) {
    console.error('Error fetching license key:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}