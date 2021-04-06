https://aryn.dev

### A better client
https://github.com/SebOuellette/LiveBot
this one is just better in every way. they even have a better README. go check it out.

# bot-client
A discord client to interact as a bot user.


### Releases

Windows release is an installer, installs like any other software.

Linux release is a shell script that attaches to the console with no installation.

### Building from source
Building is super easy.

```
git clone https://github.com/arynthernium/bot-client
cd bot-client
npm i
npm run make
```
These commands are platform-independent, the program will be built for the host platform.
For linux releases, I've used [makeself](https://github.com/megastep/makeself) to create the single-file release.