// File: src/app/api/ping/route.js
export async function GET() {
  return new Response("✅ Backend is alive", {
    status: 200,
  });
}
