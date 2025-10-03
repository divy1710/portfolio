# Profile Photo Setup Instructions

## How to Add Your Real Profile Photo

### Option 1: Replace with your actual photo (Recommended)

1. **Take/Choose a professional photo**:

   - High quality (at least 300x300 pixels)
   - Good lighting and clear face
   - Professional appearance
   - Square aspect ratio works best

2. **Prepare your photo**:

   - Rename it to `profile-photo.jpg`, `profile-photo.png`, or `profile-photo.webp`
   - Place it in the `public/` folder
   - Replace the current `profile-photo.svg`

3. **Update the image source** in `src/components/About.jsx`:
   ```jsx
   <img
     src="/profile-photo.jpg" // or .png/.webp
     alt="Divy Kalathiya"
     className="w-full h-full object-cover object-center"
   />
   ```

### Option 2: Use a different placeholder

If you want to customize the current SVG placeholder:

1. Edit `public/profile-photo.svg`
2. Change colors, features, or style
3. You can use online SVG editors or tools like Figma

### Option 3: Use AI-generated avatar

You can use services like:

- **Avataaars Generator** (avataaars.com)
- **DiceBear** (dicebear.com)
- **Boring Avatars** (boringavatars.com)

### Current Implementation Features:

- ✅ **Responsive**: Scales perfectly on all devices
- ✅ **Fallback System**: Shows "DK" initials if image fails to load
- ✅ **Hover Effects**: Animated scaling and overlay message
- ✅ **Theme Aware**: Adapts to dark/light mode
- ✅ **Professional Border**: Gradient border with shadow
- ✅ **Loading Animation**: Subtle pulse effect
- ✅ **Error Handling**: Graceful degradation if image doesn't load

### Recommended Photo Specifications:

- **Size**: 400x400 pixels minimum
- **Format**: JPG, PNG, or WebP
- **Background**: Clean, preferably solid color or subtle
- **Lighting**: Good lighting on face
- **Expression**: Professional smile
- **Clothing**: Professional or smart casual

### File Locations:

- Current placeholder: `public/profile-photo.svg`
- Component code: `src/components/About.jsx` (lines ~125-150)

### Quick Tips:

1. **Square photos work best** - they fit the circular frame perfectly
2. **Test the hover effect** - make sure it looks good with your photo
3. **Check both themes** - ensure your photo looks good in dark and light mode
4. **Optimize file size** - compress your image for faster loading

### Fallback Behavior:

If your photo fails to load, the component will automatically:

1. Hide the broken image
2. Show the "DK" initials as backup
3. Maintain all hover effects and animations
4. Keep the same professional appearance
