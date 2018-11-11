Muon sends AppleEvent to the Finder to open a file => Brave -> Finder -> Terminal/<etc>.

Chromium opens files using NSWorkspace => Chromium doesn't have access to Terminal/<etc>.

Implementation of OpenItem in Electron is identical with Chromium's implementation. 
So this is a Muon bug.

It also makes sense to take a look at Linux/Win implementation, because they differ from Chromium's.

