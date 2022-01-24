function toHTML() {
  return `
  <li class="db__record">
    <a href="#">Table One</a>
    <strong>24.12.2021</strong>
  </li>
  `
}

function getAllKeys() {
  const keys = []
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    if (!key.includes('excel')) {
      continue
    }
    keys.push(key)
  }
  return keys
}

export function createRecordsTable() {
  const keys = getAllKeys()
  console.log('keys ', keys)

  if (!keys.length) {
    return `<p>You didn't create any Table yet</p>`
  }

  return `
    <div class="db__list-header">
      <span>Name:</span>
      <span>Opened:</span>
    </div>
    <ul class="db__list">
        ${keys.map(toHTML).join('')}
    </ul>
  `
}
