# Privacy Policy & Terms of Service Updates for v1.0

**Date**: October 3, 2025  
**Purpose**: Update landing page legal documents to accurately reflect v1.0 app architecture  
**Reason**: iCloud sync is not enabled in v1.0; will be added as premium feature in future release

---

## 🎯 Summary of Changes

### What Changed:
- ❌ **REMOVED**: All references to iCloud/CloudKit sync
- ❌ **REMOVED**: Supabase for data storage/sync
- ✅ **CLARIFIED**: Supabase is used ONLY for authentication
- ✅ **ADDED**: Clear statement that data is stored locally on device only
- ✅ **ADDED**: Note that data does NOT sync across devices in v1.0

---

## 📄 PRIVACY POLICY UPDATES

### ✏️ Change 1: Section 3.1 "Where Your Data is Stored"

**FIND:**
```
#### Cloud Synchronization (Optional):
If you choose to enable sync, your subscription data is stored in:
- **Supabase:** A secure, privacy-focused backend service (PostgreSQL database hosted in the cloud)
- **Location:** Your data is stored in Supabase's secure data centers (primarily US-based)
```

**REPLACE WITH:**
```
#### Local Storage Only (v1.0):
Your subscription data is stored ONLY on your device:
- **Local Storage:** All subscription data is stored locally on your iPhone using Core Data (Apple's local database framework)
- **No Cloud Sync:** In version 1.0, your data does NOT sync across devices
- **Device-Only:** Your data remains on your iPhone and is never uploaded to cloud servers

**Note:** iCloud sync will be available as a premium feature in a future update.
```

---

### ✏️ Change 2: Section 4.1 "Services We Use" - Supabase

**FIND:**
```
#### Supabase (Backend & Authentication):
- **Purpose:** User authentication and data synchronization
- **Data Shared:** Email address, subscription data you create
```

**REPLACE WITH:**
```
#### Supabase (Authentication ONLY):
- **Purpose:** User authentication via Google OAuth ONLY
- **Data Shared:** Email address (for authentication purposes only)
- **Data NOT Shared:** Subscription data is NOT stored on Supabase
- **Scope:** Supabase is used exclusively for sign-in/sign-out functionality
```

---

### ✏️ Change 3: Section 1.2 "Information Collected Automatically"

**FIND (if present):**
Any mention of "data sync" or "cloud synchronization"

**REPLACE/CLARIFY:**
- Ensure no references to automatic cloud sync
- If mentioning data storage, specify "local device storage only"

---

### ✏️ Change 4: Section 2 "How We Use Your Information"

**FIND:**
```
#### Provide Core Functionality:
- Track your subscription services and free trials
- Calculate total spending and savings
- Send timely renewal reminders
- Sync your data across your devices
```

**REPLACE WITH:**
```
#### Provide Core Functionality:
- Track your subscription services and free trials
- Calculate total spending and savings
- Send timely renewal reminders
- Store your data securely on your device

**Note:** In v1.0, data is stored locally on your device only and does not sync across multiple devices.
```

---

### ✏️ Change 5: Add New Section "Data Sync Status"

**ADD THIS NEW SECTION** (after Section 3):

```
### 3.4 Data Sync Status (v1.0)

**Important Notice About Data Sync:**

In the current version (v1.0) of Kansyl:
- ❌ Your subscription data does NOT sync across devices
- ❌ Your data does NOT get backed up to iCloud or cloud storage
- ✅ Your data is stored ONLY on your iPhone using local Core Data storage
- ✅ Your data is protected by your device's security features (encryption, passcode, Face ID/Touch ID)

**Recommendation:** Use the "Export Data" feature (Settings → Account → Export Data) to create backups of your subscription data manually.

**Future Updates:** iCloud sync will be available as a premium feature in a future version.
```

---

### ✏️ Change 6: Section 13 "Transparency Report"

**FIND:**
```
### What Data We Collect:
- ✅ Email address (for authentication)
- ✅ Subscription information you enter
- ✅ Receipt text (only when using AI scanning)
- ✅ Basic app usage data (anonymized)
```

**ADD BELOW:**
```
### Where Your Data is Stored:
- ✅ Locally on your device (Core Data)
- ❌ NOT on cloud servers
- ❌ NOT synced to iCloud (in v1.0)
- ❌ NOT uploaded to Supabase
```

---

## 📜 TERMS OF SERVICE UPDATES

### ✏️ Change 1: Section 1.1 "What Kansyl Does"

**FIND:**
```
- Sync your subscription data across devices
```

**REPLACE WITH:**
```
- Store your subscription data securely on your device
```

**OR ADD CLARIFICATION:**
```
- Store your subscription data locally on your device (no cloud sync in v1.0)
```

