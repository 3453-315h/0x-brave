# Navigation to `chrome-extension://` origin (internal pages) from the web

> Link:          https://hackerone.com/reports/378805
> Date:          2018-07-07 10:58:39 +0000

## Summary

`http` and `https` pages are [disallowed from navigating](https://github.com/brave/muon/blob/master/atom/browser/extensions/atom_browser_client_extensions_part.cc#L289-L296) to `chrome-extension://` origin.  However, `ftp` protocol isn't checked. Pages from `ftp:///` and `file:///` origins could navigate to `chrome-extension://`.

### Steps to reproduce:

1. Start ftp server (sample ftp server attached, `npm i ftpd && node ftp-server.js`
2. Open `ftp://localhost:7002/exploit.html`
3. Click "Go to payment settings"
4. `about:preferences#payments` page opens (`window.open`)

## Products affected

Brave: 0.23.31

## Impact

Navigation to `chrome-extension://` should be forbidden, because it creates additional attack vectors:

- reflected XSS as was shown in ["Torrent extension: Cross-origin downloading + "URL spoofing" + CSP-blocked XSS"](https://hackerone.com/reports/378864)
- `postMessage`-based vulns
