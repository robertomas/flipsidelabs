#!/usr/bin/env node

/**
 * Simple CSS Minifier Script
 * Usage: node minify-css.js
 * 
 * This will create a minified version of styles.css -> styles.min.css
 */

const fs = require('fs');
const path = require('path');

// Read the CSS file
const cssFile = path.join(__dirname, 'styles.css');
const outputFile = path.join(__dirname, 'styles.min.css');

console.log('🎨 Starting CSS minification...\n');

if (!fs.existsSync(cssFile)) {
    console.error('❌ Error: styles.css not found!');
    process.exit(1);
}

const css = fs.readFileSync(cssFile, 'utf8');
const originalSize = Buffer.byteLength(css, 'utf8');

// Basic minification (removes comments, whitespace, newlines)
let minified = css
    // Remove comments
    .replace(/\/\*[\s\S]*?\*\//g, '')
    // Remove newlines and tabs
    .replace(/\n/g, '')
    .replace(/\t/g, '')
    // Remove multiple spaces
    .replace(/\s+/g, ' ')
    // Remove spaces around special characters
    .replace(/\s*([{}:;,>+~])\s*/g, '$1')
    // Remove space before !important
    .replace(/\s*!important/g, '!important')
    // Remove trailing semicolons before }
    .replace(/;}/g, '}')
    // Remove leading/trailing spaces
    .trim();

const minifiedSize = Buffer.byteLength(minified, 'utf8');
const savings = ((1 - minifiedSize / originalSize) * 100).toFixed(2);

// Write the minified CSS
fs.writeFileSync(outputFile, minified, 'utf8');

console.log('✅ Minification complete!\n');
console.log('📊 Results:');
console.log(`   Original size:  ${(originalSize / 1024).toFixed(2)} KB`);
console.log(`   Minified size:  ${(minifiedSize / 1024).toFixed(2)} KB`);
console.log(`   Savings:        ${savings}% 🎉\n`);
console.log(`📁 Output: ${outputFile}\n`);
console.log('🔧 Next steps:');
console.log('   1. Update index.html to use styles.min.css');
console.log('   2. Keep styles.css for development');
console.log('   3. Re-run this script whenever you update styles.css\n');

