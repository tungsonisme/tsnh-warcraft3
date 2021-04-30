const glob = require("glob")
const fs = require("fs")

const extensions = ["png", "jpg", "mp4", "mp3"]

const getDirectories = function (src, callback) {
  glob(src + "/**/*", callback)
}

getDirectories("src", function (err, filePaths) {
  if (err) {
    console.log("Error: ", err)
  } else {
    const assetPaths = filePaths
      .filter((filePath) => {
        const fragments = filePath.split(".")
        const extention = fragments[fragments.length - 1]

        return extensions.includes(extention)
      })
      .map((filePath) => filePath.replace("src/", ""))

    let componentContent = ""
    const componentPath = "src/hocs/withAssetsFetched/assets.js"

    // Import every assets
    assetPaths.forEach(
      (assetPath, assetIndex) =>
        (componentContent += `import Asset${assetIndex} from '${assetPath}';\n`)
    )

    // Initialize array of assets
    componentContent += "\n"
    componentContent += `export const assetURLs = [${assetPaths
      .map((assetPath, assetIndex) => `Asset${assetIndex}`)
      .join(", ")}];`

    fs.writeFileSync(componentPath, componentContent)

    console.log(`Successfully: assets.js updated`)
  }
})
