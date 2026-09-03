export type ArtworkCollection =
  | "Single Line Art"
  | "Floral & Ethereal"
  | "Botanical"
  | "Vintage"
  | "Angelic"
  | "Mediterranean"
  | "Cubic";

export type Artwork = {
  handle: string;
  title: string;
  priceCents: number;
  image: string;
  collection: ArtworkCollection;
  description: string;
  tags: string[];
};

export const catalog: Artwork[] = [
  { handle: "whispers-of-the-blue-lane", title: "Whispers of the Blue Lane", priceCents: 5600, image: "/manus-storage/whispers-of-the-blue-lane_59e37cc4.webp", collection: "Mediterranean", description: "A sunlit village passage where floral color, old stone, and distance invite a slower gaze.", tags: ["landscape", "village", "mediterranean"] },
  { handle: "the-garden-balcony", title: "The Garden Balcony", priceCents: 5800, image: "/manus-storage/the-garden-balcony_56c08fee.webp", collection: "Mediterranean", description: "An exuberant balcony of flowers opening toward a clear blue horizon.", tags: ["coastal", "floral", "mediterranean"] },
  { handle: "terrace-of-endless-summer", title: "Terrace of Endless Summer", priceCents: 5200, image: "/manus-storage/terrace-of-endless-summer_e9eca334.webp", collection: "Mediterranean", description: "A warm coastal terrace caught in the long light of an unhurried afternoon.", tags: ["coastal", "summer", "mediterranean"] },
  { handle: "mediterranean-dreamwalk", title: "Mediterranean Dreamwalk", priceCents: 5200, image: "/manus-storage/mediterranean-dreamwalk_8dfd8b13.webp", collection: "Mediterranean", description: "A flower-draped path toward the sea, painted in the colors of a remembered escape.", tags: ["coastal", "village", "mediterranean"] },
  { handle: "cycling-through-bloom", title: "Cycling Through Bloom", priceCents: 5000, image: "/manus-storage/cycling-through-bloom_d6fc579c.webp", collection: "Mediterranean", description: "A quiet bicycle waits amid cascading bloom and the textured geometry of an old lane.", tags: ["bicycle", "floral", "mediterranean"] },
  { handle: "beyond-the-blue-shutters", title: "Beyond the Blue Shutters", priceCents: 4600, image: "/manus-storage/beyond-the-blue-shutters_561e33b9.webp", collection: "Mediterranean", description: "Blue shutters frame a moment of salt air, light, and a distant sail.", tags: ["blue", "coastal", "window"] },
  { handle: "where-love-rests", title: "Where Love Rests", priceCents: 5000, image: "/manus-storage/where-love-rests_0c35cfc2.webp", collection: "Cubic", description: "A geometric portrait of tenderness, softened by roses and warm, composed color.", tags: ["romance", "couple", "portrait"] },
  { handle: "united-in-one-heart", title: "United in One Heart", priceCents: 4000, image: "/manus-storage/united-in-one-heart_dc59fcc5.webp", collection: "Cubic", description: "An expressive figure emerging through layered earth tones and quiet confidence.", tags: ["abstract", "portrait", "earth tones"] },
  { handle: "romantic-embrace", title: "The White Rose Promise", priceCents: 5000, image: "/manus-storage/romantic-embrace_a8b91a5e.webp", collection: "Cubic", description: "A timeless encounter in cubist planes, held together by a delicate bouquet.", tags: ["romance", "cubist", "portrait"] },
  { handle: "stillness-with-violin", title: "Stillness with Violin", priceCents: 4700, image: "/manus-storage/stillness-with-violin_8837f545.webp", collection: "Cubic", description: "Mirrored forms and a central violin make a study of balance, sound, and connection.", tags: ["music", "cubist", "portrait"] },
  { handle: "silent-kiss", title: "Silent Kiss", priceCents: 4700, image: "/manus-storage/silent-kiss_2f044e13.webp", collection: "Cubic", description: "A serene face is fragmented into a poised composition of amber, burgundy, and cream.", tags: ["abstract", "cubist", "portrait"] },
  { handle: "in-your-arms", title: "In Your Arms", priceCents: 4500, image: "/manus-storage/in-your-arms_1c4196f0.webp", collection: "Cubic", description: "A formal dance distilled into color, gesture, and intimate modern geometry.", tags: ["dance", "romance", "portrait"] },
  { handle: "breath-of-roses", title: "Breath of Roses", priceCents: 4500, image: "/manus-storage/breath-of-roses_df0ed194.webp", collection: "Cubic", description: "A rose-filled moment of connection, rendered in softly architectural fragments.", tags: ["roses", "romance", "cubist"] },
  { handle: "golden-serenity", title: "Golden Serenity", priceCents: 3500, image: "/manus-storage/golden-serenity_69e35e2b.webp", collection: "Angelic", description: "A contemplative angelic study in illuminated gold and calm blue.", tags: ["angel", "celestial", "spiritual"] },
  { handle: "gateway-to-heaven", title: "Gateway to Heaven", priceCents: 3500, image: "/manus-storage/gateway-to-heaven_91cfbdee.webp", collection: "Angelic", description: "A luminous gateway imagined through quiet sky, softness, and devotional light.", tags: ["angel", "celestial", "spiritual"] },
  { handle: "divine-serenity", title: "Divine Serenity", priceCents: 3500, image: "/manus-storage/divine-serenity_80902106.webp", collection: "Angelic", description: "A peaceful celestial portrait with an atmosphere of quiet reflection.", tags: ["angel", "celestial", "spiritual"] },
  { handle: "angels-in-glory", title: "Angels in Glory", priceCents: 3500, image: "/manus-storage/angels-in-glory_2ba94d9b.webp", collection: "Angelic", description: "A radiant ensemble of angelic form and gilded, cloud-borne light.", tags: ["angel", "celestial", "spiritual"] },
  { handle: "angel-of-dawn", title: "Angel of Dawn", priceCents: 3500, image: "/manus-storage/angel-of-dawn_4b671963.webp", collection: "Angelic", description: "A soft dawn-colored celestial portrait for a moment of stillness.", tags: ["angel", "celestial", "spiritual"] },
  { handle: "vintage-kitchen-moments", title: "Vintage Kitchen Moments", priceCents: 1299, image: "/manus-storage/vintage-kitchen-moments_3a586db8.webp", collection: "Vintage", description: "A warm domestic scene with the character of an inherited memory.", tags: ["vintage", "kitchen", "heritage"] },
  { handle: "the-gentleman-s-companion", title: "The Gentleman’s Companion", priceCents: 1299, image: "/manus-storage/the-gentleman-s-companion_6a32a37f.webp", collection: "Vintage", description: "A poised classic portrait that celebrates companionship and old-world detail.", tags: ["vintage", "dog", "heritage"] },
  { handle: "strings-of-time", title: "Strings of Time", priceCents: 1299, image: "/manus-storage/strings-of-time_f9f204dc.webp", collection: "Vintage", description: "A graceful musical scene in a timeless decorative register.", tags: ["vintage", "harp", "heritage"] },
  { handle: "rustic-grace-cooking-with-clay", title: "Rustic Grace Cooking with Clay", priceCents: 1299, image: "/manus-storage/rustic-grace-cooking-with-clay_1c31e101.webp", collection: "Vintage", description: "A tactile, rustic kitchen moment honoring handwork and tradition.", tags: ["vintage", "kitchen", "heritage"] },
  { handle: "noble-gaze", title: "Noble Gaze", priceCents: 1299, image: "/manus-storage/noble-gaze_19fe8c57.webp", collection: "Vintage", description: "A reserved portrait with the gravitas of a small antique painting.", tags: ["vintage", "portrait", "heritage"] },
  { handle: "melodies-of-the-past", title: "Melodies of the Past", priceCents: 1299, image: "/manus-storage/melodies-of-the-past_78741c96.webp", collection: "Vintage", description: "A vintage piano study with the soft atmosphere of a remembered room.", tags: ["vintage", "piano", "heritage"] },
  { handle: "two-blooms", title: "Two Blooms", priceCents: 699, image: "/manus-storage/two-blooms_7bddde14.webp", collection: "Botanical", description: "A minimal floral pairing drawn with poised, delicate economy.", tags: ["botanical", "line art", "minimal"] },
  { handle: "delicate-branch", title: "Delicate Branch", priceCents: 699, image: "/manus-storage/delicate-branch_a995e87b.webp", collection: "Botanical", description: "A restrained study of a single organic gesture.", tags: ["botanical", "line art", "minimal"] },
  { handle: "breath-of-nature", title: "Breath of Nature", priceCents: 699, image: "/manus-storage/breath-of-nature_3fcb60f4.webp", collection: "Botanical", description: "A botanical composition made for clean, calm interiors.", tags: ["botanical", "line art", "minimal"] },
  { handle: "botanical-reverie", title: "Monochrome Botanical Stem", priceCents: 699, image: "/manus-storage/botanical-reverie_677219f5.webp", collection: "Botanical", description: "A monochrome stem study with a modern, meditative hush.", tags: ["botanical", "monochrome", "minimal"] },
  { handle: "botanical-blush-flower", title: "Botanical Blush Flower", priceCents: 699, image: "/manus-storage/botanical-blush-flower_bcfe209d.webp", collection: "Botanical", description: "A soft-palette floral illustration for an elegant, personal corner.", tags: ["botanical", "blush", "minimal"] },
  { handle: "whisper-of-color", title: "Whisper of Color", priceCents: 999, image: "/manus-storage/whisper-of-color_74c7bfff.webp", collection: "Floral & Ethereal", description: "A watercolor floral portrait with a light, expressive wash of color.", tags: ["floral", "watercolor", "portrait"] },
  { handle: "petals-of-the-soul", title: "Petals of the Soul", priceCents: 999, image: "/manus-storage/petals-of-the-soul_90d440e9.webp", collection: "Floral & Ethereal", description: "A floral-inflected portrait balancing softness with presence.", tags: ["floral", "watercolor", "portrait"] },
  { handle: "floral-symphony", title: "Floral Symphony", priceCents: 999, image: "/manus-storage/floral-symphony_c5f108d9.webp", collection: "Floral & Ethereal", description: "A layered floral composition full of movement and painterly rhythm.", tags: ["floral", "watercolor", "botanical"] },
  { handle: "blossom-serenade", title: "Blossom Serenade", priceCents: 999, image: "/manus-storage/blossom-serenade_23471bc5.webp", collection: "Floral & Ethereal", description: "A serenade of blossom, gesture, and luminous watercolor tone.", tags: ["floral", "watercolor", "botanical"] },
  { handle: "aurora-of-flowers", title: "Aurora of Flowers", priceCents: 999, image: "/manus-storage/aurora-of-flowers_6ba17d8e.webp", collection: "Floral & Ethereal", description: "A blooming floral portrait with an aurora-like sense of soft color.", tags: ["floral", "watercolor", "portrait"] },
  { handle: "joyful-playtime", title: "Joyful Playtime", priceCents: 499, image: "/manus-storage/joyful-playtime_5d4d81b0.webp", collection: "Single Line Art", description: "A cheerful single-line moment made for a playful room.", tags: ["single line", "nursery", "minimal"] },
  { handle: "dinner-with-friends", title: "Good Times Together", priceCents: 499, image: "/manus-storage/dinner-with-friends_6f3bf3ce.webp", collection: "Single Line Art", description: "A clean line drawing that brings friendship and gathering into view.", tags: ["single line", "friendship", "minimal"] },
  { handle: "the-kiss", title: "The Kiss", priceCents: 499, image: "/manus-storage/the-kiss_182dd648.webp", collection: "Single Line Art", description: "A single continuous gesture of affection, pared back to its essence.", tags: ["single line", "love", "minimal"] },
  { handle: "a-joyful-embrace", title: "A Joyful Embrace", priceCents: 499, image: "/manus-storage/a-joyful-embrace_996ec326.webp", collection: "Single Line Art", description: "A minimal embrace filled with warmth and lightness.", tags: ["single line", "love", "minimal"] },
  { handle: "single-line-art-captivating", title: "Captivating", priceCents: 499, image: "/manus-storage/single-line-art-captivating_96b7b62a.webp", collection: "Single Line Art", description: "A graphic, feminine line study for a pared-back gallery wall.", tags: ["single line", "feminine", "minimal"] },
];

export const catalogByHandle = new Map(catalog.map(artwork => [artwork.handle, artwork]));
export const artworkCollections: ArtworkCollection[] = [
  "Mediterranean",
  "Cubic",
  "Angelic",
  "Vintage",
  "Botanical",
  "Floral & Ethereal",
  "Single Line Art",
];
