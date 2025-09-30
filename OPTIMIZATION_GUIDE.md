# Performance Optimization Guide for Kansyl Landing

## Critical Issues Fixed ✅

1. **Lazy Loading**: Heavy components are now dynamically imported
2. **Image Optimization**: Configured Next.js to use AVIF/WebP formats
3. **Font Loading**: Optimized with preload and font-display swap
4. **Reduced Animations**: Removed excessive AnimatedText/Reveal components that cause layout shifts
5. **Compression**: Enabled gzip compression in Next.js config

## Remaining Manual Optimizations Required ⚠️

### 1. **CRITICAL: Compress the GIF File (5.2MB → ~500KB)**

The demo GIF at `/public/assets/video/kansel app demo.gif` is **5.2MB** and is the biggest performance bottleneck.

**Options:**

#### Option A: Convert to Video (Recommended)
```bash
# Install ffmpeg if not installed: brew install ffmpeg

# Convert GIF to optimized MP4 (90% size reduction)
ffmpeg -i "public/assets/video/kansel app demo.gif" \
  -vf "scale=360:-1:flags=lanczos" \
  -c:v libx264 \
  -crf 28 \
  -preset slow \
  -movflags +faststart \
  "public/assets/video/kansel-app-demo.mp4"

# Convert GIF to WebM (even smaller)
ffmpeg -i "public/assets/video/kansel app demo.gif" \
  -vf "scale=360:-1" \
  -c:v libvpx-vp9 \
  -crf 35 \
  -b:v 0 \
  "public/assets/video/kansel-app-demo.webm"
```

Then update `app/page.tsx` line 251-257 to use video instead:
```tsx
<video 
  className="object-cover object-center w-full h-full"
  autoPlay 
  loop 
  muted 
  playsInline
>
  <source src="/assets/video/kansel-app-demo.webm" type="video/webm" />
  <source src="/assets/video/kansel-app-demo.mp4" type="video/mp4" />
</video>
```

#### Option B: Optimize GIF
```bash
# Install gifsicle: brew install gifsicle

# Optimize GIF (reduce colors and size)
gifsicle -O3 --colors 128 --scale 0.7 \
  "public/assets/video/kansel app demo.gif" \
  -o "public/assets/video/kansel-app-demo-optimized.gif"
```

### 2. **Optimize OG Image (1.4MB → ~200KB)**

```bash
# Using ImageMagick
convert public/og-image.png -quality 85 -resize 1200x630 public/og-image-optimized.png

# Or use online tools:
# - https://tinypng.com
# - https://squoosh.app
```

### 3. **Remove Unused 3D Files**

If not using 3D assets, remove:
- `public/assets/3d/lens.glb` (286KB)
- `public/assets/3d/cube.glb` (286KB)
- `public/assets/3d/bar.glb` (286KB)

```bash
rm -rf public/assets/3d/
```

### 4. **Add Loading Skeletons**

Create skeleton loaders for PhoneMockup and other heavy components to improve perceived performance.

## Performance Metrics to Target

- **First Contentful Paint (FCP)**: < 1.8s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Total Blocking Time (TBT)**: < 200ms
- **Cumulative Layout Shift (CLS)**: < 0.1
- **Time to Interactive (TTI)**: < 3.8s

## Testing Performance

```bash
# Build and analyze
npm run build

# Start production server
npm start

# Test with Lighthouse
npm install -g lighthouse
lighthouse http://localhost:3000 --view
```

## Additional Optimizations

### A. Enable Vercel Analytics
Add to `package.json`:
```json
"dependencies": {
  "@vercel/analytics": "^1.0.0"
}
```

Add to `app/layout.tsx`:
```tsx
import { Analytics } from '@vercel/analytics/react';

// In component:
<Analytics />
```

### B. Add Resource Hints
Add to `app/layout.tsx`:
```tsx
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body className={inter.className}>
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  )
}
```

### C. Implement Intersection Observer for Lazy Loading

For sections that are below the fold, use Intersection Observer to load them only when visible.

## Summary of Changes Made

✅ Configured Next.js for optimal image formats (AVIF, WebP)
✅ Enabled compression in Next.js config
✅ Added dynamic imports for heavy components
✅ Optimized font loading with preload
✅ Removed excessive animations that cause layout shifts
✅ Added lazy loading to GIF with placeholder
✅ Reduced bundle size by lazy loading non-critical components

## Expected Results

After implementing all optimizations:
- **Initial Load**: 5.2MB → ~1.5MB (71% reduction)
- **Load Time**: 8-10s → 2-3s (70% improvement)
- **Lighthouse Score**: Should reach 90+ on all metrics