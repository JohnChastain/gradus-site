# Gradus Domain Setup

This is the setup checklist for publishing the website at `graduspractice.com`.

## Current State

- Domain: `graduspractice.com`
- Registrar: Porkbun
- Planned host: GitHub Pages
- Recommended website repository: public `JohnChastain/gradus-site`
- App repository: private `JohnChastain/gradus`

The domain registration is complete. The remaining work is to publish the site,
connect DNS, configure support contact delivery, and verify the public URLs.

## Recommended Sequence

1. Create a public GitHub repository named `gradus-site`.
2. Copy the contents of this `Website` directory into the root of that
   repository. Do not expose the private iOS app repository.
3. Push the site to the repository's `main` branch.
4. In GitHub, open **Settings > Pages** and publish from the `main` branch's
   root directory.
5. Verify ownership of `graduspractice.com` with the TXT record GitHub
   provides. Do this before connecting the domain to reduce the risk of a
   domain takeover. See [GitHub's custom-domain guidance][github-domain].
6. Add `graduspractice.com` as the custom domain in the repository's Pages
   settings.
7. In Porkbun DNS, add these GitHub Pages records for the apex domain:

   | Type | Host | Value |
   | --- | --- | --- |
   | A | `@` | `185.199.108.153` |
   | A | `@` | `185.199.109.153` |
   | A | `@` | `185.199.110.153` |
   | A | `@` | `185.199.111.153` |
   | CNAME | `www` | `JohnChastain.github.io` |

   Remove conflicting default records for `@` or `www`. Do not add wildcard
   DNS records. GitHub reports that DNS changes can take up to 24 hours.
8. Wait for GitHub to issue the certificate, then enable **Enforce HTTPS**.
9. Configure a support address, preferably `support@graduspractice.com`, and
   update `assets/site-config.js` only after messages can actually be received.
10. Test these public URLs on both desktop and iPhone:

    - `https://graduspractice.com/`
    - `https://graduspractice.com/privacy/`
    - `https://graduspractice.com/support/`
    - An invalid path to confirm the custom 404 page

## App Store Connect URLs

After the public site is working:

- Privacy Policy URL: `https://graduspractice.com/privacy/`
- Support URL: `https://graduspractice.com/support/`
- Marketing URL: `https://graduspractice.com/`

Confirm that the privacy policy reflects the exact build being submitted and
that the support address is live before entering these URLs in App Store
Connect.

## References

- [GitHub: managing a custom domain for GitHub Pages][github-domain]
- [GitHub: securing a custom domain with HTTPS][github-https]

[github-domain]: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
[github-https]: https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https
