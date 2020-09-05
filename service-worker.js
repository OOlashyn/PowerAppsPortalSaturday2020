importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

const {registerRoute, NavigationRoute} = workbox.routing;
const {NetworkOnly} = workbox.strategies;

self.addEventListener('install', async (event) => {
  event.waitUntil(
    //Initial caching happens here
  );
});

const networkOnly = new NetworkOnly();
const navigationHandler = async (params) => {
  try {
    // Attempt a network request.
    return await networkOnly.handle(params);
  } catch (error) {
    // If it fails, return the cached HTML.
    // or in this case static html
    return new Response(
      `<div style="text-align:center; margin-top:40px;">
      <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
      width="144.000000pt" height="144.000000pt" viewBox="0 0 144.000000 144.000000"
      preserveAspectRatio="xMidYMid meet">
     <metadata>
     Created by potrace 1.16, written by Peter Selinger 2001-2019
     </metadata>
     <g transform="translate(0.000000,144.000000) scale(0.100000,-0.100000)"
     fill="#000000" stroke="none">
     <path d="M480 1340 l0 -30 240 0 240 0 0 30 0 30 -240 0 -240 0 0 -30z"/>
     <path d="M438 1264 c-15 -8 -32 -23 -38 -34 -6 -11 -10 -119 -10 -274 l0 -256
     60 0 61 0 -30 38 c-69 85 -84 220 -36 317 113 232 437 232 550 0 48 -97 33
     -232 -36 -318 l-30 -37 61 0 60 0 0 256 c0 156 -4 263 -10 275 -24 45 -54 49
     -322 49 -204 -1 -258 -4 -280 -16z"/>
     <path d="M605 1176 c-106 -49 -175 -170 -161 -279 30 -222 288 -324 455 -180
     194 166 77 483 -179 483 -47 0 -79 -7 -115 -24z m282 -183 c106 -112 8 -273
     -167 -273 -175 0 -273 161 -167 273 l32 34 135 0 135 1 32 -35z"/>
     <path d="M797 1003 c-4 -3 -53 -7 -109 -7 l-102 -1 -23 -34 c-66 -98 19 -216
     157 -216 135 0 220 114 160 213 -11 18 -32 37 -46 42 -30 12 -29 12 -37 3z"/>
     <path d="M322 650 c-59 -36 -72 -71 -72 -192 l0 -107 43 -3 42 -3 0 -70 0 -70
     -42 -3 -43 -3 0 -65 0 -65 83 3 82 3 5 265 c4 231 7 269 23 293 9 14 17 29 17
     32 0 15 -108 3 -138 -15z"/>
     <path d="M479 638 c-23 -32 -24 -39 -29 -297 -3 -174 -2 -265 5 -267 6 -3 129
     -3 273 -2 l263 3 -1 249 c-1 222 -3 254 -20 292 -24 56 -53 64 -122 34 -78
     -33 -151 -37 -223 -10 -102 37 -119 37 -146 -2z"/>
     <path d="M993 633 c21 -36 22 -52 27 -298 l5 -260 83 -3 82 -3 0 80 0 80 -42
     3 -43 3 0 135 0 135 43 3 c38 3 42 6 42 30 0 38 -42 96 -83 116 -19 9 -58 16
     -86 16 l-50 0 22 -37z"/>
     </g>
     </svg>
        <h2>Nice! You are currently offline!</h2>
      <div>`, 
      {
        status: 503,
        statusText: 'Service Unavailable',
        headers: new Headers({
          'Content-Type': 'text/html'
        })
    });
  }
};

// Register this strategy to handle all navigations.
registerRoute(
  new NavigationRoute(navigationHandler)
);