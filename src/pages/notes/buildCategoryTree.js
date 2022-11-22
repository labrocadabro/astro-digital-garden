export function buildTree(paths) {
  let urls = paths.map((p) => p.url.split("/").slice(2));
  const tree = { files: [] };
  let currentDir = tree;
  for (let urlParts of urls) {
    for (let i = 0; i < urlParts.length; i++) {
      let part = urlParts[i];
      if (i === urlParts.length - 1) {
        currentDir.files.push(part);
        currentDir = tree;
      } else {
        if (!currentDir[part]) currentDir[part] = { files: [] };
        currentDir = currentDir[part];
      }
    }
  }
  return tree;
}
