export const prerender = true;

const CONFIG = `backend:
  name: github
  repo: bobbyZ94/asv
  branch: main
  base_url: https://sveltia-cms-auth.r-zioltkowski.workers.dev
  auth_endpoint: auth
locale: de
media_folder: static/uploads
public_folder: /uploads
collections: []
`;

export function GET() {
  return new Response(CONFIG, {
    headers: {
      'Content-Type': 'text/yaml; charset=utf-8'
    }
  });
}
