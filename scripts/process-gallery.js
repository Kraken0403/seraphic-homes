import fs from "fs-extra"
import path from "path"
import sharp from "sharp"
import { fileURLToPath } from "url"

/* -----------------------
   PATH SETUP (ESM SAFE)
----------------------- */
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const INPUT_DIR = path.join(__dirname, "../public/gallery")
const BACKUP_DIR = path.join(__dirname, "../public/gallery-backup")

const MAX_WIDTH = 2000
const QUALITY = 82

async function processImages() {
  await fs.ensureDir(BACKUP_DIR)

  let files = await fs.readdir(INPUT_DIR)

  files = files.filter(f =>
    /\.(jpg|jpeg|png)$/i.test(f)
  )

  files.sort()

  console.log(`Found ${files.length} images`)

  let index = 1

  for (const file of files) {
    const inputPath = path.join(INPUT_DIR, file)

    const outputName = `img-${String(index).padStart(3, "0")}.webp`
    const outputPath = path.join(INPUT_DIR, outputName)

    const backupPath = path.join(BACKUP_DIR, file)

    // Backup original
    await fs.copy(inputPath, backupPath)

    console.log(`Processing → ${outputName}`)

    await sharp(inputPath)
      .resize({
        width: MAX_WIDTH,
        withoutEnlargement: true
      })
      .webp({ quality: QUALITY })
      .toFile(outputPath)

    index++
  }

  console.log("✅ Gallery processing complete")
}

processImages().catch(err => {
  console.error(err)
  process.exit(1)
})
