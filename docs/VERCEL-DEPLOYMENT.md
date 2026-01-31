# Deploying to Vercel

## Quick Steps:

1. **Go to Vercel**: https://vercel.com
2. **Sign in** with your GitHub account
3. **Click "Add New Project"**
4. **Import your repository**: `goexchange/necker-cup-website-26`
5. **Select the branch**: `feature/reservation-form-supabase-integration`
6. **Configure the project**:
   - **Framework Preset**: Other (or Static Site)
   - **Root Directory**: `.` (root)
   - **Build Command**: Leave empty (or `echo "No build needed"`)
   - **Output Directory**: `.` (root)
   - **Install Command**: Leave empty

7. **Add Environment Variables** (if needed):
   - You can add Supabase URL and key as environment variables if you want to keep them out of the code
   - But since it's a standalone HTML file, the keys are already in the code

8. **Click "Deploy"**

## After Deployment:

1. Your site will be live at: `https://your-project-name.vercel.app`
2. The form should work better because:
   - ✅ HTTPS is required for Supabase (localhost sometimes has issues)
   - ✅ CORS issues are often resolved
   - ✅ More stable environment

## Testing the Form:

1. Go to your deployed site
2. Click "Reserve Your Spot"
3. Fill out and submit the form
4. Check your Supabase dashboard to see if data was saved
5. Check browser console (F12) for any errors

## Important Notes:

- The `index-standalone.html` file will be served as-is
- Make sure your Supabase RLS policy is set up correctly
- The API key in the code should be the **publishable key** (not secret)
- Vercel will serve the file over HTTPS, which Supabase requires

## If Issues Persist:

1. Check browser console for errors
2. Verify Supabase URL and API key are correct
3. Make sure RLS policy allows anonymous inserts
4. Check Vercel deployment logs for any issues
