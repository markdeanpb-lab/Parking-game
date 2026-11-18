// Swap the launcher page for the TV or phone page markup (extracted at build time from client/{tv,phone}/index.html,
// so the web edition always matches the Node edition's pages) and load that page's stylesheet.
import SHELLS from 'markrun:shells';

export async function mountShell(role) {
  const sh = SHELLS[role];
  if (!sh) throw new Error(`no page shell for ${role}`);
  await Promise.all(sh.css.map((href) => new Promise((res) => {
    if (document.querySelector(`link[data-shell="${href}"]`)) return res();
    const l = document.createElement('link');
    l.rel = 'stylesheet'; l.href = href; l.dataset.shell = href;
    l.onload = res; l.onerror = res;
    document.head.appendChild(l);
  })));
  document.body.className = `${sh.bodyClass} web-edition web-${role}`;
  document.body.innerHTML = sh.html;
  document.title = role === 'tv' ? 'MARKRUN — TV' : 'MARKRUN';
}
