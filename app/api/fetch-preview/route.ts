import { getLinkPreview } from 'link-preview-js';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { url } = await req.json();

  try {
    const data = await getLinkPreview(url);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: '取得に失敗しました' }, { status: 500 });
  }
}
