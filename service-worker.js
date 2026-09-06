const CACHE_NAME = "teide-fr-v11";

// 1. Core App Shell (Lightweight - installs in <300ms)
const CORE_ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css",
  "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js",
  "./FR-TEIDE.html",
  "./icon-192.png",
  "./icon-512.png",
  "./teide.geojson"
];

const AUDIO_URLS = [
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/teide_fr/1.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/teide_fr/2.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/teide_fr/3.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/teide_fr/4.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/teide_fr/5.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/teide_fr/6.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/teide_fr/7.mp3",
  "https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/teide_fr/8.mp3"
];

const TILE_URLS = [
  "./tiles/11/927/854.png",
  "./tiles/11/927/855.png",
  "./tiles/11/927/856.png",
  "./tiles/11/927/857.png",
  "./tiles/11/927/858.png",
  "./tiles/11/928/854.png",
  "./tiles/11/928/855.png",
  "./tiles/11/928/856.png",
  "./tiles/11/928/857.png",
  "./tiles/11/928/858.png",
  "./tiles/11/929/854.png",
  "./tiles/11/929/855.png",
  "./tiles/11/929/856.png",
  "./tiles/11/929/857.png",
  "./tiles/11/929/858.png",
  "./tiles/11/930/854.png",
  "./tiles/11/930/855.png",
  "./tiles/11/930/856.png",
  "./tiles/11/930/857.png",
  "./tiles/11/930/858.png",
  "./tiles/11/931/854.png",
  "./tiles/11/931/855.png",
  "./tiles/11/931/856.png",
  "./tiles/11/931/857.png",
  "./tiles/11/931/858.png",
  "./tiles/11/932/854.png",
  "./tiles/11/932/855.png",
  "./tiles/11/932/856.png",
  "./tiles/11/932/857.png",
  "./tiles/11/932/858.png",
  "./tiles/12/1855/1708.png",
  "./tiles/12/1855/1709.png",
  "./tiles/12/1855/1710.png",
  "./tiles/12/1855/1711.png",
  "./tiles/12/1855/1712.png",
  "./tiles/12/1855/1713.png",
  "./tiles/12/1855/1714.png",
  "./tiles/12/1855/1715.png",
  "./tiles/12/1855/1716.png",
  "./tiles/12/1856/1708.png",
  "./tiles/12/1856/1709.png",
  "./tiles/12/1856/1710.png",
  "./tiles/12/1856/1711.png",
  "./tiles/12/1856/1712.png",
  "./tiles/12/1856/1713.png",
  "./tiles/12/1856/1714.png",
  "./tiles/12/1856/1715.png",
  "./tiles/12/1856/1716.png",
  "./tiles/12/1857/1708.png",
  "./tiles/12/1857/1709.png",
  "./tiles/12/1857/1710.png",
  "./tiles/12/1857/1711.png",
  "./tiles/12/1857/1712.png",
  "./tiles/12/1857/1713.png",
  "./tiles/12/1857/1714.png",
  "./tiles/12/1857/1715.png",
  "./tiles/12/1857/1716.png",
  "./tiles/12/1858/1708.png",
  "./tiles/12/1858/1709.png",
  "./tiles/12/1858/1710.png",
  "./tiles/12/1858/1711.png",
  "./tiles/12/1858/1712.png",
  "./tiles/12/1858/1713.png",
  "./tiles/12/1858/1714.png",
  "./tiles/12/1858/1715.png",
  "./tiles/12/1858/1716.png",
  "./tiles/12/1859/1708.png",
  "./tiles/12/1859/1709.png",
  "./tiles/12/1859/1710.png",
  "./tiles/12/1859/1711.png",
  "./tiles/12/1859/1712.png",
  "./tiles/12/1859/1713.png",
  "./tiles/12/1859/1714.png",
  "./tiles/12/1859/1715.png",
  "./tiles/12/1859/1716.png",
  "./tiles/12/1860/1708.png",
  "./tiles/12/1860/1709.png",
  "./tiles/12/1860/1710.png",
  "./tiles/12/1860/1711.png",
  "./tiles/12/1860/1712.png",
  "./tiles/12/1860/1713.png",
  "./tiles/12/1860/1714.png",
  "./tiles/12/1860/1715.png",
  "./tiles/12/1860/1716.png",
  "./tiles/12/1861/1708.png",
  "./tiles/12/1861/1709.png",
  "./tiles/12/1861/1710.png",
  "./tiles/12/1861/1711.png",
  "./tiles/12/1861/1712.png",
  "./tiles/12/1861/1713.png",
  "./tiles/12/1861/1714.png",
  "./tiles/12/1861/1715.png",
  "./tiles/12/1861/1716.png",
  "./tiles/12/1862/1708.png",
  "./tiles/12/1862/1709.png",
  "./tiles/12/1862/1710.png",
  "./tiles/12/1862/1711.png",
  "./tiles/12/1862/1712.png",
  "./tiles/12/1862/1713.png",
  "./tiles/12/1862/1714.png",
  "./tiles/12/1862/1715.png",
  "./tiles/12/1862/1716.png",
  "./tiles/12/1863/1708.png",
  "./tiles/12/1863/1709.png",
  "./tiles/12/1863/1710.png",
  "./tiles/12/1863/1711.png",
  "./tiles/12/1863/1712.png",
  "./tiles/12/1863/1713.png",
  "./tiles/12/1863/1714.png",
  "./tiles/12/1863/1715.png",
  "./tiles/12/1863/1716.png",
  "./tiles/12/1864/1708.png",
  "./tiles/12/1864/1709.png",
  "./tiles/12/1864/1710.png",
  "./tiles/12/1864/1711.png",
  "./tiles/12/1864/1712.png",
  "./tiles/12/1864/1713.png",
  "./tiles/12/1864/1714.png",
  "./tiles/12/1864/1715.png",
  "./tiles/12/1864/1716.png",
  "./tiles/13/3715/3424.png",
  "./tiles/13/3715/3425.png",
  "./tiles/13/3715/3426.png",
  "./tiles/13/3715/3427.png",
  "./tiles/13/3716/3424.png",
  "./tiles/13/3716/3425.png",
  "./tiles/13/3716/3426.png",
  "./tiles/13/3716/3427.png",
  "./tiles/13/3717/3424.png",
  "./tiles/13/3717/3425.png",
  "./tiles/13/3717/3426.png",
  "./tiles/13/3717/3427.png",
  "./tiles/13/3718/3424.png",
  "./tiles/13/3718/3425.png",
  "./tiles/13/3718/3426.png",
  "./tiles/13/3718/3427.png",
  "./tiles/13/3719/3424.png",
  "./tiles/13/3719/3425.png",
  "./tiles/13/3719/3426.png",
  "./tiles/13/3719/3427.png",
  "./tiles/14/7432/6850.png",
  "./tiles/14/7432/6851.png",
  "./tiles/14/7432/6852.png",
  "./tiles/14/7432/6853.png",
  "./tiles/14/7433/6850.png",
  "./tiles/14/7433/6851.png",
  "./tiles/14/7433/6852.png",
  "./tiles/14/7433/6853.png",
  "./tiles/14/7434/6850.png",
  "./tiles/14/7434/6851.png",
  "./tiles/14/7434/6852.png",
  "./tiles/14/7434/6853.png",
  "./tiles/14/7435/6850.png",
  "./tiles/14/7435/6851.png",
  "./tiles/14/7435/6852.png",
  "./tiles/14/7435/6853.png",
  "./tiles/14/7436/6850.png",
  "./tiles/14/7436/6851.png",
  "./tiles/14/7436/6852.png",
  "./tiles/14/7436/6853.png",
  "./tiles/15/14866/13701.png",
  "./tiles/15/14866/13702.png",
  "./tiles/15/14866/13703.png",
  "./tiles/15/14866/13704.png",
  "./tiles/15/14866/13705.png",
  "./tiles/15/14866/13706.png",
  "./tiles/15/14867/13701.png",
  "./tiles/15/14867/13702.png",
  "./tiles/15/14867/13703.png",
  "./tiles/15/14867/13704.png",
  "./tiles/15/14867/13705.png",
  "./tiles/15/14867/13706.png",
  "./tiles/15/14868/13701.png",
  "./tiles/15/14868/13702.png",
  "./tiles/15/14868/13703.png",
  "./tiles/15/14868/13704.png",
  "./tiles/15/14868/13705.png",
  "./tiles/15/14868/13706.png",
  "./tiles/15/14869/13701.png",
  "./tiles/15/14869/13702.png",
  "./tiles/15/14869/13703.png",
  "./tiles/15/14869/13704.png",
  "./tiles/15/14869/13705.png",
  "./tiles/15/14869/13706.png",
  "./tiles/15/14870/13701.png",
  "./tiles/15/14870/13702.png",
  "./tiles/15/14870/13703.png",
  "./tiles/15/14870/13704.png",
  "./tiles/15/14870/13705.png",
  "./tiles/15/14870/13706.png",
  "./tiles/15/14871/13701.png",
  "./tiles/15/14871/13702.png",
  "./tiles/15/14871/13703.png",
  "./tiles/15/14871/13704.png",
  "./tiles/15/14871/13705.png",
  "./tiles/15/14871/13706.png",
  "./tiles/15/14872/13701.png",
  "./tiles/15/14872/13702.png",
  "./tiles/15/14872/13703.png",
  "./tiles/15/14872/13704.png",
  "./tiles/15/14872/13705.png",
  "./tiles/15/14872/13706.png",
  "./tiles/16/29735/27405.png",
  "./tiles/16/29735/27406.png",
  "./tiles/16/29735/27407.png",
  "./tiles/16/29735/27408.png",
  "./tiles/16/29735/27409.png",
  "./tiles/16/29735/27410.png",
  "./tiles/16/29736/27405.png",
  "./tiles/16/29736/27406.png",
  "./tiles/16/29736/27407.png",
  "./tiles/16/29736/27408.png",
  "./tiles/16/29736/27409.png",
  "./tiles/16/29736/27410.png",
  "./tiles/16/29737/27405.png",
  "./tiles/16/29737/27406.png",
  "./tiles/16/29737/27407.png",
  "./tiles/16/29737/27408.png",
  "./tiles/16/29737/27409.png",
  "./tiles/16/29737/27410.png",
  "./tiles/16/29738/27405.png",
  "./tiles/16/29738/27406.png",
  "./tiles/16/29738/27407.png",
  "./tiles/16/29738/27408.png",
  "./tiles/16/29738/27409.png",
  "./tiles/16/29738/27410.png",
  "./tiles/16/29739/27405.png",
  "./tiles/16/29739/27406.png",
  "./tiles/16/29739/27407.png",
  "./tiles/16/29739/27408.png",
  "./tiles/16/29739/27409.png",
  "./tiles/16/29739/27410.png",
  "./tiles/16/29740/27405.png",
  "./tiles/16/29740/27406.png",
  "./tiles/16/29740/27407.png",
  "./tiles/16/29740/27408.png",
  "./tiles/16/29740/27409.png",
  "./tiles/16/29740/27410.png",
  "./tiles/16/29741/27405.png",
  "./tiles/16/29741/27406.png",
  "./tiles/16/29741/27407.png",
  "./tiles/16/29741/27408.png",
  "./tiles/16/29741/27409.png",
  "./tiles/16/29741/27410.png",
  "./tiles/16/29742/27405.png",
  "./tiles/16/29742/27406.png",
  "./tiles/16/29742/27407.png",
  "./tiles/16/29742/27408.png",
  "./tiles/16/29742/27409.png",
  "./tiles/16/29742/27410.png",
  "./tiles/16/29743/27405.png",
  "./tiles/16/29743/27406.png",
  "./tiles/16/29743/27407.png",
  "./tiles/16/29743/27408.png",
  "./tiles/16/29743/27409.png",
  "./tiles/16/29743/27410.png",
  "./tiles/17/59474/54813.png",
  "./tiles/17/59474/54814.png",
  "./tiles/17/59474/54815.png",
  "./tiles/17/59474/54816.png",
  "./tiles/17/59474/54817.png",
  "./tiles/17/59474/54818.png",
  "./tiles/17/59475/54813.png",
  "./tiles/17/59475/54814.png",
  "./tiles/17/59475/54815.png",
  "./tiles/17/59475/54816.png",
  "./tiles/17/59475/54817.png",
  "./tiles/17/59475/54818.png",
  "./tiles/17/59476/54813.png",
  "./tiles/17/59476/54814.png",
  "./tiles/17/59476/54815.png",
  "./tiles/17/59476/54816.png",
  "./tiles/17/59476/54817.png",
  "./tiles/17/59476/54818.png",
  "./tiles/17/59477/54813.png",
  "./tiles/17/59477/54814.png",
  "./tiles/17/59477/54815.png",
  "./tiles/17/59477/54816.png",
  "./tiles/17/59477/54817.png",
  "./tiles/17/59477/54818.png",
  "./tiles/17/59478/54813.png",
  "./tiles/17/59478/54814.png",
  "./tiles/17/59478/54815.png",
  "./tiles/17/59478/54816.png",
  "./tiles/17/59478/54817.png",
  "./tiles/17/59478/54818.png",
  "./tiles/17/59479/54813.png",
  "./tiles/17/59479/54814.png",
  "./tiles/17/59479/54815.png",
  "./tiles/17/59479/54816.png",
  "./tiles/17/59479/54817.png",
  "./tiles/17/59479/54818.png",
  "./tiles/17/59480/54813.png",
  "./tiles/17/59480/54814.png",
  "./tiles/17/59480/54815.png",
  "./tiles/17/59480/54816.png",
  "./tiles/17/59480/54817.png",
  "./tiles/17/59480/54818.png",
  "./tiles/17/59481/54813.png",
  "./tiles/17/59481/54814.png",
  "./tiles/17/59481/54815.png",
  "./tiles/17/59481/54816.png",
  "./tiles/17/59481/54817.png",
  "./tiles/17/59481/54818.png",
  "./tiles/17/59482/54813.png",
  "./tiles/17/59482/54814.png",
  "./tiles/17/59482/54815.png",
  "./tiles/17/59482/54816.png",
  "./tiles/17/59482/54817.png",
  "./tiles/17/59482/54818.png",
  "./tiles/17/59483/54813.png",
  "./tiles/17/59483/54814.png",
  "./tiles/17/59483/54815.png",
  "./tiles/17/59483/54816.png",
  "./tiles/17/59483/54817.png",
  "./tiles/17/59483/54818.png",
  "./tiles/17/59484/54813.png",
  "./tiles/17/59484/54814.png",
  "./tiles/17/59484/54815.png",
  "./tiles/17/59484/54816.png",
  "./tiles/17/59484/54817.png",
  "./tiles/17/59484/54818.png"
];

