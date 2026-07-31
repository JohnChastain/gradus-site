(() => {
  const config = window.GRADUS_SITE_CONFIG || {};
  const currentYear = String(new Date().getFullYear());

  document.querySelectorAll("[data-current-year]").forEach((element) => {
    element.textContent = currentYear;
  });

  const safeEmail = String(config.supportEmail || "").trim();
  if (safeEmail) {
    const mailto = `mailto:${encodeURIComponent(safeEmail)}?subject=${encodeURIComponent("Gradus support")}`;

    document.querySelectorAll("[data-contact-copy]").forEach((element) => {
      element.replaceChildren(
        "Questions, privacy requests, or deletion requests that cannot be completed in the app can be sent to ",
        emailLink(safeEmail, mailto),
        "."
      );
    });

    document.querySelectorAll("[data-contact-action]").forEach((element) => {
      const link = emailLink(`Email ${safeEmail}`, mailto);
      link.className = "button button-primary";
      element.replaceChildren(link);
    });
  }

  const appStoreURL = String(config.appStoreURL || "").trim();
  if (appStoreURL) {
    document.querySelectorAll("[data-app-store-link]").forEach((link) => {
      link.href = appStoreURL;
      link.hidden = false;
    });
  }

  function emailLink(label, href) {
    const link = document.createElement("a");
    link.href = href;
    link.textContent = label;
    return link;
  }
})();
