/* global self caches fetch */

// The SW will be shutdown when not in use to save memory,
// be aware that any global state is likely to disappear
console.log('SW startup')

self.addEventListener('install', function (event) {
  console.log('SW installed')
  event.waitUntil(
    caches.open('princesspoopan.com').then(function (cache) {
      return cache.addAll([
        'index.html',
        'bundle.js',
        'https://fonts.googleapis.com/css?family=Great+Vibes',
        'https://fonts.gstatic.com/s/greatvibes/v4/6q1c0ofG6NKsEhAc2eh-3Ygp9Q8gbYrhqGlRav_IXfk.woff2'
      ])
    })
  )
})

self.addEventListener('fetch', function (event) {
  console.log('SW Fetched')
  event.respondWith(
    fetch(event.request).catch(function () {
      return caches.match(event.request)
    })
  )
})
