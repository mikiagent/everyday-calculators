/* ---------------------------------------------------------------
   Site-wide script. The AdSense loader tag lives in the <head> of
   every page (it is what Google checks for site verification).
   This file only places ad containers. To turn ads off, set
   SHOW_ADS to false. The publisher ID below must match the <head> tag.
   --------------------------------------------------------------- */
const SHOW_ADS = true;
const ADSENSE_CLIENT = "ca-pub-6122961547647042";

(function () {
  document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());

  // Close the tools menu when clicking elsewhere.
  const menu = document.querySelector(".menu details");
  if (menu) document.addEventListener("click", e => { if (!menu.contains(e.target)) menu.removeAttribute("open"); });

  if (!SHOW_ADS) return;

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
