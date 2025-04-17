export function middleware(request) {
  const referer = request.headers.get("referer") || "";
  const origin = request.headers.get("origin") || "";

  const allowedDomain = "https://msmofworld.top";

  // যদি কেউ সরাসরি ভিজিট করে বা অন্য সাইট থেকে আসে, ব্লক করো
  if (!referer.startsWith(allowedDomain) && !origin.startsWith(allowedDomain)) {
    return new Response("Embedding only allowed from msmofworld.top", {
      status: 403,
      headers: {
        "Content-Type": "text/plain"
      }
    });
  }

  // অনুমতি থাকলে এগিয়ে যাও
  return;
}
