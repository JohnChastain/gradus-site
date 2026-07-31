# Gradus Website

A dependency-free static site for the Gradus product page, privacy policy, and
support documentation.

The production domain is `graduspractice.com`, registered through Porkbun. The
domain registration and website hosting are separate: the current plan is to
host this static site with GitHub Pages.

## Preview

From this folder:

```sh
python3 -m http.server 4173
```

Open `http://127.0.0.1:4173/`.

## Before External TestFlight

1. Replace the empty `supportEmail` value in `assets/site-config.js` with the
   address that should receive support and deletion requests. A domain-based
   address such as `support@graduspractice.com` is recommended, but it should
   not be published until forwarding or mailbox delivery has been configured.
2. Confirm the privacy policy's effective date and wording against the exact
   beta build before publishing it.
3. Host the site over HTTPS.
4. Add the public `/privacy/` URL to App Store Connect.
5. Add the public `/support/` URL as the Support URL.
6. Add the homepage as the optional Marketing URL.
7. Add the App Store listing URL to `appStoreURL` when it exists; the homepage
   will reveal that link only after a value is supplied.

## Hosting

The site uses plain HTML, CSS, and JavaScript, so it can be uploaded directly
to GitHub Pages, Cloudflare Pages, Netlify, or another static host. The
recommended GitHub setup is a separate public repository named `gradus-site`
with the contents of this directory at the repository root. Keep the iOS app
repository private. GitHub Pages requires a public repository on GitHub Free;
private-repository Pages hosting requires a paid GitHub plan.

The domain and DNS setup for `graduspractice.com` are documented in
[`DOMAIN_SETUP.md`](DOMAIN_SETUP.md). Keep these paths stable:

- `/privacy/`
- `/support/`

No analytics, cookies, external fonts, or third-party scripts are included.

The pages use relative URLs so the same `Website` directory works from a
custom domain or a repository subpath such as GitHub Pages.

## Current Deployment Status

- Domain: `graduspractice.com` registered; DNS is not connected yet.
- Hosting: not connected yet.
- Support email: intentionally unset in `assets/site-config.js`.
- App Store listing: not available yet, so `appStoreURL` remains empty.
