import fs from "node:fs";
import path from "node:path";

const EXTENSIONS = ["jpg", "jpeg", "png", "webp"];

// Server-only: looks for public/<dir>/<basename>.{jpg,jpeg,png,webp} and
// returns the public URL if found. Lets pages render a real photo the
// moment a file is dropped in, with no code changes needed.
export function findImage(dir: string, basename: string): string | undefined {
  for (const ext of EXTENSIONS) {
    const abs = path.join(process.cwd(), "public", dir, `${basename}.${ext}`);
    if (fs.existsSync(abs)) {
      return `/${dir}/${basename}.${ext}`;
    }
  }
  return undefined;
}

export function slugify(text: string): string {
  return text.trim().toLowerCase().replace(/\s+/g, "-");
}

// Server-only: lists every image in public/<dir>/, sorted numerically by
// filename (1.jpg, 2.jpg, ... 10.jpg) so a gallery folder just works.
export function findImages(dir: string): string[] {
  const abs = path.join(process.cwd(), "public", dir);
  if (!fs.existsSync(abs)) return [];

  return fs
    .readdirSync(abs)
    .filter((file) => EXTENSIONS.includes(path.extname(file).slice(1).toLowerCase()))
    .sort((a, b) => {
      const na = parseInt(a, 10);
      const nb = parseInt(b, 10);
      if (!Number.isNaN(na) && !Number.isNaN(nb)) return na - nb;
      return a.localeCompare(b);
    })
    .map((file) => `/${dir}/${file}`);
}
