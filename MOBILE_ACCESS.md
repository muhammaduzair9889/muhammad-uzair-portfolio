# 📱 Accessing Portfolio on Mobile Device

## Quick Guide

### Step 1: Find Your Computer's IP Address

**Windows:**
1. Open Command Prompt or PowerShell
2. Run: `ipconfig`
3. Look for "IPv4 Address" (e.g., 192.168.1.100)

**Mac/Linux:**
```bash
ifconfig | grep "inet "
# or
ip addr show
```

### Step 2: Start Development Server

```bash
npm run dev
```

The server will start on `http://localhost:3000` (or 3001 if 3000 is busy)

### Step 3: Access from Mobile

1. **Ensure your mobile device is on the same Wi-Fi network** as your computer

2. **Open mobile browser** (Chrome, Safari, etc.)

3. **Navigate to:**
   ```
   http://YOUR_IP_ADDRESS:3000
   ```
   
   **Example:** If your IP is `192.168.1.100`, use:
   ```
   http://192.168.1.100:3000
   ```

### Troubleshooting

#### Connection Refused / Can't Connect

**Windows Firewall:**
1. Open Windows Defender Firewall
2. Click "Advanced Settings"
3. Click "Inbound Rules" → "New Rule"
4. Select "Port" → Next
5. Select "TCP" and enter port `3000`
6. Select "Allow the connection"
7. Apply to all profiles
8. Name it "Next.js Dev Server"

**Alternative - Use Different Port:**
If port 3000 is blocked, Next.js will automatically try 3001, 3002, etc.
Check the terminal output for the actual port number.

#### Devices Not on Same Network

- Ensure both devices are connected to the same Wi-Fi network
- Disable mobile data on your phone
- Check router settings if using guest network

#### Still Can't Connect?

**Option 1: Use ngrok (External Access)**
```bash
# Install ngrok
npm install -g ngrok

# Start dev server
npm run dev

# In another terminal
ngrok http 3000
```
This gives you a public URL like `https://abc123.ngrok.io` that works from anywhere.

**Option 2: Use USB Debugging (Android)**
1. Enable USB debugging on Android
2. Connect phone via USB
3. Use Chrome's remote debugging feature

**Option 3: Use Expo Go (if applicable)**
For React Native projects, Expo Go app can access local server.

## Current Server Info

If the dev server is running, check the terminal output for:
- Local URL: `http://localhost:3000`
- Network URL: `http://YOUR_IP:3000`

## Testing Checklist

- [ ] Home section displays correctly
- [ ] All buttons are clickable
- [ ] 3D scene renders properly
- [ ] Navigation works
- [ ] Theme toggle functions
- [ ] All sections are readable
- [ ] Forms are usable
- [ ] Animations are smooth

## Production Deployment

For production, deploy to:
- **Vercel**: Automatic mobile optimization
- **Netlify**: Mobile-friendly by default
- **AWS CloudFront**: Global CDN for fast mobile access

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

