const fs = require('fs')
const path = require('path')

const root = path.join(__dirname, '..')
const envLocal = path.join(root, '.env.local')
const envExample = path.join(root, '.env.example')

console.log('\n--- StratgenAI form setup check ---\n')
console.log('Project folder:', root)

if (!fs.existsSync(envLocal)) {
  console.log('\n❌ MISSING: .env.local')
  console.log('\nWhat to do:')
  console.log('  1. Create file: .env.local  (in project ROOT, next to package.json)')
  console.log('  2. Add line: WEB3FORMS_ACCESS_KEY=your_key_from_web3forms.com')
  console.log('  3. Read SETUP-FORMS.txt for full steps')
  console.log('\n')
  process.exit(1)
}

const content = fs.readFileSync(envLocal, 'utf8')
const lines = content.split('\n').filter((line) => line.trim() && !line.trim().startsWith('#'))
const envLine = lines.find((line) => line.startsWith('WEB3FORMS_ACCESS_KEY'))
const match = envLine?.match(/WEB3FORMS_ACCESS_KEY\s*=\s*(.*)/)

if (!match || !match[1].trim() || match[1].trim() === 'your_access_key_here' || match[1].trim() === 'YOUR_KEY_HERE_PASTE_BETWEEN_EQUALS') {
  console.log('\n⚠️  .env.local exists but WEB3FORMS_ACCESS_KEY is empty or placeholder')
  console.log('  Paste your real key from https://web3forms.com\n')
  process.exit(1)
}

const key = match[1].trim().replace(/^["']|["']$/g, '')
if (key.length < 20) {
  console.log('\n⚠️  Key looks too short — copy full Access Key from Web3Forms dashboard\n')
  process.exit(1)
}

console.log('\n✅ OK — WEB3FORMS_ACCESS_KEY is set (' + key.slice(0, 8) + '...)')
console.log('   Restart dev server if you just added the key: npm run dev\n')
process.exit(0)
