import { prisma } from '@/app/lib/prisma/prisma';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { id } = await req.json();

  try {
    const data = await prisma.linkGroup.findUnique(
      {
        where:id,
      }
    )
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: '取得に失敗しました' }, { status: 500 });
  }
}
