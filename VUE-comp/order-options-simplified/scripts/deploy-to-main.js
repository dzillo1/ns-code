import {mkdirSync, copyFileSync, readdirSync, lstatSync} from "fs";
import {join} from "path";

function copyDir(src, dest) {
  mkdirSync(dest, { recursive: true });
  for (const entry of readdirSync(src)) {
    const srcPath = join(src, entry);
    const destPath = join(dest, entry);
    if (lstatSync(srcPath).isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      copyFileSync(srcPath, destPath);
    }
  }
}

const dist = join(process.cwd(), 'VUE-comp', 'order-options-simplified', 'dist');
const target = join(process.cwd(), 'VUE-comp', 'order-options-simplified');
console.log('Copying from', dist, 'to', target);
copyDir(dist, target);
console.log('Done');