// 1. INSTALL: Instant installation of core app shell
self.addEventListener("install", (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("[SW] Pre-caching core app shell...");
      return cache.addAll(CORE_ASSETS).catch((err) => {
        console.warn("[SW] App shell pre-cache warning:", err);
      });
    })
  );
});

// 2. ACTIVATE: Clean old caches, claim clients & run parallel background pre-cache
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      )
    ).then(() => self.clients.claim())
  );

  // Background caching of all audio files & map tiles (non-blocking)
  preCacheOfflineContent();
});

// Message listener for skip waiting
self.addEventListener("message", (e) => {
  if (e.data && e.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

// Fast parallel batch precaching function
async function preCacheOfflineContent() {
  try {
    const cache = await caches.open(CACHE_NAME);
    console.log("[SW] Starting background precache for tiles and audio...");

    // Helper for fast parallel batch fetch
    async function fetchBatch(urls, batchSize) {
      for (let i = 0; i < urls.length; i += batchSize) {
        const batch = urls.slice(i, i + batchSize);
        await Promise.all(
          batch.map(async (url) => {
            try {
              const req = url.endsWith(".mp3") ? new Request(url, { method: "GET" }) : url;
              const res = await fetch(req);
              if (res && res.status === 200) {
                await cache.put(url, res);
              }
            } catch (err) {
              // Silently ignore individual tile/audio network glitches
            }
          })
        );
      }
    }

    // Pre-cache all audio MP3 files (3 at a time)
    await fetchBatch(AUDIO_URLS, 3);
    // Pre-cache all map tile PNGs (15 at a time)
    await fetchBatch(TILE_URLS, 15);

    console.log("[SW] Background precache complete! Notifying app...");

    // Notify all open client tabs/windows
    const clientsList = await self.clients.matchAll();
    for (const client of clientsList) {
      client.postMessage({ type: "CACHE_COMPLETE" });
    }
  } catch (err) {
    console.warn("[SW] Background precache warning:", err);
  }
}

// 3. FETCH: Smart Cache-First for Assets/Tiles + HTTP Range Request Handler for Audios
self.addEventListener("fetch", (e) => {
  const url = e.request.url;

  // Audio Range Request Handler for HTML5 Audio (iOS & Android)
  if (url.endsWith(".mp3") || url.includes("supabase.co/storage/v1/object/public/")) {
    e.respondWith(handleAudioFetch(e.request));
    return;
  }

  // Cache-First strategy for Map Tiles & App Assets
  e.respondWith(
    caches.match(e.request).then((cachedRes) => {
      if (cachedRes) return cachedRes;
      return fetch(e.request).then((netRes) => {
        if (netRes && netRes.status === 200) {
          const resToCache = netRes.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(e.request, resToCache));
        }
        return netRes;
      }).catch(() => {
        if (e.request.mode === "navigate") {
          return caches.match("./index.html");
        }
      });
    })
  );
});

// Helper: Handle HTTP Range Requests for cached audio files
async function handleAudioFetch(request) {
  const cache = await caches.open(CACHE_NAME);
  let response = await cache.match(request.url);

  if (!response) {
    try {
      const cleanReq = new Request(request.url, { method: "GET" });
      const netRes = await fetch(cleanReq);
      if (netRes && netRes.status === 200) {
        await cache.put(request.url, netRes.clone());
        response = netRes;
      } else {
        return netRes;
      }
    } catch (err) {
      console.error("[SW] Audio offline & not cached:", request.url);
      return new Response("Audio offline not available", { status: 503 });
    }
  }

  const rangeHeader = request.headers.get("range");
  if (rangeHeader && response) {
    const arrayBuffer = await response.clone().arrayBuffer();
    const bytes = rangeHeader.replace(/bytes=/, "").split("-");
    const start = parseInt(bytes[0], 10) || 0;
    const end = bytes[1] ? parseInt(bytes[1], 10) : arrayBuffer.byteLength - 1;
    const chunk = arrayBuffer.slice(start, end + 1);

    return new Response(chunk, {
      status: 206,
      statusText: "Partial Content",
      headers: new Headers({
        "Content-Range": `bytes ${start}-${end}/${arrayBuffer.byteLength}`,
        "Content-Length": chunk.byteLength,
        "Content-Type": "audio/mpeg",
        "Accept-Ranges": "bytes"
      })
    });
  }

  return response;
}
