const CACHE_NAME = "teide-fr-v3";

const ASSETS = [
"./",
  "./index.html",
  "./FR-TEIDE.html",
  "./manifest.json",
  "./teide.geojson",
  "./icon-192.png",
  "./icon-512.png"
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

const TILES = [
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

// 1. INSTALL: Pre-cache static assets and all audio files for offline use
self.addEventListener("install", (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      console.log("[SW] Pre-caching assets and audio for offline...");
      await cache.addAll(ASSETS).catch(err => console.warn("[SW] Asset pre-cache warning:", err));
      
      // Pre-fetch all audio files with clean GET requests (no range header) to ensure 200 OK status
      for (const url of AUDIO_URLS) {
        try {
          const req = new Request(url, { method: "GET" });
          const res = await fetch(req);
          if (res && res.status === 200) {
            await cache.put(url, res);
          }
        } catch (err) {
          console.warn("[SW] Audio pre-cache warning for:", url, err);
        }
      }

      // Pre-cache tiles if available
      if (TILES.length > 0) {
        await cache.addAll(TILES).catch(err => console.warn("[SW] Tiles pre-cache warning:", err));
      }
    })
  );
});

// 2. ACTIVATE: Clean old caches & claim clients
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
});

// 3. FETCH: Smart Cache & HTTP Range Request handler for HTML5 <audio> offline playback
self.addEventListener("fetch", (e) => {
  const url = e.request.url;

  // Intercept audio requests (MP3s) or Supabase audio storage URLs
  if (url.endsWith(".mp3") || url.includes("supabase.co/storage/v1/object/public/")) {
    e.respondWith(handleAudioFetch(e.request));
    return;
  }

  // Standard static assets & tiles
  e.respondWith(
    caches.match(e.request).then((cachedRes) => {
      if (cachedRes) return cachedRes;
      return fetch(e.request).then((netRes) => {
        if (!netRes || netRes.status !== 200) {
          return netRes;
        }
        const resToCache = netRes.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(e.request, resToCache));
        return netRes;
      }).catch(() => {
        if (e.request.mode === "navigate") {
          return caches.match("./index.html");
        }
      });
    })
  );
});

// Helper: Handle HTTP Range Requests for cached audio files (iOS Safari & Android Chrome)
async function handleAudioFetch(request) {
  const cache = await caches.open(CACHE_NAME);
  let response = await cache.match(request.url);

  // If not cached yet, fetch online with clean GET
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

  // Handle Range Header for HTML5 <audio>
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