---

### ✏️ Change 2: Section 8 "Third-Party Services" - Supabase

**FIND:**
```
#### Supabase (Backend & Authentication):
- **Purpose:** User authentication and data synchronization
- **Data Shared:** Email address, subscription data you create
```

**REPLACE WITH:**
```
#### Supabase (Authentication Only):
- **Purpose:** User authentication via Google OAuth
- **Data Shared:** Email address only (for authentication)
- **Data NOT Shared:** Your subscription data is NOT stored on or synced via Supabase
- **Scope:** Supabase is used exclusively for sign-in/sign-out functionality
```

---

### ✏️ Change 3: Section 8.3 "iCloud/CloudKit"

**REMOVE** any existing sections about iCloud/CloudKit (if present)

**OR ADD CLARIFICATION:**
```
#### iCloud/CloudKit (Not Used in v1.0):
- **Status:** Not implemented in version 1.0
- **Future Plans:** iCloud sync will be available as a premium feature in a future update
- **Current Storage:** All data is stored locally on your device using Core Data
```

---

## 📊 QUICK SUMMARY TABLE

| Feature | Current Status (v1.0) | Privacy Policy Status |
|---------|----------------------|----------------------|
| Local Core Data Storage | ✅ Active | ✅ Documented |
| Supabase (Auth Only) | ✅ Active | ✅ Corrected |
| iCloud/CloudKit Sync | ❌ Not Active | ✅ Clarified as "future feature" |
| Google OAuth | ✅ Active | ✅ Documented |
| DeepSeek AI (Receipts) | ✅ Active | ✅ Documented |
| Push Notifications | ✅ Configured | ✅ Documented |

---

## ✅ IMPLEMENTATION CHECKLIST

### Landing Page Updates:
- [ ] Update Privacy Policy on https://kansyl.juan-oclock.com/privacy
- [ ] Update Terms of Service on https://kansyl.juan-oclock.com/terms
- [ ] Update homepage if it mentions "iCloud sync"
- [ ] Update any feature lists that mention "sync across devices"
- [ ] Update FAQ if it mentions sync functionality
- [ ] Update "Last Updated" date on both documents to October 3, 2025

### App Store Connect:
- [ ] When filling out Privacy Details, select "No" for data syncing questions
- [ ] In app description, do NOT mention cross-device sync
- [ ] In "What's New" for v1.0, do NOT promise sync functionality

### Marketing Materials:
- [ ] Review any marketing copy for sync mentions
- [ ] Update feature lists to reflect local storage only
- [ ] Add "Coming Soon: iCloud Sync" as a roadmap item (optional)

---

## 📝 ADDITIONAL NOTES

### Why These Changes Matter:
1. **Apple Review:** Inaccurate privacy claims can cause rejection
2. **User Expectations:** Don't promise features that don't exist
3. **Legal Compliance:** Privacy policy must match actual data practices
4. **Future Flexibility:** Easy to add sync as "new feature" in v1.1

### When to Re-Update:
When you enable iCloud sync in a future version:
1. Uncomment CloudKit entitlements
2. Enable CloudKit container in Developer Portal
3. Test sync functionality thoroughly
4. Update Privacy Policy to include iCloud/CloudKit section
5. Update Terms to reflect sync feature
6. Update App Store description with "NEW: iCloud Sync"
7. Increment version to 1.1 or 2.0

---

## 🎯 SIMPLIFIED v1.0 DATA ARCHITECTURE

```
┌─────────────────────────────────────────┐
│           Kansyl v1.0 Data Flow         │
└─────────────────────────────────────────┘

User Authentication:
  ┌──────────┐
  │  Google  │──► Supabase Auth ──► Email stored
  └──────────┘                       (for login only)

Subscription Data:
  ┌──────────┐
  │  User    │──► Core Data ──► Local SQLite
  │  Input   │     (iPhone)      (device only)
  └──────────┘

Receipt Scanning:
  ┌──────────┐
  │  Camera  │──► Local OCR ──► Text extracted
  └──────────┘         │
                       ▼
                  DeepSeek API ──► Analysis returned
                                    (text only, not stored)

Result: All subscription data stays on device ✅
```

---

## 📞 CONTACT FOR QUESTIONS

If Apple reviewers ask about data storage:
- "All subscription data is stored locally on the user's device using Core Data"
- "Supabase is used only for Google OAuth authentication"
- "We do not sync or upload subscription data to cloud servers in v1.0"
- "iCloud sync is planned for a future premium feature"

---

**Status**: Ready to implement on landing page  
**Priority**: HIGH - Must be done before App Store submission  
**Estimated Time**: 15-20 minutes to update landing page

---

**Good luck with your App Store launch! 🚀**
