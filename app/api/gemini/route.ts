import { systemInstructionMessage } from '@/app/constants';
import { GoogleGenAI  } from '@google/genai';
import { NextRequest, NextResponse } from 'next/server';

const genAI = new GoogleGenAI({apiKey: '<your-api-key>'});

export async function POST(req: NextRequest) {
  const { prompt } = await req.json();

  try {
    const model = await genAI.models.generateContent({ 
        model: 'gemini-2.0-flash', 
        contents:  prompt,
        config: {
            systemInstruction: systemInstructionMessage,
            maxOutputTokens: 500,
            temperature: 0.1,
            topP: 0.95,
            topK: 1
        }
    });

    const text = model.text;

    return NextResponse.json({ text });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
