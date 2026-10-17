/* ---------------------------------------------------------------
   Site-wide script. The only thing you ever need to edit is the
   ADSENSE_CLIENT value below. Leave it empty until Google approves
   your site, then paste your publisher ID (looks like ca-pub-1234…).
   Auto ads are used, so no per-page ad slot IDs are required.
   --------------------------------------------------------------- */
const ADSENSE_CLIENT = "";

(function () {
  document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());

  // Close the tools menu when clicking elsewhere.
  const menu = document.querySelector(".menu details");
  if (menu) document.addEventListener("click", e => { if (!menu.contains(e.target)) menu.removeAttribute("open"); });

  if (!ADSENSE_CLIENT) return;

  const s = document.createElement("script");
  s.async = true;
  s.crossOrigin = "anonymous";
  s.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=" + ADSENSE_CLIENT;
  document.head.appendChild(s);

  // Reserve the placeholder containers so auto ads have obvious anchor points.
  document.querySelectorAll("[data-ad]").forEach(el => {
    el.classList.add("live");
    const ins = document.createElement("ins");
    ins.className = "adsbygoogle";
    ins.style.display = "block";
    ins.setAttribute("data-ad-client", ADSENSE_CLIENT);
    ins.setAttribute("data-ad-format", "auto");
    ins.setAttribute("data-full-width-responsive", "true");
    el.appendChild(ins);
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  });
})();
