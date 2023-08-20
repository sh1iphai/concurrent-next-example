import { data } from "./data";

export async function GET() {
  // 擬似的に遅延させる
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return new Response(JSON.stringify(data));
}
