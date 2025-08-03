# AWS Amplify Deployment Guide

## Overview
This guide covers the proper configuration for deploying the Cursor Italy website to AWS Amplify with correct image handling.

## Key Changes Made

### 1. Next.js Configuration (`next.config.js`)
- Set `output: 'export'` for static site generation
- Enabled `unoptimized: true` for images to work with static export
- Added `trailingSlash: true` for proper routing
- Configured image optimization settings

### 2. Amplify Build Configuration (`amplify.yml`)
- Configured build process for Next.js static export
- Set correct artifacts directory to `out`
- Added caching for better build performance

### 3. Image Handling
- All images are stored in `public/images/`
- Images are referenced with absolute paths (e.g., `/images/cursor_milano_landscape.jpg`)
- Added image configuration to site config for consistency

## Deployment Steps

### 1. Connect to AWS Amplify
1. Go to AWS Amplify Console
2. Click "New app" → "Host web app"
3. Connect your GitHub repository
4. Select the main branch

### 2. Build Settings
The `amplify.yml` file is already configured, but verify these settings in Amplify Console:

**Build settings:**
- Build command: `npm run build`
- Output directory: `out`
- Node.js version: 18.x or higher

### 3. Environment Variables (if needed)
Add any environment variables in Amplify Console:
- `NODE_ENV=production`

## Image Optimization

### Static Images
- Store images in `public/images/`
- Reference with absolute paths: `/images/filename.jpg`
- Use Next.js Image component for optimization

### Dynamic Images (from content)
- Images in content folders are copied to public during build
- Use relative paths in markdown content
- Images are served as static assets

## Troubleshooting

### Images Not Displaying
1. **Check file paths**: Ensure images are in `public/images/`
2. **Verify build output**: Check that images are copied to `out/images/`
3. **Clear cache**: Clear Amplify cache and redeploy
4. **Check console errors**: Look for 404 errors in browser console

### Build Failures
1. **Node.js version**: Ensure using Node.js 18+ in Amplify
2. **Memory limits**: Increase build memory if needed
3. **Timeout issues**: Increase build timeout for large projects

### Performance Issues
1. **Image optimization**: Images are unoptimized for static export
2. **CDN**: Amplify provides CDN for static assets
3. **Caching**: Configure proper cache headers

## Best Practices

### Image Optimization
- Use WebP format when possible
- Compress images before uploading
- Use appropriate sizes for different contexts
- Implement lazy loading for better performance

### Build Optimization
- Use build caching
- Minimize dependencies
- Optimize bundle size
- Use static generation where possible

### Monitoring
- Monitor build times
- Check for 404 errors
- Monitor Core Web Vitals
- Use Amplify Analytics if needed

## File Structure
```
public/
  images/
    cursor_milano_landscape.jpg
    cursor_milano_square.jpg
    meetup_20250916.jpg
    ambassador.png
    events/
    sponsors/
```

## Common Issues and Solutions

### Issue: Images show as broken links
**Solution**: 
- Verify images are in `public/images/`
- Check file permissions
- Ensure correct file paths in code

### Issue: Build fails with image errors
**Solution**:
- Check image file formats (JPG, PNG, WebP)
- Verify image file integrity
- Ensure images are not corrupted

### Issue: Slow image loading
**Solution**:
- Optimize image sizes
- Use appropriate image formats
- Implement lazy loading
- Consider using a CDN

## Support
For additional help with AWS Amplify deployment:
- [AWS Amplify Documentation](https://docs.aws.amazon.com/amplify/)
- [Next.js Static Export Guide](https://nextjs.org/docs/advanced-features/static-html-export)
- [Next.js Image Optimization](https://nextjs.org/docs/basic-features/image-optimization) 