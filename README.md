# Demo for Expo

While developing [thermo-demo](https://github.com/geirman/thermo-demo), which uses [Expo.Fingerprint](https://docs.expo.io/versions/latest/sdk/fingerprint.html), I noticed that when I'd make changes to the app, Fingerprint auth would sometimes automatically fail auth with the reason `user_cancel`. [I mentioned this to Brent](https://gist.github.com/brentvatne/bda3e052710cb96efc7e59ede781a398) and he suggested I create a repo with a minimal case, issolating the problem so they coudl better investigate. This is that repo.

# Install
1. clone the repo
2. `yarn` or `npm install`
3. The project in [Expo](https://expo.io)
4. Install the Expo app for your iOS or Android device
5. Have a blast!

# Steps to duplicate the issue
1. Launch app through expo on an Android phone with fingerprint auth (unsure if the problem also exists on iPhone)

NOTE: Everything works as expected. I see the "Waiting for fingerprint..." message.

2. Refresh app using the tray until instead of "Waiting for..." message as expected, you get a "user_cancel" error. It may take a couple times.

NOTE: no matter how many times I refresh the app, I rarely get back to a working state.

3. Close both the app and expo. Restart Expo, then launch the app.

NOTE: we're working again.

# GIF Demo
![fingerprint-demo2](https://user-images.githubusercontent.com/1640318/29236648-5052f358-7ec2-11e7-9fa2-9ef64c1b0ee1.gif)




