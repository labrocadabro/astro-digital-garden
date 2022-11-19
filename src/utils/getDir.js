export function getDir(str) {
  return str.match(/^\.\/(.*)\/.*\.md$/);
}
