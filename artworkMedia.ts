export type ArtworkGalleryItem = {
  url: string;
  label: string;
  kind: "mockup" | "size-guide";
};

export type ArtworkMedia = {
  gallery: ArtworkGalleryItem[];
  video: string | null;
};

export const artworkMediaByHandle: Record<string, ArtworkMedia> = {
  "whispers-of-the-blue-lane": {
    "gallery": [
      {
        "url": "/manus-storage/whispers-of-the-blue-lane-view-1_05038dcd.webp",
        "label": "Artwork preview 1",
        "kind": "mockup"
      },
      {
        "url": "/manus-storage/whispers-of-the-blue-lane-view-2_3161d528.webp",
        "label": "Artwork preview 2",
        "kind": "mockup"
      },
      {
        "url": "/manus-storage/whispers-of-the-blue-lane-view-3_1413e712.webp",
        "label": "Available print sizes",
        "kind": "size-guide"
      }
    ],
    "video": "/manus-storage/whispers-of-the-blue-lane-preview_f389e6be.mp4"
  },
  "the-garden-balcony": {
    "gallery": [
      {
        "url": "/manus-storage/the-garden-balcony-view-1_c1be2908.webp",
        "label": "Artwork preview 1",
        "kind": "mockup"
      },
      {
        "url": "/manus-storage/the-garden-balcony-view-2_9dfab181.webp",
        "label": "Artwork preview 2",
        "kind": "mockup"
      },
      {
        "url": "/manus-storage/the-garden-balcony-view-3_6aed559f.webp",
        "label": "Available print sizes",
        "kind": "size-guide"
      }
    ],
    "video": "/manus-storage/the-garden-balcony-preview_7e0f9ed0.mp4"
  },
  "terrace-of-endless-summer": {
    "gallery": [
      {
        "url": "/manus-storage/terrace-of-endless-summer-view-1_84cad829.webp",
        "label": "Artwork preview 1",
        "kind": "mockup"
      },
      {
        "url": "/manus-storage/terrace-of-endless-summer-view-2_0f5c2d0c.webp",
        "label": "Artwork preview 2",
        "kind": "mockup"
      },
      {
        "url": "/manus-storage/terrace-of-endless-summer-view-3_81a7eb2a.webp",
        "label": "Available print sizes",
        "kind": "size-guide"
      }
    ],
    "video": "/manus-storage/terrace-of-endless-summer-preview_9efb4241.mp4"
  },
  "mediterranean-dreamwalk": {
    "gallery": [
      {
        "url": "/manus-storage/mediterranean-dreamwalk-view-1_3f48e4c1.webp",
        "label": "Artwork preview 1",
        "kind": "mockup"
      },
      {
        "url": "/manus-storage/mediterranean-dreamwalk-view-2_1db83fbc.webp",
        "label": "Artwork preview 2",
        "kind": "mockup"
      },
      {
        "url": "/manus-storage/mediterranean-dreamwalk-view-3_04a1fc87.webp",
        "label": "Available print sizes",
        "kind": "size-guide"
      }
    ],
    "video": "/manus-storage/mediterranean-dreamwalk-preview_664f8fe8.mp4"
  },
  "cycling-through-bloom": {
    "gallery": [
      {
        "url": "/manus-storage/cycling-through-bloom-view-1_dbab04cc.webp",
        "label": "Artwork preview 1",
        "kind": "mockup"
      },
      {
        "url": "/manus-storage/cycling-through-bloom-view-2_d3a597fb.webp",
        "label": "Artwork preview 2",
        "kind": "mockup"
      },
      {
        "url": "/manus-storage/cycling-through-bloom-view-3_f7e698b4.webp",
        "label": "Available print sizes",
        "kind": "size-guide"
      }
    ],
    "video": "/manus-storage/cycling-through-bloom-preview_689ee955.mp4"
  },
  "beyond-the-blue-shutters": {
    "gallery": [
      {
        "url": "/manus-storage/beyond-the-blue-shutters-view-1_cdd2900a.webp",
        "label": "Artwork preview 1",
        "kind": "mockup"
      },
      {
        "url": "/manus-storage/beyond-the-blue-shutters-view-2_0c8a8d4f.webp",
        "label": "Artwork preview 2",
        "kind": "mockup"
      },
      {
        "url": "/manus-storage/beyond-the-blue-shutters-view-3_5b90547a.webp",
        "label": "Available print sizes",
        "kind": "size-guide"
      }
    ],
    "video": "/manus-storage/beyond-the-blue-shutters-preview_ff7a33ac.mp4"
  },
  "where-love-rests": {
    "gallery": [
      {
        "url": "/manus-storage/where-love-rests-view-1_d5a95311.webp",
        "label": "Artwork preview 1",
        "kind": "mockup"
      },
      {
        "url": "/manus-storage/where-love-rests-view-2_ddedc4b9.webp",
        "label": "Artwork preview 2",
        "kind": "mockup"
      },
      {
        "url": "/manus-storage/where-love-rests-view-3_f90490a0.webp",
        "label": "Available print sizes",
        "kind": "size-guide"
      }
    ],
    "video": "/manus-storage/where-love-rests-preview_3ff5e44b.mp4"
  },
  "united-in-one-heart": {
    "gallery": [
      {
        "url": "/manus-storage/united-in-one-heart-view-1_ae9794f1.webp",
        "label": "Artwork preview 1",
        "kind": "mockup"
      },
      {
        "url": "/manus-storage/united-in-one-heart-view-2_e4be7202.webp",
        "label": "Artwork preview 2",
        "kind": "mockup"
      },
      {
        "url": "/manus-storage/united-in-one-heart-view-3_74e6773c.webp",
        "label": "Available print sizes",
        "kind": "size-guide"
      }
    ],
    "video": "/manus-storage/united-in-one-heart-preview_a1a05702.mp4"
  },
  "romantic-embrace": {
    "gallery": [
      {
        "url": "/manus-storage/romantic-embrace-view-1_0d96cd0c.webp",
        "label": "Artwork preview 1",
        "kind": "mockup"
      },
      {
        "url": "/manus-storage/romantic-embrace-view-2_dddf266c.webp",
        "label": "Artwork preview 2",
        "kind": "mockup"
      },
      {
        "url": "/manus-storage/romantic-embrace-view-3_824dd490.webp",
        "label": "Available print sizes",
        "kind": "size-guide"
      }
    ],
    "video": "/manus-storage/romantic-embrace-preview_8edf09b3.mp4"
  },
  "stillness-with-violin": {
    "gallery": [
      {
        "url": "/manus-storage/stillness-with-violin-view-1_af9a26d2.webp",
        "label": "Artwork preview 1",
        "kind": "mockup"
      },
      {
        "url": "/manus-storage/stillness-with-violin-view-2_217afb83.webp",
        "label": "Artwork preview 2",
        "kind": "mockup"
      },
      {
        "url": "/manus-storage/stillness-with-violin-view-3_a53d69fb.webp",
        "label": "Available print sizes",
        "kind": "size-guide"
      }
    ],
    "video": "/manus-storage/stillness-with-violin-preview_aaf01034.mp4"
  },
  "silent-kiss": {
    "gallery": [
      {
        "url": "/manus-storage/silent-kiss-view-1_06f7cafc.webp",
        "label": "Artwork preview 1",
        "kind": "mockup"
      },
      {
        "url": "/manus-storage/silent-kiss-view-2_60d2804f.webp",
        "label": "Artwork preview 2",
        "kind": "mockup"
      },
      {
        "url": "/manus-storage/silent-kiss-view-3_658077d4.webp",
        "label": "Available print sizes",
        "kind": "size-guide"
      }
    ],
    "video": "/manus-storage/silent-kiss-preview_6d8bd0e8.mp4"
  },
  "in-your-arms": {
    "gallery": [
      {
        "url": "/manus-storage/in-your-arms-view-1_1c04e0f3.webp",
        "label": "Artwork preview 1",
        "kind": "mockup"
      },
      {
        "url": "/manus-storage/in-your-arms-view-2_71b6ad34.webp",
        "label": "Artwork preview 2",
        "kind": "mockup"
      },
      {
        "url": "/manus-storage/in-your-arms-view-3_fd69b691.webp",
        "label": "Available print sizes",
        "kind": "size-guide"
      }
    ],
    "video": "/manus-storage/in-your-arms-preview_7e25e061.mp4"
  },
  "breath-of-roses": {
    "gallery": [
      {
        "url": "/manus-storage/breath-of-roses-view-1_3830d748.webp",
        "label": "Artwork preview 1",
        "kind": "mockup"
      },
      {
        "url": "/manus-storage/breath-of-roses-view-2_0a59ddbc.webp",
        "label": "Artwork preview 2",
        "kind": "mockup"
      },
      {
        "url": "/manus-storage/breath-of-roses-view-3_533f7409.webp",
        "label": "Available print sizes",
        "kind": "size-guide"
      }
    ],
    "video": "/manus-storage/breath-of-roses-preview_3c709885.mp4"
  },
  "golden-serenity": {
    "gallery": [
      {
        "url": "/manus-storage/golden-serenity-view-1_7c2326d3.webp",
        "label": "Artwork preview 1",
        "kind": "mockup"
      },
      {
        "url": "/manus-storage/golden-serenity-view-2_94edecea.webp",
        "label": "Artwork preview 2",
        "kind": "mockup"
      },
      {
        "url": "/manus-storage/golden-serenity-view-3_6f16802e.webp",
        "label": "Available print sizes",
        "kind": "size-guide"
      }
    ],
    "video": "/manus-storage/golden-serenity-preview_5a5ad5dc.mp4"
  },
  "gateway-to-heaven": {
    "gallery": [
      {
        "url": "/manus-storage/gateway-to-heaven-view-1_17df4ef5.webp",
        "label": "Artwork preview 1",
        "kind": "mockup"
      },
      {
        "url": "/manus-storage/gateway-to-heaven-view-2_c5d0a8be.webp",
        "label": "Artwork preview 2",
        "kind": "mockup"
      },
      {
        "url": "/manus-storage/gateway-to-heaven-view-3_a03d09c1.webp",
        "label": "Available print sizes",
        "kind": "size-guide"
      }
    ],
    "video": "/manus-storage/gateway-to-heaven-preview_3a005a45.mp4"
  },
  "divine-serenity": {
    "gallery": [
      {
        "url": "/manus-storage/divine-serenity-view-1_f477245f.webp",
        "label": "Artwork preview 1",
        "kind": "mockup"
      },
      {
        "url": "/manus-storage/divine-serenity-view-2_a3ee8512.webp",
        "label": "Artwork preview 2",
        "kind": "mockup"
      },
      {
        "url": "/manus-storage/divine-serenity-view-3_e292e704.webp",
        "label": "Available print sizes",
        "kind": "size-guide"
      }
    ],
    "video": "/manus-storage/divine-serenity-preview_85998d2b.mp4"
  },
  "angels-in-glory": {
    "gallery": [
      {
        "url": "/manus-storage/angels-in-glory-view-1_a16d9b9c.webp",
        "label": "Artwork preview 1",
        "kind": "mockup"
      },
      {
        "url": "/manus-storage/angels-in-glory-view-2_610a05bc.webp",
        "label": "Artwork preview 2",
        "kind": "mockup"
      },
      {
        "url": "/manus-storage/angels-in-glory-view-3_2ca6611e.webp",
        "label": "Available print sizes",
        "kind": "size-guide"
      }
    ],
    "video": "/manus-storage/angels-in-glory-preview_aef81886.mp4"
  },
  "angel-of-dawn": {
    "gallery": [
      {
        "url": "/manus-storage/angel-of-dawn-view-1_c37d85c3.webp",
        "label": "Artwork preview 1",
        "kind": "mockup"
      },
      {
        "url": "/manus-storage/angel-of-dawn-view-2_5551eded.webp",
        "label": "Artwork preview 2",
        "kind": "mockup"
      },
      {
        "url": "/manus-storage/angel-of-dawn-view-3_a32b0192.webp",
        "label": "Available print sizes",
        "kind": "size-guide"
      }
    ],
    "video": "/manus-storage/angel-of-dawn-preview_75363307.mp4"
  },
  "vintage-kitchen-moments": {
    "gallery": [
      {
        "url": "/manus-storage/vintage-kitchen-moments-view-1_23568922.webp",
        "label": "Artwork preview 1",
        "kind": "mockup"
      },
      {
        "url": "/manus-storage/vintage-kitchen-moments-view-2_b4119253.webp",
        "label": "Artwork preview 2",
        "kind": "mockup"
      },
      {
        "url": "/manus-storage/vintage-kitchen-moments-view-3_9ba9e07c.webp",
        "label": "Available print sizes",
        "kind": "size-guide"
      }
    ],
    "video": "/manus-storage/vintage-kitchen-moments-preview_770f25e1.mp4"
  },
  "the-gentleman-s-companion": {
    "gallery": [
      {
        "url": "/manus-storage/the-gentleman-s-companion-view-1_a903716d.webp",
        "label": "Artwork preview 1",
        "kind": "mockup"
      },
      {
        "url": "/manus-storage/the-gentleman-s-companion-view-2_cac90a5b.webp",
        "label": "Artwork preview 2",
        "kind": "mockup"
      },
      {
        "url": "/manus-storage/the-gentleman-s-companion-view-3_d871afbe.webp",
        "label": "Available print sizes",
        "kind": "size-guide"
      }
    ],
    "video": "/manus-storage/the-gentleman-s-companion-preview_df49b944.mp4"
  },
  "strings-of-time": {
    "gallery": [
      {
        "url": "/manus-storage/strings-of-time-view-1_6242baf3.webp",
        "label": "Artwork preview 1",
        "kind": "mockup"
      },
      {
        "url": "/manus-storage/strings-of-time-view-2_52335259.webp",
        "label": "Artwork preview 2",
        "kind": "mockup"
      },
      {
        "url": "/manus-storage/strings-of-time-view-3_6edea1c3.webp",
        "label": "Available print sizes",
        "kind": "size-guide"
      }
    ],
    "video": "/manus-storage/strings-of-time-preview_8e64799e.mp4"
  },
  "rustic-grace-cooking-with-clay": {
    "gallery": [
      {
        "url": "/manus-storage/rustic-grace-cooking-with-clay-view-1_f2b1379c.webp",
        "label": "Artwork preview 1",
        "kind": "mockup"
      },
      {
        "url": "/manus-storage/rustic-grace-cooking-with-clay-view-2_6eec413f.webp",
        "label": "Artwork preview 2",
        "kind": "mockup"
      },
      {
        "url": "/manus-storage/rustic-grace-cooking-with-clay-view-3_773ae9a6.webp",
        "label": "Available print sizes",
        "kind": "size-guide"
      }
    ],
    "video": "/manus-storage/rustic-grace-cooking-with-clay-preview_c5850b66.mp4"
  },
  "noble-gaze": {
    "gallery": [
      {
        "url": "/manus-storage/noble-gaze-view-1_18afbdcf.webp",
        "label": "Artwork preview 1",
        "kind": "mockup"
      },
      {
        "url": "/manus-storage/noble-gaze-view-2_8d64da58.webp",
        "label": "Artwork preview 2",
        "kind": "mockup"
      },
      {
        "url": "/manus-storage/noble-gaze-view-3_e0eed826.webp",
        "label": "Available print sizes",
        "kind": "size-guide"
      }
    ],
    "video": "/manus-storage/noble-gaze-preview_a75a6479.mp4"
  },
  "melodies-of-the-past": {
    "gallery": [
      {
        "url": "/manus-storage/melodies-of-the-past-view-1_12cb98af.webp",
        "label": "Artwork preview 1",
        "kind": "mockup"
      },
      {
        "url": "/manus-storage/melodies-of-the-past-view-2_44438485.webp",
        "label": "Artwork preview 2",
        "kind": "mockup"
      },
      {
        "url": "/manus-storage/melodies-of-the-past-view-3_eba68ec1.webp",
        "label": "Available print sizes",
        "kind": "size-guide"
      }
    ],
    "video": "/manus-storage/melodies-of-the-past-preview_c25e0122.mp4"
  },
  "two-blooms": {
    "gallery": [
      {
        "url": "/manus-storage/two-blooms-view-1_ae05e5d8.webp",
        "label": "Artwork preview 1",
        "kind": "mockup"
      },
      {
        "url": "/manus-storage/two-blooms-view-2_6b37976a.webp",
        "label": "Artwork preview 2",
        "kind": "mockup"
      },
      {
        "url": "/manus-storage/two-blooms-view-3_16f3b526.webp",
        "label": "Available print sizes",
        "kind": "size-guide"
      }
    ],
    "video": "/manus-storage/two-blooms-preview_b6245498.mp4"
  },
  "delicate-branch": {
    "gallery": [
      {
        "url": "/manus-storage/delicate-branch-view-1_304081d0.webp",
        "label": "Artwork preview 1",
        "kind": "mockup"
      },
      {
        "url": "/manus-storage/delicate-branch-view-2_914e7d7d.webp",
        "label": "Artwork preview 2",
        "kind": "mockup"
      },
      {
        "url": "/manus-storage/delicate-branch-view-3_534f90fc.webp",
        "label": "Available print sizes",
        "kind": "size-guide"
      }
    ],
    "video": "/manus-storage/delicate-branch-preview_540bdb32.mp4"
  },
  "breath-of-nature": {
    "gallery": [
      {
        "url": "/manus-storage/breath-of-nature-view-1_917fa3c4.webp",
        "label": "Artwork preview 1",
        "kind": "mockup"
      },
      {
        "url": "/manus-storage/breath-of-nature-view-2_e4728b42.webp",
        "label": "Artwork preview 2",
        "kind": "mockup"
      },
      {
        "url": "/manus-storage/breath-of-nature-view-3_a7f5b968.webp",
        "label": "Available print sizes",
        "kind": "size-guide"
      }
    ],
    "video": "/manus-storage/breath-of-nature-preview_0b3113bb.mp4"
  },
  "botanical-reverie": {
    "gallery": [
      {
        "url": "/manus-storage/botanical-reverie-view-1_97e925a9.webp",
        "label": "Artwork preview 1",
        "kind": "mockup"
      },
      {
        "url": "/manus-storage/botanical-reverie-view-2_28b71f9a.webp",
        "label": "Artwork preview 2",
        "kind": "mockup"
      },
      {
        "url": "/manus-storage/botanical-reverie-view-3_8034bc18.webp",
        "label": "Available print sizes",
        "kind": "size-guide"
      }
    ],
    "video": "/manus-storage/botanical-reverie-preview_0c2dffc9.mp4"
  },
  "botanical-blush-flower": {
    "gallery": [
      {
        "url": "/manus-storage/botanical-blush-flower-view-1_e6fb93c1.webp",
        "label": "Artwork preview 1",
        "kind": "mockup"
      },
      {
        "url": "/manus-storage/botanical-blush-flower-view-2_9885d2b1.webp",
        "label": "Artwork preview 2",
        "kind": "mockup"
      },
      {
        "url": "/manus-storage/botanical-blush-flower-view-3_be2382d6.webp",
        "label": "Available print sizes",
        "kind": "size-guide"
      }
    ],
    "video": "/manus-storage/botanical-blush-flower-preview_5e714a0f.mp4"
  },
  "whisper-of-color": {
    "gallery": [
      {
        "url": "/manus-storage/whisper-of-color-view-1_476a6ebb.webp",
        "label": "Artwork preview 1",
        "kind": "mockup"
      },
      {
        "url": "/manus-storage/whisper-of-color-view-2_f29be2bb.webp",
        "label": "Artwork preview 2",
        "kind": "mockup"
      },
      {
        "url": "/manus-storage/whisper-of-color-view-3_18a088f0.webp",
        "label": "Available print sizes",
        "kind": "size-guide"
      }
    ],
    "video": "/manus-storage/whisper-of-color-preview_f02510cc.mp4"
  },
  "petals-of-the-soul": {
    "gallery": [
      {
        "url": "/manus-storage/petals-of-the-soul-view-1_9b70da12.webp",
        "label": "Artwork preview 1",
        "kind": "mockup"
      },
      {
        "url": "/manus-storage/petals-of-the-soul-view-2_91b58d54.webp",
        "label": "Artwork preview 2",
        "kind": "mockup"
      },
      {
        "url": "/manus-storage/petals-of-the-soul-view-3_7c4a60af.webp",
        "label": "Available print sizes",
        "kind": "size-guide"
      }
    ],
    "video": "/manus-storage/petals-of-the-soul-preview_a494a245.mp4"
  },
  "floral-symphony": {
    "gallery": [
      {
        "url": "/manus-storage/floral-symphony-view-1_2f79a599.webp",
        "label": "Artwork preview 1",
        "kind": "mockup"
      },
      {
        "url": "/manus-storage/floral-symphony-view-2_4039cd5b.webp",
        "label": "Artwork preview 2",
        "kind": "mockup"
      },
      {
        "url": "/manus-storage/floral-symphony-view-3_935b892c.webp",
        "label": "Available print sizes",
        "kind": "size-guide"
      }
    ],
    "video": "/manus-storage/floral-symphony-preview_433472d9.mp4"
  },
  "blossom-serenade": {
    "gallery": [
      {
        "url": "/manus-storage/blossom-serenade-view-1_d1bcb272.webp",
        "label": "Artwork preview 1",
        "kind": "mockup"
      },
      {
        "url": "/manus-storage/blossom-serenade-view-2_eca83926.webp",
        "label": "Artwork preview 2",
        "kind": "mockup"
      },
      {
        "url": "/manus-storage/blossom-serenade-view-3_6da5f172.webp",
        "label": "Available print sizes",
        "kind": "size-guide"
      }
    ],
    "video": "/manus-storage/blossom-serenade-preview_0d9a15b8.mp4"
  },
  "aurora-of-flowers": {
    "gallery": [
      {
        "url": "/manus-storage/aurora-of-flowers-view-1_423b7ae0.webp",
        "label": "Artwork preview 1",
        "kind": "mockup"
      },
      {
        "url": "/manus-storage/aurora-of-flowers-view-2_a9e4c67e.webp",
        "label": "Artwork preview 2",
        "kind": "mockup"
      },
      {
        "url": "/manus-storage/aurora-of-flowers-view-3_70510a93.webp",
        "label": "Available print sizes",
        "kind": "size-guide"
      }
    ],
    "video": "/manus-storage/aurora-of-flowers-preview_78c3ce9d.mp4"
  },
  "joyful-playtime": {
    "gallery": [
      {
        "url": "/manus-storage/joyful-playtime-view-1_f728994d.webp",
        "label": "Artwork preview 1",
        "kind": "mockup"
      },
      {
        "url": "/manus-storage/joyful-playtime-view-2_38605afb.webp",
        "label": "Artwork preview 2",
        "kind": "mockup"
      },
      {
        "url": "/manus-storage/joyful-playtime-view-3_a6c16c45.webp",
        "label": "Available print sizes",
        "kind": "size-guide"
      }
    ],
    "video": "/manus-storage/joyful-playtime-preview_62e82011.mp4"
  },
  "dinner-with-friends": {
    "gallery": [
      {
        "url": "/manus-storage/dinner-with-friends-view-1_beb897d0.webp",
        "label": "Artwork preview 1",
        "kind": "mockup"
      },
      {
        "url": "/manus-storage/dinner-with-friends-view-2_b7fd61b6.webp",
        "label": "Artwork preview 2",
        "kind": "mockup"
      },
      {
        "url": "/manus-storage/dinner-with-friends-view-3_eccaadb8.webp",
        "label": "Available print sizes",
        "kind": "size-guide"
      }
    ],
    "video": "/manus-storage/dinner-with-friends-preview_84461a49.mp4"
  },
  "the-kiss": {
    "gallery": [
      {
        "url": "/manus-storage/the-kiss-view-1_a8daa6e2.webp",
        "label": "Artwork preview 1",
        "kind": "mockup"
      },
      {
        "url": "/manus-storage/the-kiss-view-2_01bc9de4.webp",
        "label": "Artwork preview 2",
        "kind": "mockup"
      },
      {
        "url": "/manus-storage/the-kiss-view-3_c231ebd6.webp",
        "label": "Available print sizes",
        "kind": "size-guide"
      }
    ],
    "video": "/manus-storage/the-kiss-preview_1f49b8cb.mp4"
  },
  "a-joyful-embrace": {
    "gallery": [
      {
        "url": "/manus-storage/a-joyful-embrace-view-1_d6a2ef24.webp",
        "label": "Artwork preview 1",
        "kind": "mockup"
      },
      {
        "url": "/manus-storage/a-joyful-embrace-view-2_4cc09b4a.webp",
        "label": "Artwork preview 2",
        "kind": "mockup"
      },
      {
        "url": "/manus-storage/a-joyful-embrace-view-3_e55f8a61.webp",
        "label": "Available print sizes",
        "kind": "size-guide"
      }
    ],
    "video": "/manus-storage/a-joyful-embrace-preview_e030b2af.mp4"
  },
  "single-line-art-captivating": {
    "gallery": [
      {
        "url": "/manus-storage/single-line-art-captivating-view-1_6f0febd4.webp",
        "label": "Artwork preview 1",
        "kind": "mockup"
      },
      {
        "url": "/manus-storage/single-line-art-captivating-view-2_e4f2eecb.webp",
        "label": "Artwork preview 2",
        "kind": "mockup"
      },
      {
        "url": "/manus-storage/single-line-art-captivating-view-3_5b9adbcd.webp",
        "label": "Artwork preview 3",
        "kind": "mockup"
      },
      {
        "url": "/manus-storage/single-line-art-captivating-view-4_af1b0703.webp",
        "label": "Available print sizes",
        "kind": "size-guide"
      }
    ],
    "video": "/manus-storage/single-line-art-captivating-preview_8c5f347a.mp4"
  }
};
