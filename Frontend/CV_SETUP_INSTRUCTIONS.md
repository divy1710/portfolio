# CV Download Setup Instructions

## How to Add Your Real Resume

### Option 1: Replace with your PDF Resume

1. Replace the file `public/Divy_Kalathiya_Resume.pdf` with your actual resume PDF
2. Keep the same filename or update the filename in `src/components/Hero.jsx` in the `downloadCV` function
3. Your PDF will be automatically downloaded when users click "Download Resume"

### Option 2: Update the HTML Resume Template

1. Edit `public/resume-template.html` with your actual information:
   - Update personal details (name, email, phone, etc.)
   - Add your real education details
   - Include your actual work experience
   - Update the skills section with your technologies
   - Add your real projects with descriptions
   - Include actual achievements and certifications

### Option 3: Generate PDF from HTML Template

You can use tools like:

- **Puppeteer** - Generate PDF from HTML programmatically
- **Print to PDF** - Use browser's print function to save as PDF
- **Online HTML to PDF converters**

### Current Implementation Features:

- ✅ Automatic download of PDF resume
- ✅ Fallback to HTML template if PDF is not available
- ✅ Loading state with spinner during download
- ✅ Error handling for failed downloads
- ✅ Works in both dark and light themes

### File Locations:

- PDF Resume: `public/Divy_Kalathiya_Resume.pdf`
- HTML Template: `public/resume-template.html`
- Download Logic: `src/components/Hero.jsx` (downloadCV function)

### Customization:

To change the download filename, update this line in Hero.jsx:

```javascript
link.download = "Your_Name_Resume.pdf";
```

The download button will automatically:

1. Show a loading spinner while downloading
2. Download your PDF resume if available
3. Open HTML template as fallback
4. Handle errors gracefully
