/// <reference lib="webworker" />

declare const self: ServiceWorkerGlobalScope

self.addEventListener('install', (event: ExtendableEvent) => {
  console.log('SW installed')
  event.waitUntil(
    caches.open('princesspoopan.com').then((cache) => {
      return cache.addAll([
        'index.html',
        'bundle.js',
        'https://fonts.googleapis.com/css?family=Great+Vibes',
        'https://fonts.gstatic.com/s/greatvibes/v4/6q1c0ofG6NKsEhAc2eh-3Ygp9Q8gbYrhqGlRav_IXfk.woff2'
      ])
    })
  )
})

self.addEventListener('fetch', (event: FetchEvent) => {
  console.log('SW Fetched')
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request) as Promise<Response>
    })
  )
})
