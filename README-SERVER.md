# Running the Local Server

To test the reservation form, you need to run a local HTTP server (the form won't work with `file://` protocol due to CORS restrictions).

## Quick Start

### Option 1: Use the provided script
```bash
./start-server.sh
```

### Option 2: Manual Python server
```bash
cd /Users/remreynolds/Documents/GitHub/necker-cup-website-26
python3 -m http.server 8000
```

### Option 3: Manual Node.js server
```bash
cd /Users/remreynolds/Documents/GitHub/necker-cup-website-26
npx http-server -p 8000
```

## Access the Website

Once the server is running, open your browser and go to:
**http://localhost:8000/index-standalone.html**

## Testing the Reservation Form

1. Click any "Reserve Your Spot" button
2. Fill out the form
3. Submit the form
4. Check the browser console (F12) for any errors
5. Check your Supabase dashboard to verify the data was saved

## Troubleshooting

If you see "Connection Refused":
- Make sure the server is actually running
- Check if port 8000 is already in use: `lsof -ti:8000`
- Try a different port (e.g., 8080, 3000)

If the form submission fails:
- Open the browser console (F12) to see detailed error messages
- Check that your Supabase credentials are correct
- Verify your internet connection
