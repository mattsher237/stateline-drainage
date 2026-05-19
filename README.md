# State Line Drainage Co. — Operator Guide

A static one-page lead site. Plain HTML/CSS/JS. No backend. Hosted on Netlify, code on GitHub.

## Files
- `index.html` — the whole site
- `thanks.html` — shown after the form is submitted
- `style.css` — light, mobile-friendly styling
- `script.js` — small touches (year, smooth scroll, submit guard)
- `netlify.toml` — tells Netlify to publish the folder as-is (no build)

---

## 1. Edit your phone / email / city
These appear as placeholders. Replace EVERY occurrence before going live.

| Placeholder | Put your real value | Appears in |
|---|---|---|
| `[MY PHONE]` | Business phone (Google Voice is fine) | index.html, thanks.html |
| `[MY EMAIL]` | Business email | index.html, thanks.html |
| `[MY CITY]` | Base city, e.g. "Overland Park, KS" | index.html, thanks.html |

Fastest way (from the project folder), preview first:
```
grep -rn "\[MY PHONE\]\|\[MY EMAIL\]\|\[MY CITY\]" .
```
Then replace by hand in `index.html` and `thanks.html`, or with sed (example for phone):
```
sed -i '' 's/\[MY PHONE\]/816-555-0199/g' index.html thanks.html
```
Note: in `tel:` links remove spaces (e.g. `tel:8165550199`).

## 2. Test locally
```
cd /Users/sheridan/stateline-drainage
python3 -m http.server 8080
```
Open http://localhost:8080 — check the layout, buttons, and that the form shows.
(The form only actually submits once deployed to Netlify; locally it won't send.)

## 3. Deploy
Code lives on GitHub; Netlify auto-deploys every push to `main`.
```
git add .
git commit -m "Update site"
git push
```
Wait ~30 seconds, refresh the Netlify URL. That's the whole workflow.

## 4. How Netlify Forms works
- The form is named **`drainage-lead`** and has `data-netlify="true"` — Netlify detects it on deploy.
- A real submission is stored in Netlify → your site → **Forms → drainage-lead**.
- Turn on email alerts once: Netlify → Site config → **Forms → Form notifications → Add notification → Email**, send to your inbox.
- After submitting, the visitor lands on `thanks.html`.
- Backup: every page has a `mailto:[MY EMAIL]` link if someone can't use the form.
- Spam: a hidden honeypot field is already in place. No extra setup needed.

## 5. Update pricing
Open `index.html`, find the `<!-- PRICING -->` section, edit the table rows. Also update the `<!-- OFFER -->` section if the $149 inspection changes. Commit and push (step 3).

## 6. Change the domain later
1. Buy the domain (e.g. at Namecheap/Cloudflare).
2. Netlify → your site → **Domain settings → Add a custom domain**.
3. Follow Netlify's DNS instructions exactly. **Do not change DNS without confirming first.**
4. Until then your site is live on the free `*.netlify.app` URL — that works for taking leads today.

## 7. What NOT to touch
- The form's `name="drainage-lead"` and the hidden `form-name` input — changing these breaks lead capture.
- `data-netlify="true"` and the `bot-field` honeypot.
- The disclaimer text (legal positioning — keep it on every page).
- Don't add insurance-claim, "we handle your claim", "foundation repair", or "waterproofing guarantee" language. Blocked until verified.

## 8. Daily operating checklist
- [ ] Check Netlify Forms (or email alerts) for new leads
- [ ] Call/text every new lead within a few hours
- [ ] Book the $149 inspection; confirm address + time
- [ ] Before any dig: call 811
- [ ] Run the inspection using your printed checklist
- [ ] Send the written report + quote after the visit
- [ ] Collect payment manually (Venmo Business / Square / Stripe link / cash / check)
- [ ] Ask happy customers for a Google review

## Legal note
Have a local attorney review your work agreement before heavy use. Keep the disclaimer visible on every published page.
