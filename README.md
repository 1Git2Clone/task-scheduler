# Task Scheduler

[![GH_Build_Frontend Icon]][GH_Build Status]&emsp;[![License Icon]][LICENSE]

[GH_Build_Frontend Icon]: https://img.shields.io/github/actions/workflow/status/1git2clone/task-scheduler/frontend.yml?branch=main
[GH_Build Status]: https://github.com/1git2clone/task-scheduler/actions?query=branch%3Amaster
[License Icon]: https://img.shields.io/badge/license-MIT-blue.svg
[LICENSE]: LICENSE

<!-- markdownlint-disable MD033 -->
<p>
  <img
    height="50px"
    src="https://codeberg.org/1Kill2Steal/skill-icons/raw/branch/main/icons/Kotlin-Dark.svg"
    alt="Kotlin"
  />
  <img
    height="50px"
    src="https://codeberg.org/1Kill2Steal/skill-icons/raw/branch/main/icons/Gradle-Light.svg"
    alt="Gradle"
  />
  <img
    height="50px"
    src="https://codeberg.org/1Kill2Steal/skill-icons/raw/branch/main/icons/React-Dark.svg"
    alt="React"
  />
  <img
    height="50px"
    src="https://codeberg.org/1Kill2Steal/skill-icons/raw/branch/main/icons/Vite-Dark.svg"
    alt="Vite"
  />
  <img
    height="50px"
    src="https://codeberg.org/1Kill2Steal/skill-icons/raw/branch/main/icons/TailwindCSS-Dark.svg"
    alt="TailwindCSS"
  />
  <img
    height="50px"
    src="https://codeberg.org/1Kill2Steal/skill-icons/raw/branch/main/icons/TypeScript.svg"
    alt="TypeScript"
  />
  <img
    height="50px"
    src="https://codeberg.org/1Kill2Steal/skill-icons/raw/branch/main/icons/HTML.svg"
    alt="HTML"
  />
</p>
<!-- markdownlint-enable MD033 -->

An Android app made with Kotlin which integrates a native
[WebView](https://developer.android.com/reference/android/webkit/WebView) over
the front-end (check the [front-end README.md](frontend/README.md) file for
more info).

## Setting up

The build is a two-step process:

1. First build the front-end
2. Build the Android app.

### Building the front-end

`npm` and `yarn` instructions.

#### With npm

```sh
cd front-end
npm install
npm run build # You can watch a preview with: `npm run serve`
```

#### With yarn

```sh
cd front-end
yarn
yarn build # You can watch a preview with: `yarn serve`
```

### Building the android app

Use the [gradlew.bat](gradlew.bat) script on Windows or the [gradlew](gradlew)
script on Linux.

#### On Linux

```sh
./gradlew copyFrontendBuild
./gradlew assembleRelease # Or you can use `assembleDebug`.
```

#### On Windows

```bat
gradlew.bat copyFrontendBuild
gradlew.bat assembleRelease & :: Or you can use `assembleDebug`.
```
