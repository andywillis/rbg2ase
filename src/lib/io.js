import { mkdir, writeFile as writeFileP, stat } from 'fs/promises';

async function addFolder(path) {
  try {
    const res = await mkdir(path);
    return res;
  } catch (err) {
    console.error(err.message);
  }
}

function writeFile(path, data) {
  try {
    return writeFileP(path, data);
  } catch (err) {
    console.error(err.message);
  }
}

async function pathExists(path) {
  try {
    await stat(path);
    return true;
  } catch (err) {
    return false;
  }
}

export { addFolder, writeFile, pathExists };
