# 🚀 Deploy Your Portfolio to freyathakkar.in

## ✅ What's Ready
- ✅ Portfolio.dc.html design (professional Figma-style)
- ✅ All 40+ project images and assets
- ✅ Resume link on contact page
- ✅ Mobile responsive (works on all devices)
- ✅ Git initialized with 3 commits

## 📋 Step 1: Create GitHub Repo (2 min)

1. Go to https://github.com/new
2. Fill in:
   - **Repository name:** `portfolio`
   - **Description:** "Professional Figma-style portfolio"
   - **Public:** Selected ✅
3. Click **"Create repository"**
4. **Copy the commands shown** (for pushing existing code)

## 📤 Step 2: Push to GitHub (1 min)

Open PowerShell/Terminal in your portfolio folder and run:

```bash
cd "C:\Users\Freya Thakkar\OneDrive\Desktop\New folder (2)\portfolio"

git remote add origin https://github.com/FThakkar01/portfolio.git
git branch -M main
git push -u origin main
```

## 🌐 Step 3: Deploy to Vercel (5 min)

```bash
vercel --prod
```

**When prompted:**
- "Link to existing project?" → **N**
- "What's your project's name?" → Press Enter (keeps "portfolio")
- "In which directory is your code?" → Press Enter (current directory)
- "Want to modify project settings above?" → **N**

**Vercel will output a URL like:** `https://portfolio-xxxxx.vercel.app`

## 🔗 Step 4: Connect Domain (10 min)

1. **In Vercel Dashboard:**
   - Go to https://vercel.com
   - Select your "portfolio" project
   - Click **"Settings"** → **"Domains"**
   - Click **"Add Domain"**
   - Enter: `freyathakkar.in`

2. **In your Domain Registrar** (GoDaddy, Namecheap, etc.):
   - Go to DNS/Nameserver settings
   - Update nameservers to:
     ```
     ns1.vercel.com
     ns2.vercel.com
     ns3.vercel.com
     ns4.vercel.com
     ```

3. **Wait 24-48 hours** for DNS propagation

## ✨ What You'll Get

**At https://freyathakkar.in:**
- ✅ Professional Figma-style portfolio interface
- ✅ 5 interactive pages (About, Work, Playground, Writing, Contact)
- ✅ Drag-to-pan canvas
- ✅ 6 project case studies with full galleries
- ✅ Contact form that sends to your email
- ✅ Resume download link
- ✅ Dark mode support
- ✅ Fully responsive on mobile, tablet, desktop
- ✅ Fast performance (Vercel CDN)
- ✅ HTTPS & security headers included

## 🎯 Quick Status

| Item | Status |
|------|--------|
| Design | ✅ Complete |
| Assets | ✅ All 40+ images |
| Resume Link | ✅ Added |
| Mobile Responsive | ✅ Added |
| Git Repo | ✅ Ready to push |
| GitHub | ⏳ Create repo (Step 1) |
| Vercel Deploy | ⏳ Run vercel --prod (Step 3) |
| Domain | ⏳ Update nameservers (Step 4) |

---

**Your portfolio is production-ready! 🎉**

Follow steps 1-4 above to go live.

Questions? Everything is automated after Step 2!
