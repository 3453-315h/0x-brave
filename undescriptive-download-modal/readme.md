## Summary:

1. Open `twitter.com` using `window.open`
2. Wait some time (to finish page rendering)
3. Change location to any downloading
4. Download modal appears above the `twitter.com`

The problem is that a user doesn't see what page exactly initiates downloading and what resource(URL) will be downloaded. 
It's possible to find out the URL of the downloaded file only after clicking "Save".

> FF has a similar modal window for downloads, however, FF shows the resource URL before downloading. Brave doesn't do that.

> Safari+Chrome allow downloads without confirmation, so this behavior is normal for them.

## Products affected: 

Brave: 0.23.19 
V8: 6.7.288.46 
rev: 178c3fbc045a0cbdbe098db08307503cce952081 
Muon: 7.1.3 
OS Release: 17.6.0 
Update Channel: Release 
OS Architecture: x64 
OS Platform: macOS 
Node.js: 7.9.0 
Tor: 0.3.3.7 (git-035a35178c92da94) 
Brave Sync: v1.4.2 
libchromiumcontent: 67.0.3396.87

## Steps To Reproduce:

Minimal PoC:
``` html
<script>
  function f() {
    w = window.open(`https://twitter.com`);
    setTimeout(() => {
      w.location.replace('./hello.jar')
    }, 3000)
  }
</script>

<h1>
  <a href="#" onclick="f()">Twitter</a>
</h1>
```

## Supporting Material/References:

[Live PoC](https://brave-download-modal-viabodpsch.now.sh).

PoC + screencast attached.

# Impact

This bug is related to UX and low severe. 
However, it makes #374106 much more avaliable, because it allows downloading a malicious `.jar` from a "trusted resource"(both problems related to downloads).

> As a bonus, take a look at the lock in the address bar after downloading.