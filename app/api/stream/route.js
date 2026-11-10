export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export function GET() {
  const encoder = new TextEncoder();
  let timer;
  let step = 0;

  const body = new ReadableStream({
    start(controller) {
      timer = setInterval(() => {
        step += 1;
        controller.enqueue(encoder.encode(
          JSON.stringify({ step, total: 5 }) + "\n",
        ));
        if (step === 5) {
          clearInterval(timer);
          controller.close();
        }
      }, 300);
    },
    cancel() {
      clearInterval(timer);
    },
  });

  return new Response(body, {
    headers: {
      "Content-Type": "application/x-ndjson; charset=utf-8",
      "Cache-Control": "no-store, no-transform",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
