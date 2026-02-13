const fs = require('fs');
const path = require('path');

let passed = 0;
let failed = 0;
function test(name, fn) { try { fn(); passed++; } catch (e) { console.error(`FAIL: ${name} - ${e.message}`); failed++; } }
function assert(condition, msg) { if (!condition) throw new Error(msg || 'Assertion failed'); }

const dir = path.join(__dirname, '..', 'src', 'components');
const components = ['Button','Card','Modal','Input','Select','Checkbox','Badge','Alert','Avatar','Tooltip','Tabs','Accordion','Breadcrumb','Pagination','Spinner'];

for (const name of components) {
  test(`${name} exists`, () => assert(fs.existsSync(path.join(dir, `${name}.js`))));
  test(`${name} uses React`, () => {
    const c = fs.readFileSync(path.join(dir, `${name}.js`), 'utf8');
    assert(c.includes("require('react')"));
  });
}

test('react is 18.x', () => {
  const pkg = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'package.json'), 'utf8'));
  assert(pkg.dependencies.react.startsWith('18'));
});

test('15 component files', () => {
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.js'));
  assert(files.length === 15, `Expected 15, got ${files.length}`);
});

test('at least 10 components use defaultProps', () => {
  let count = 0;
  for (const name of components) {
    const c = fs.readFileSync(path.join(dir, `${name}.js`), 'utf8');
    if (c.includes('defaultProps')) count++;
  }
  assert(count >= 10, `Expected >=10 with defaultProps, got ${count}`);
});

test('at least 3 use forwardRef', () => {
  let count = 0;
  for (const name of components) {
    const c = fs.readFileSync(path.join(dir, `${name}.js`), 'utf8');
    if (c.includes('forwardRef')) count++;
  }
  assert(count >= 3, `Expected >=3 with forwardRef, got ${count}`);
});

console.log(`\n${passed} passed, ${failed} failed`);
if (failed > 0) process.exit(1);
