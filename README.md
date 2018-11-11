# 0x-Brave

This repo contains PoCs, reports and screencasts of my submissions to Brave browser on H1.
READMEs are free from speculative bullshit and other. Only real impact.

And also funny stories. Yeah, "funny" stories from hacking Brave.

## Reports

<!-- https://hackerone.com/reports/ -->

| Description                                                                                   | Hackerone         | Folder     | Reported | Closed    | Chained |
| --------------------------------------------------------------------------------------------- | ----------------- | ---------- | -------- | --------- | ------- |
| Infinite DoS in Brave iOS                                                                     | [#357665](357665) | `/dos-ios` | May 26th | > Jul 7th |         |
| Navigation to protocol handler URL from the opened page displayed as a request from this page | [#357665](357665) | `/dos-ios` |          |           |
| Infinite DoS in Brave iOS                                                                     | [#357665](357665) | `/dos-ios` |          |           |
| Infinite DoS in Brave iOS                                                                     | [#357665](357665) | `/dos-ios` |          |           |
| Infinite DoS in Brave iOS                                                                     | [#357665](357665) | `/dos-ios` |          |           |
| Infinite DoS in Brave iOS                                                                     | [#357665](357665) | `/dos-ios` |          |           |
| Infinite DoS in Brave iOS                                                                     | [#357665](357665) | `/dos-ios` |          |           |
| Infinite DoS in Brave iOS                                                                     | [#357665](357665) | `/dos-ios` |          |           |
| Infinite DoS in Brave iOS                                                                     | [#357665](357665) | `/dos-ios` |          |           |
| Infinite DoS in Brave iOS                                                                     | [#357665](357665) | `/dos-ios` |          |           |
| Infinite DoS in Brave iOS                                                                     | [#357665](357665) | `/dos-ios` |          |           |
| Infinite DoS in Brave iOS                                                                     | [#357665](357665) | `/dos-ios` |          |           |
| Infinite DoS in Brave iOS                                                                     | [#357665](357665) | `/dos-ios` |          |           |


> $$$ only because of that case with increasing bounties.

## Funny stories I'll add to my post on Medium

### How Brave closed valid reports

Brave closed 4 valid reports as duplicate of and was ignoring me for ~2 months:

I asked H1 support 4 times, DM diracdeltas, posted 3 times additional questions/comments.
Finally, I was able to triage this reports after DM diracdeltas on Twitter second time.

She said Tom Lowenthal is in triage for this reports. I sent DM to Tom on Twitter, but he didn't respond me :(

### Why they are unfriendly

Because of:
- 

### How Brave increased bounty to Masato and forgot about my reports

There was a scandal after Masato's report was dislosed. Masato discovered a 0day in Electron and repotte


### How Brave shoot own leg with local files reading

- I've reported "Local files reading from file://" and add suggested a fix
- They ignored my suggestion and added `brave://` protocol as a fix
- Their QA/security teams checked only `file://`, but not `brave://`
- `brave://` pseudoprotocol introduced a more severe vulnerability: "Local files reading from the web"
- AFAIR, I was busy and reported a fix only on 3rd day after `brave://` was deployed in production

### How to save Brave from their PR team

Just said them to sell this bravshit with "SEE ADS FOR MONEY" and ignore

### Why I don't recommend to use Brave

### Why Brave == Chromium + Adblock

###
