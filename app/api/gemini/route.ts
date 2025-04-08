import { systemInstructionMessage } from '@/app/constants';
import { OfferSchema } from '@/libs/zod';
import { GoogleGenAI  } from '@google/genai';
import { NextRequest, NextResponse } from 'next/server';

const genAI = new GoogleGenAI({apiKey: '<api-key>'});

export async function POST(req: NextRequest) {
    try {
      const { prompt } = await req.json();
  
      if (!prompt || typeof prompt !== 'string') {
        return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
      }
  
      const model = await genAI.models.generateContent({
        model: 'gemini-2.0-flash',
        contents: prompt,
        config: {
          systemInstruction: systemInstructionMessage,
          maxOutputTokens: 500,
          temperature: 0.1,
          topP: 0.9,
          topK: 1,
        }
      });
  
      const text = model.text;
  
      let parsed;
      try {
        parsed = JSON.parse(text || "{}");
      } catch {
        return NextResponse.json({ error: "AI response is not valid JSON" }, { status: 500 });
      }
  
      const validated = OfferSchema.safeParse(parsed);
  
      if (!validated.success) {
        return NextResponse.json({ error: "Invalid AI response format", details: validated.error }, { status: 500 });
      }
  
      return NextResponse.json(validated.data);
    } catch (err: any) {
      console.error("Error:", err);
      return NextResponse.json({ error: err.message }, { status: 500 });
    }
  }
