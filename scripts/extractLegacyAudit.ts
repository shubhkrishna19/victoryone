import fs from "node:fs";
import path from "node:path";

const appRoot = process.cwd();
const workspaceRoot = path.resolve(appRoot, "..");
const legacyThemeRoot = path.join(workspaceRoot, "victoryone-backup (1)", "wp-content", "themes", "vctryone");
const sqlDumpPath = path.join(workspaceRoot, "victoryone.sql", "victoryone.sql");

const legacyFiles = [
  "functions.php",
  "header.php",
  "footer.php",
  "assets/include/header.php",
  "assets/include/style.php",
  "assets/include/script.php",
  "hometamplate.php",
  "projectamaratamplate.php",
  "project-centraltamplate.php",
  "Past-project-tamplate.php",
  "awardtamplate.php",
  "Eventtamplate.php",
  "Contacttamplate.php",
  "career.php",
  "faqtamplate.php",
  "Teamtamplate.php",
  "message-form-chairmantamplate.php",
  "Mdintriviewstamplate.php",
  "Newspapapertamplate.php",
  "single.php",
  "central-commercialtamplate.php",
  "amara-comercialtamplate.php",
  "process.php",
] as const;

const markerPatterns = [
  "<!DOCTYPE",
  "<html",
  "get_header(",
  "get_footer(",
  "include",
  "require",
  "query_posts",
  "WP_Query",
  "get_field(",
  "the_field(",
  "$_POST",
  "mail(",
  "die;",
  "category",
] as const;

function collectMarkers(lines: string[]) {
  return markerPatterns.flatMap((pattern) =>
    lines.flatMap((line, index) =>
      line.includes(pattern)
        ? [
            {
              pattern,
              line: index + 1,
              excerpt: line.trim().slice(0, 180),
            },
          ]
        : [],
    ),
  );
}

function collectFileAudit(relativePath: string) {
  const absolutePath = path.join(legacyThemeRoot, relativePath);
  if (!fs.existsSync(absolutePath)) {
    return {
      path: relativePath,
      absolutePath,
      exists: false,
    };
  }

  const content = fs.readFileSync(absolutePath, "utf8");
  const lines = content.split(/\r?\n/);

  return {
    path: relativePath,
    absolutePath,
    exists: true,
    lineCount: lines.length,
    markers: collectMarkers(lines),
  };
}

function main() {
  const audit = {
    generatedAt: new Date().toISOString(),
    legacyThemeRoot,
    sqlDumpPath,
    sqlDumpExists: fs.existsSync(sqlDumpPath),
    files: legacyFiles.map(collectFileAudit),
  };

  const docsDir = path.join(appRoot, "docs");
  if (!fs.existsSync(docsDir)) {
    fs.mkdirSync(docsDir, { recursive: true });
  }

  const outputPath = path.join(docsDir, "legacy-extract.json");
  fs.writeFileSync(outputPath, JSON.stringify(audit, null, 2));
  console.info(`Legacy audit extract written to ${outputPath}`);
}

main();
