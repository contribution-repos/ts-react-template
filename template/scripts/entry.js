const { getExportProps } = require('@umijs/ast');
const { readFileSync } = require('fs');
const { resolve, basename, join } = require('path');
const glob = require('glob');

const userConfig = require('../esboot.config');
const rootPath = resolve(__dirname, '../src');

function getEntryList() {
  console.log(process.env.ENTRY_MODULE);
  const { html } = userConfig;
  if (html) return html;

  const list = [];
  const files = glob.sync('/**/*.entry.tsx', {
    root: join(rootPath, process.env.START_PATH || './'),
  });

  files.forEach((file, index) => {
    const { title, template, name } = getExportProps(readFileSync(file, 'utf-8')) || {};
    const filename = basename(file, '.entry.tsx');

    const entryInfo = {
      name: name || filename,
      title: title || filename,
      entry: file,
    };
    if (template) entryInfo.template = template;

    list.push(entryInfo);
  });

  return list;
}

module.exports = getEntryList;
