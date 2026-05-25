# 🚀 Git Setup & Push Guide for Wallet Payment Application

Follow these steps to push your project to GitHub:

---

## 📋 Prerequisites

Before you start, ensure you have:
- Git installed on your system
- A GitHub account
- SSH key configured (or use HTTPS with GitHub token)

---

## ✅ Step 1: Initialize Git Repository (If Not Already Done)

```bash
# Navigate to your project root
cd c:\MRU\3-2\Java Projects\Wallet

# Initialize git if not already initialized
git init

# Check git status
git status
```

---

## 📤 Step 2: Add Remote Repository

```bash
# Add the GitHub remote (use the repository URL you provided)
git remote add origin https://github.com/rishiklucky/Wallet_Payment_Application.git

# Verify the remote was added
git remote -v
# Output should show:
# origin  https://github.com/rishiklucky/Wallet_Payment_Application.git (fetch)
# origin  https://github.com/rishiklucky/Wallet_Payment_Application.git (push)
```

---

## 🔐 Step 3: Configure Git User (First Time Only)

```bash
# Set your Git username
git config --global user.name "Your Name"

# Set your Git email
git config --global user.email "your.email@example.com"

# Verify configuration
git config --global --list
```

---

## 📝 Step 4: Stage and Commit Files

```bash
# Add all files (the .gitignore will exclude unwanted files)
git add .

# Check what will be committed
git status

# Commit your changes with a descriptive message
git commit -m "Initial commit: Full-stack wallet payment application

- Spring Boot backend with REST APIs
- React frontend with responsive UI
- MySQL database with transaction management
- User authentication and wallet operations
- Swagger API documentation"
```

---

## 🚀 Step 5: Push to GitHub

### Option A: Using HTTPS (Recommended for first time)

```bash
# Push to the main branch
git branch -M main
git push -u origin main

# For subsequent pushes
git push origin main
```

**If prompted for credentials:**
- Username: Your GitHub username
- Password: Your GitHub Personal Access Token (not your GitHub password)
  - [Generate PAT here](https://github.com/settings/tokens)

### Option B: Using SSH (More Secure)

```bash
# Check if SSH key exists
ls -la ~/.ssh/

# If not, generate one
ssh-keygen -t ed25519 -C "your.email@example.com"

# Add SSH key to ssh-agent
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519

# Add your public SSH key to GitHub:
# https://github.com/settings/keys
cat ~/.ssh/id_ed25519.pub

# Then push using SSH URL
git remote set-url origin git@github.com:rishiklucky/Wallet_Payment_Application.git
git push -u origin main
```

---

## ✨ Step 6: Verify Your Repository on GitHub

1. Go to: https://github.com/rishiklucky/Wallet_Payment_Application
2. Verify your files are uploaded
3. Check that `.gitignore` is working (no `node_modules/`, `target/`, etc.)
4. Verify README.md displays properly

---

## 📋 What Gets Excluded (Via .gitignore)

✓ `node_modules/` - npm dependencies  
✓ `wallet-backend/target/` - Maven build files  
✓ `.idea/`, `.vscode/` - IDE configurations  
✓ `.env` files - Environment variables  
✓ `build/` - Build artifacts  
✓ Log files  

**Only source code and configuration files are committed!**

---

## 🔄 Common Git Commands for Future Use

```bash
# Check status
git status

# View recent commits
git log --oneline

# Create new branch
git checkout -b feature/feature-name

# Switch branches
git checkout main

# Pull latest changes
git pull origin main

# Push your branch
git push origin feature/feature-name

# Create pull request on GitHub website after pushing

# Merge branch to main (create PR on GitHub)
git checkout main
git pull origin main
git merge feature/feature-name
git push origin main
```

---

## 🎯 GitHub Repository Setup Tips

### Add GitHub Settings:

1. **Add .gitignore** ✓ (Already done)
2. **Add LICENSE**
   ```bash
   # Add MIT License file
   # GitHub provides license templates during repo creation
   ```

3. **Add Topics** (on GitHub repo page)
   - `wallet-app`
   - `spring-boot`
   - `react`
   - `payment-system`
   - `upi`

4. **Update Repository Description**
   - "Full-stack UPI Wallet Payment Application built with Spring Boot & React"

5. **Add Social Preview Image**
   - Create a professional project thumbnail

---

## 🎓 For Recruiters

Your repository showcases:

✅ **Full-Stack Development** - Backend + Frontend  
✅ **Modern Tech Stack** - Spring Boot 3, React 19, MySQL  
✅ **Clean Code** - Well-organized project structure  
✅ **Professional Documentation** - Comprehensive README  
✅ **Best Practices** - Layered architecture, design patterns  
✅ **Database Design** - Proper schema with relationships  
✅ **API Design** - RESTful endpoints with Swagger  
✅ **Security** - Password encryption, input validation  
✅ **Version Control** - Git workflow and commit history  

---

## 🐛 Troubleshooting

### Issue: Permission denied (publickey)
```bash
# Solution: Ensure SSH key is added to GitHub
ssh -T git@github.com
```

### Issue: Repository already exists on remote
```bash
# Solution: Remove and re-add origin
git remote remove origin
git remote add origin https://github.com/rishiklucky/Wallet_Payment_Application.git
```

### Issue: Can't push - rejected
```bash
# Solution: Pull first, then push
git pull origin main
git push origin main
```

### Issue: Large files error
```bash
# Solution: Ensure files are in .gitignore
# Re-check git status
git status
```

---

## 📊 Quick Reference

| Task | Command |
|------|---------|
| Initialize Git | `git init` |
| Add Remote | `git remote add origin <URL>` |
| Stage Files | `git add .` |
| Commit | `git commit -m "message"` |
| Push | `git push -u origin main` |
| Check Status | `git status` |
| View Log | `git log --oneline` |
| Pull Changes | `git pull origin main` |

---

## ✅ Final Checklist Before Pushing

- [ ] Git initialized in project root
- [ ] `.gitignore` files created (root, backend, frontend)
- [ ] README.md created with comprehensive documentation
- [ ] `target/` folder excluded from staging
- [ ] `node_modules/` excluded from staging
- [ ] All source code files staged
- [ ] Initial commit created
- [ ] Remote origin added
- [ ] First push successful
- [ ] Repository visible on GitHub
- [ ] README displays correctly on GitHub

---

## 🎉 You're All Set!

Your project is now ready for recruiters to review on GitHub!

**Share this link with confidence:**
```
https://github.com/rishiklucky/Wallet_Payment_Application
```

---

*Happy coding and good luck with your interviews! 🚀*
