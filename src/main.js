const $ = (sel, ctx = document) => ctx.querySelector(sel);

const routes = {
  default: {
    h1: `Free CSV Streamliner - Clean & Optimize CSV Files Online`,
    title: `Free CSV Streamliner - Clean & Optimize CSV Files Online`,
    desc: `Clean, deduplicate, and transform CSV files in your browser. Remove empty rows, normalize headers, and prepare data for analytics without uploading files.`,
    keywords: 'CSV cleaner online, CSV deduplicator, normalize CSV headers, clean CSV file free, CSV data preparation tool'
  }
};

function applyRoute(route) {
  const r = routes[route];
  if (!r) return;
  document.title = r.title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', r.desc);
  const elTitle = $('#page-title');
  if (elTitle) elTitle.textContent = r.h1;
  const elLead = $('#page-lead');
  if (elLead) elLead.textContent = r.desc;
  const canonical = $('#canonical');
  if (canonical) canonical.setAttribute('href', window.location.origin + window.location.pathname);
}

applyRoute('default');
