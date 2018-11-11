# Unsafe handling of protocol handlers

> Link:          https://hackerone.com/reports/369185
> Date:          2018-06-20 14:09:09 +0000

## Summary

Brave browser handles protocol handlers in unsafe way (and differently from other browsers).
Key differences between protocol handlers handling in Brave and other browsers:

### Open external app vs Open "Terminal"

- Brave only asks about opening external app.
- Other browsers (e.g. Chrome) asks about opening a specific app.

Try to open a `ssh://` link in Chrome: it results in modal window with a question similar to "Do you want to open "Terminal"?"

Opening `ssh://` in Brave results in a popup with contents similar to : "Do you want to open external app for ssh://"

### Impact

1. User doesn't know which app will be opened after allowing to open an external app: it's easier for attacker to trick user into allowing opening an external app in Brave compared to other browsers.
2. Deanonymization via `ssh://` and `telnet://`

### ssh:// and telnet:// without confirm

In Chrome/Safari/FF, after allowing to open Terminal, Terminal shows an alert with a text similar to "Do you want to initiate ssh session with **example.com*".
Next things worth noting:

1. There is an additional alert after requesting access to Terminal in browser
2. Default answer in the popup is negative.
3. **example.com**: user sees exact host to which it will connect

Brave browser initiates ssh:// and telnet:// sessions automatically after opening external app (Terminal).

## Products affected: 

Brave	0.22.810
V8	6.7.288.43
rev	8f30eeb
Muon	7.0.6
OS Release	17.6.0
Update Channel	Release
OS Architecture	x64
OS Platform	macOS
Node.js	7.9.0
Brave Sync	v1.4.2
libchromiumcontent	67.0.3396.71

## Supporting Material/References

Screencast attached.