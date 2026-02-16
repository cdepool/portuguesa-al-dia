
import { GoogleGenAI } from "@google/genai";

const REPORT_CONTEXT = `
Eres un Consultor Senior experto en WordPress. Estás analizando el sitio PortuguesaAlDía.com.
Datos clave:
- Versión WP: 6.9.1
- Tema: Newsup
- Problema crítico: Carga lenta (>10s)
- Riesgo: Plugin WP File Manager instalado
- Plan: 4 fases (Días 1-3 Emergencia, Semanas 1-2 Estructura, Semanas 3-4 Engagement, Mantenimiento continuo).
Responde preguntas cortas, profesionales y enfocadas en mejorar el rendimiento y la seguridad basándote en el informe.
`;

export async function askConsultant(question: string): Promise<string> {
  const apiKey = import.meta.env.VITE_API_KEY;
  if (!apiKey) {
    console.warn("VITE_API_KEY is not defined. AI Consultant will be disabled.");
    return "El consultor AI no está configurado (falta API Key).";
  }

  const ai = new GoogleGenAI(apiKey);
  try {
    const model = ai.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction: REPORT_CONTEXT,
    });

    const result = await model.generateContent(question);
    const response = await result.response;
    return response.text() || "Lo siento, no pude procesar tu consulta en este momento.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error al conectar con el consultor AI.";
  }
}
