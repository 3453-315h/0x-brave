# Navigation to internal pages from the web

> Additionally, check `Torrent extension: Cross-origin downloading + "URL spoofing" + CSP-blocked XSS` and ""

## Summary

`http` and `https` pages are [disallowed from navigating](https://github.com/brave/muon/blob/master/atom/browser/extensions/atom_browser_client_extensions_part.cc#L289-L296) to `chrome-extension`.  However, `ftp` protocol isn't checked. Pages from `ftp:///` and `file:///` origin could navigate to `chrome-extension://` origin.


## Products affected

Brave: 0.23.31 
V8: 6.7.288.46 
rev: 3148acef36dba0fce89108638bb27927c4937f90 
Muon: 7.1.5 
OS Release: 17.6.0 
Update Channel: Release 
OS Architecture: x64 
OS Platform: macOS 
Node.js: 7.9.0 
Brave Sync: v1.4.2 
libchromiumcontent: 67.0.3396.103


## Impact

Navigation to `chrome-extension://` should be forbidden, because it's a bad behavior which creates additional attack vectors.

If some component(html file) inside an extension's folder is vulnerable to reflected XSS, then it's possible to navigate to this component from the web and execute arbitrary code in the context of this extension.