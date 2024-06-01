# Orchis
Orchis is a QoL/Mod-focused server implementation/private server made with express for the game Dragalia Lost, which reached its End of Service on December 1st, 2022. It is designed to run in low-resource environments such as a Chromebook/ChromiumOS with less than 2GB of available RAM using nothing but the static 18.13 or higher NodeJS runtime.

All of the Character/Dragon/Wyrmprint/etc. data used by the server is found in `Library/IDMaps/` with the English name associated for ease of reference.

As stated, this server has some QoL changes (e.g. does not implement certain gacha mechanics like stamina). For a complete server project with all the moving parts, see this server's counterpart project [Dawnshard](https://github.com/SapiensAnatis/Dawnshard).

This server lacks certain login code, and relies on the client to be configured for a BaaS server (like the one [hosted by LukeFZ](https://baas.lukefz.xyz)) for logging in/account management.

---

# How to Run
1. Clone this repository
2. Install the dependencies through NPM
3. Copy the Fluoresce driver into the `node_modules` directory
4. Unzip the Quest zip in `Library/IDMaps/` to a `Quest` directory
5. Run Fluoresce + the Server

The code provided below is a quick copy-paste reference of the steps above:
```
git clone https://github.com/CerisWhite/Orchis --depth=1
npm install
mkdir node_modules/fluoresce && cp Library/Fluoresce/driver.js node_modules/fluoresce/index.js
unzip Library/IDMaps/Quest.zip -d Library/IDMaps/Quest
node Library/Fluoresce/fluoresce.js & node Orchis.js
```
It is recommended to run Fluoresce and Orchis inside of `screen` or another similar program.

It is also recommended to run the `save_db.sh` script (with bash!!) inside a separate screen to keep backups of the data from Fluoresce in the event of an emergency.

---

# Questions
- **Why are the Map files like that?**

Because it's faster than loading several JSON files from disk when they're going to stay in memory the entire time anyway.
- **What are the utility endpoints?**

Those are for a server hoster to use for various actions like editing "session" data or making changes to a savefile without the use of the BaaS.
- **What's with the suggestion keywords?**

Those are for players to use to edit their save or account so we don't have to use the utility endpoints constantly. The "Dawn" keyword (reference to the Dawnshard creature/item in the game, obviously) is for modders to set their account to the original EoS manifest so asset updates don't break things for them.
- **Why is this made for Chromebooks?**

This is an off-topic question. Next.
- **What is Zena?**

Zena is a Character in the game, and the inspiration of the Bot used in the DL Revived Discord Server for reporting different things from Orchis. Anything related to the bot functionality uses the name "Zena" in some way.
- **Why create Fluoresce instead of using an existing database program?**

Because other database programs relied on external dependencies, and in order to run on a Chromebook with only the NodeJS runtime, a pure-JS solution was needed.
- **Seriously, why Chromebooks?**

I like demonstrating how powerful "bad" hardware actually is in capable hands. I also wanted to make sure my code was well-optimized and the easiest way to do that is develop with constraints that force you to keep resource use low, kinda like ankle weights for the mind.

... And because I really like the colors of the default ChromeOS Text app (or at least did until they planned to "sunset" Chrome apps).

---

# Have an issue?
Feel free to open a bug report if you find a problem with the server. Feel free to open a pull request if you can fix said issue.

Do note that I will either manually reformat the code in pull requests or ask you to edit it to match my personal style. I believe code should take as little space as possible without being totally unreadable (and this actually reduces CPU cycles, too).