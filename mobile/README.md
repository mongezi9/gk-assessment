# Javascript WebdriverIO Client Sample Code

## Setup

* Must have NodeJS and NPM installed (https://nodejs.org/en/)
* `cd gk/mobile` 
* Install dependencies by running `npm install`
* Install Android Studio Emulators/GenyMotion for Simulators/Emulators
> Android Studio (https://developer.android.com/studio?gclid=CjwKCAjw07qDBhBxEiwA6pPbHi6njA3mDYi2TvJKJvgMrOflclxHkVxo1WwbKm88hekngq36yI-ANRoCA0oQAvD_BwE&gclsrc=aw.ds)
> Genymotion (https://www.genymotion.com/)
* Download (https://aimp.en.uptodown.com/android) and add the .apk file under */apps/ as **aimp-v2.apk**

## Running Tests

* To run all of the tests, run `npm test`
* To run individual tests, run `$(npm bin)/mocha test/path/to/test.js`

## Troubleshooting

* ``` JAVA_HOME not set```
  - Ensure that JAVA is installedcorrectly by following 
 (https://confluence.atlassian.com/doc/setting-the-java_home-variable-in-windows-8895.html)

* ``` ANDROID_SDK_ROOT not found```
  - Ensure you have Android SDK and envrironment vars are exposed and accessible(https://stackoverflow.com/questions/26356359/error-android-home-is-not-set-and-android-command-not-in-your-path-you-must)

## Output
cli logs
```sh
2021-04-09T00:47:48.928Z INFO webdriver: COMMAND findElements("xpath", "(*//com.aimp.skinengine.controls.SkinnedButton)[1]")
2021-04-09T00:47:48.966Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/elements
2021-04-09T00:47:48.968Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//com.aimp.skinengine.controls.SkinnedButton)[1]'
}
2021-04-09T00:47:48.985Z INFO webdriver: COMMAND findElement("xpath", "(*//com.aimp.skinengine.controls.SkinnedButton)[4]")
2021-04-09T00:47:49.019Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/element
2021-04-09T00:47:49.022Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//com.aimp.skinengine.controls.SkinnedButton)[4]'
}
2021-04-09T00:47:49.117Z INFO webdriver: RESULT {
  error: 'no such element',
  message: 'An element could not be located on the page using the given search parameters.',
  stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
    '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Administrator\\AppData\\Local\\Programs\\Appium\\resources\\app\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
    '    at runMicrotasks (<anonymous>)\n' +
    '    at processTicksAndRejections (internal/process/task_queues.js:85:5)'
}
2021-04-09T00:47:49.205Z INFO webdriver: RESULT []
2021-04-09T00:47:49.214Z INFO webdriver: COMMAND findElement("xpath", "(*//android.view.ViewGroup/android.view.View)[4]")
2021-04-09T00:47:49.215Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/element
2021-04-09T00:47:49.216Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//android.view.ViewGroup/android.view.View)[4]'
}
2021-04-09T00:47:49.220Z INFO webdriver: COMMAND findElements("xpath", "(*//android.view.ViewGroup/android.view.View)[4]")
2021-04-09T00:47:49.249Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/elements
2021-04-09T00:47:49.250Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//android.view.ViewGroup/android.view.View)[4]'
}
2021-04-09T00:47:49.270Z INFO webdriver: RESULT {
  error: 'no such element',
  message: 'An element could not be located on the page using the given search parameters.',
  stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
    '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Administrator\\AppData\\Local\\Programs\\Appium\\resources\\app\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
    '    at runMicrotasks (<anonymous>)\n' +
    '    at processTicksAndRejections (internal/process/task_queues.js:85:5)'
}
2021-04-09T00:47:49.366Z INFO webdriver: RESULT []
2021-04-09T00:47:49.400Z INFO webdriver: RESULT {
  error: 'no such element',
  message: 'An element could not be located on the page using the given search parameters.',
  stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
    '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Administrator\\AppData\\Local\\Programs\\Appium\\resources\\app\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
    '    at runMicrotasks (<anonymous>)\n' +
    '    at processTicksAndRejections (internal/process/task_queues.js:85:5)'
}
2021-04-09T00:47:49.455Z INFO webdriver: COMMAND findElement("xpath", "(*//com.aimp.skinengine.controls.SkinnedButton)[1]")
2021-04-09T00:47:49.463Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/element
2021-04-09T00:47:49.466Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//com.aimp.skinengine.controls.SkinnedButton)[1]'
}
2021-04-09T00:47:49.499Z INFO webdriver: COMMAND findElement("xpath", "(*//com.aimp.skinengine.controls.SkinnedButton)[1]")
2021-04-09T00:47:49.522Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/element
2021-04-09T00:47:49.527Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//com.aimp.skinengine.controls.SkinnedButton)[1]'
}
2021-04-09T00:47:49.565Z INFO webdriver: COMMAND findElements("xpath", "(*//com.aimp.skinengine.controls.SkinnedButton)[1]")
2021-04-09T00:47:49.655Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/elements
2021-04-09T00:47:49.656Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//com.aimp.skinengine.controls.SkinnedButton)[1]'
}
2021-04-09T00:47:49.665Z INFO webdriver: COMMAND findElement("xpath", "(*//com.aimp.skinengine.controls.SkinnedButton)[4]")
2021-04-09T00:47:49.719Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/element
2021-04-09T00:47:49.766Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//com.aimp.skinengine.controls.SkinnedButton)[4]'
}
2021-04-09T00:47:49.773Z INFO webdriver: RESULT {
  error: 'no such element',
  message: 'An element could not be located on the page using the given search parameters.',
  stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
    '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Administrator\\AppData\\Local\\Programs\\Appium\\resources\\app\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
    '    at runMicrotasks (<anonymous>)\n' +
    '    at processTicksAndRejections (internal/process/task_queues.js:85:5)'
}
2021-04-09T00:47:49.838Z INFO webdriver: RESULT []
2021-04-09T00:47:49.856Z INFO webdriver: RESULT {
  error: 'no such element',
  message: 'An element could not be located on the page using the given search parameters.',
  stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
    '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Administrator\\AppData\\Local\\Programs\\Appium\\resources\\app\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
    '    at runMicrotasks (<anonymous>)\n' +
    '    at processTicksAndRejections (internal/process/task_queues.js:85:5)'
}
2021-04-09T00:47:49.872Z INFO webdriver: COMMAND findElement("xpath", "(*//android.view.ViewGroup/android.view.View)[5]")
2021-04-09T00:47:49.876Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/element
2021-04-09T00:47:49.878Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//android.view.ViewGroup/android.view.View)[5]'
}
2021-04-09T00:47:49.882Z INFO webdriver: COMMAND findElement("xpath", "(*//com.aimp.skinengine.controls.SkinnedButton)[1]")
2021-04-09T00:47:49.883Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/element
2021-04-09T00:47:49.885Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//com.aimp.skinengine.controls.SkinnedButton)[1]'
}
2021-04-09T00:47:49.887Z INFO webdriver: COMMAND findElements("xpath", "(*//com.aimp.skinengine.controls.SkinnedButton)[1]")
2021-04-09T00:47:49.891Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/elements
2021-04-09T00:47:49.895Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//com.aimp.skinengine.controls.SkinnedButton)[1]'
}
2021-04-09T00:47:49.917Z INFO webdriver: RESULT {
  error: 'no such element',
  message: 'An element could not be located on the page using the given search parameters.',
  stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
    '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Administrator\\AppData\\Local\\Programs\\Appium\\resources\\app\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
    '    at runMicrotasks (<anonymous>)\n' +
    '    at processTicksAndRejections (internal/process/task_queues.js:85:5)'
}
2021-04-09T00:47:49.953Z INFO webdriver: RESULT []
2021-04-09T00:47:50.015Z INFO webdriver: RESULT {
  error: 'no such element',
  message: 'An element could not be located on the page using the given search parameters.',
  stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
    '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Administrator\\AppData\\Local\\Programs\\Appium\\resources\\app\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
    '    at runMicrotasks (<anonymous>)\n' +
    '    at processTicksAndRejections (internal/process/task_queues.js:85:5)'
}
2021-04-09T00:47:50.100Z INFO webdriver: RESULT {
  error: 'no such element',
  message: 'An element could not be located on the page using the given search parameters.',
  stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
    '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Administrator\\AppData\\Local\\Programs\\Appium\\resources\\app\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
    '    at runMicrotasks (<anonymous>)\n' +
    '    at processTicksAndRejections (internal/process/task_queues.js:85:5)'
}
2021-04-09T00:47:50.140Z INFO webdriver: COMMAND findElement("xpath", "(*//com.aimp.skinengine.controls.SkinnedButton)[4]")
2021-04-09T00:47:50.145Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/element
2021-04-09T00:47:50.147Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//com.aimp.skinengine.controls.SkinnedButton)[4]'
}
2021-04-09T00:47:50.150Z INFO webdriver: COMMAND findElement("xpath", "(*//android.view.ViewGroup/android.view.View)[5]")
2021-04-09T00:47:50.151Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/element
2021-04-09T00:47:50.155Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//android.view.ViewGroup/android.view.View)[5]'
}
2021-04-09T00:47:50.170Z INFO webdriver: COMMAND findElements("xpath", "(*//android.view.ViewGroup/android.view.View)[5]")
2021-04-09T00:47:50.172Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/elements
2021-04-09T00:47:50.178Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//android.view.ViewGroup/android.view.View)[5]'
}
2021-04-09T00:47:50.185Z INFO webdriver: COMMAND findElement("xpath", "(*//com.aimp.skinengine.controls.SkinnedButton)[4]")
2021-04-09T00:47:50.367Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/element
2021-04-09T00:47:50.369Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//com.aimp.skinengine.controls.SkinnedButton)[4]'
}
2021-04-09T00:47:50.385Z INFO webdriver: RESULT {
  error: 'no such element',
  message: 'An element could not be located on the page using the given search parameters.',
  stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
    '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Administrator\\AppData\\Local\\Programs\\Appium\\resources\\app\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
    '    at runMicrotasks (<anonymous>)\n' +
    '    at processTicksAndRejections (internal/process/task_queues.js:85:5)'
}
2021-04-09T00:47:50.447Z INFO webdriver: RESULT []
2021-04-09T00:47:50.496Z INFO webdriver: COMMAND findElement("xpath", "(*//com.aimp.skinengine.controls.SkinnedButton)[1]")
2021-04-09T00:47:50.499Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/element
2021-04-09T00:47:50.500Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//com.aimp.skinengine.controls.SkinnedButton)[1]'
}
2021-04-09T00:47:50.505Z INFO webdriver: COMMAND findElements("xpath", "(*//com.aimp.skinengine.controls.SkinnedButton)[1]")
2021-04-09T00:47:50.622Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/elements
2021-04-09T00:47:50.629Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//com.aimp.skinengine.controls.SkinnedButton)[1]'
}
2021-04-09T00:47:50.635Z INFO webdriver: RESULT {
  error: 'no such element',
  message: 'An element could not be located on the page using the given search parameters.',
  stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
    '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Administrator\\AppData\\Local\\Programs\\Appium\\resources\\app\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
    '    at runMicrotasks (<anonymous>)\n' +
    '    at processTicksAndRejections (internal/process/task_queues.js:85:5)'
}
2021-04-09T00:47:50.706Z INFO webdriver: COMMAND getCurrentActivity()
2021-04-09T00:47:50.712Z INFO webdriver: [GET] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/appium/device/current_activity
2021-04-09T00:47:50.714Z INFO webdriver: COMMAND findElement("xpath", "(*//com.aimp.skinengine.controls.SkinnedButton)[4]")
2021-04-09T00:47:50.716Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/element
2021-04-09T00:47:50.717Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//com.aimp.skinengine.controls.SkinnedButton)[4]'
}
2021-04-09T00:47:50.732Z INFO webdriver: RESULT {
  error: 'no such element',
  message: 'An element could not be located on the page using the given search parameters.',
  stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
    '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Administrator\\AppData\\Local\\Programs\\Appium\\resources\\app\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
    '    at runMicrotasks (<anonymous>)\n' +
    '    at processTicksAndRejections (internal/process/task_queues.js:85:5)'
}
2021-04-09T00:47:50.874Z INFO webdriver: RESULT []
2021-04-09T00:47:50.883Z INFO webdriver: RESULT {
  error: 'no such element',
  message: 'An element could not be located on the page using the given search parameters.',
  stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
    '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Administrator\\AppData\\Local\\Programs\\Appium\\resources\\app\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
    '    at runMicrotasks (<anonymous>)\n' +
    '    at processTicksAndRejections (internal/process/task_queues.js:85:5)'
}
2021-04-09T00:47:50.894Z INFO webdriver: COMMAND findElement("xpath", "(*//android.view.ViewGroup/android.view.View)[5]")
2021-04-09T00:47:50.895Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/element
2021-04-09T00:47:50.896Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//android.view.ViewGroup/android.view.View)[5]'
}
2021-04-09T00:47:50.900Z INFO webdriver: COMMAND findElements("xpath", "(*//android.view.ViewGroup/android.view.View)[5]")
2021-04-09T00:47:50.970Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/elements
2021-04-09T00:47:50.971Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//android.view.ViewGroup/android.view.View)[5]'
}
2021-04-09T00:47:50.983Z INFO webdriver: RESULT {
  error: 'no such element',
  message: 'An element could not be located on the page using the given search parameters.',
  stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
    '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Administrator\\AppData\\Local\\Programs\\Appium\\resources\\app\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
    '    at runMicrotasks (<anonymous>)\n' +
    '    at processTicksAndRejections (internal/process/task_queues.js:85:5)'
}
2021-04-09T00:47:51.106Z INFO webdriver: RESULT []
2021-04-09T00:47:51.116Z INFO webdriver: RESULT .Launcher
Favorites ---> .Launcher
2021-04-09T00:47:51.118Z INFO webdriver: COMMAND getCurrentActivity()
2021-04-09T00:47:51.139Z INFO webdriver: [GET] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/appium/device/current_activity
2021-04-09T00:47:51.151Z INFO webdriver: COMMAND findElement("xpath", "(*//com.aimp.skinengine.controls.SkinnedButton)[1]")
2021-04-09T00:47:51.161Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/element
2021-04-09T00:47:51.166Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//com.aimp.skinengine.controls.SkinnedButton)[1]'
}
2021-04-09T00:47:51.185Z INFO webdriver: COMMAND findElements("xpath", "(*//com.aimp.skinengine.controls.SkinnedButton)[1]")
2021-04-09T00:47:51.188Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/elements
2021-04-09T00:47:51.221Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//com.aimp.skinengine.controls.SkinnedButton)[1]'
}
2021-04-09T00:47:51.238Z INFO webdriver: RESULT {
  error: 'no such element',
  message: 'An element could not be located on the page using the given search parameters.',
  stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
    '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Administrator\\AppData\\Local\\Programs\\Appium\\resources\\app\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
    '    at runMicrotasks (<anonymous>)\n' +
    '    at processTicksAndRejections (internal/process/task_queues.js:85:5)'
}
2021-04-09T00:47:51.283Z INFO webdriver: RESULT []
2021-04-09T00:47:51.295Z INFO webdriver: COMMAND findElement("xpath", "(*//android.view.ViewGroup/android.view.View)[5]")
2021-04-09T00:47:51.307Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/element
2021-04-09T00:47:51.323Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//android.view.ViewGroup/android.view.View)[5]'
}
2021-04-09T00:47:51.372Z INFO webdriver: COMMAND findElements("xpath", "(*//android.view.ViewGroup/android.view.View)[5]")
2021-04-09T00:47:51.412Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/elements
2021-04-09T00:47:51.416Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//android.view.ViewGroup/android.view.View)[5]'
}
2021-04-09T00:47:51.422Z INFO webdriver: RESULT {
  error: 'no such element',
  message: 'An element could not be located on the page using the given search parameters.',
  stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
    '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Administrator\\AppData\\Local\\Programs\\Appium\\resources\\app\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
    '    at runMicrotasks (<anonymous>)\n' +
    '    at processTicksAndRejections (internal/process/task_queues.js:85:5)'
}
2021-04-09T00:47:51.650Z INFO webdriver: RESULT .Launcher
    3) test navigating to Favorites activity
2021-04-09T00:47:51.700Z INFO webdriver: RESULT {
  error: 'no such element',
  message: 'An element could not be located on the page using the given search parameters.',
  stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
    '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Administrator\\AppData\\Local\\Programs\\Appium\\resources\\app\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
    '    at runMicrotasks (<anonymous>)\n' +
    '    at processTicksAndRejections (internal/process/task_queues.js:85:5)'
}
2021-04-09T00:47:51.738Z INFO webdriver: RESULT []
2021-04-09T00:47:51.767Z INFO webdriver: COMMAND findElement("xpath", "(*//com.aimp.skinengine.controls.SkinnedButton)[4]")
2021-04-09T00:47:51.771Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/element
2021-04-09T00:47:51.772Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//com.aimp.skinengine.controls.SkinnedButton)[4]'
}
2021-04-09T00:47:51.881Z INFO webdriver: COMMAND findElement("xpath", "(*//com.aimp.skinengine.controls.SkinnedButton)[1]")
2021-04-09T00:47:52.102Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/element
2021-04-09T00:47:52.135Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//com.aimp.skinengine.controls.SkinnedButton)[1]'
}
2021-04-09T00:47:52.139Z INFO webdriver: COMMAND findElements("xpath", "(*//com.aimp.skinengine.controls.SkinnedButton)[1]")
2021-04-09T00:47:52.218Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/elements
2021-04-09T00:47:52.219Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//com.aimp.skinengine.controls.SkinnedButton)[1]'
}
2021-04-09T00:47:52.234Z INFO webdriver: RESULT {
  error: 'no such element',
  message: 'An element could not be located on the page using the given search parameters.',
  stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
    '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Administrator\\AppData\\Local\\Programs\\Appium\\resources\\app\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
    '    at runMicrotasks (<anonymous>)\n' +
    '    at processTicksAndRejections (internal/process/task_queues.js:85:5)'
}
2021-04-09T00:47:52.353Z INFO webdriver: RESULT []
2021-04-09T00:47:52.372Z INFO webdriver: RESULT {
  error: 'no such element',
  message: 'An element could not be located on the page using the given search parameters.',
  stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
    '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Administrator\\AppData\\Local\\Programs\\Appium\\resources\\app\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
    '    at runMicrotasks (<anonymous>)\n' +
    '    at processTicksAndRejections (internal/process/task_queues.js:85:5)'
}
2021-04-09T00:47:52.392Z INFO webdriver: RESULT {
  error: 'no such element',
  message: 'An element could not be located on the page using the given search parameters.',
  stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
    '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Administrator\\AppData\\Local\\Programs\\Appium\\resources\\app\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
    '    at runMicrotasks (<anonymous>)\n' +
    '    at processTicksAndRejections (internal/process/task_queues.js:85:5)'
}
2021-04-09T00:47:52.415Z INFO webdriver: RESULT []
2021-04-09T00:47:52.419Z INFO webdriver: COMMAND findElement("xpath", "(*//android.view.ViewGroup/android.view.View)[5]")
2021-04-09T00:47:52.421Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/element
2021-04-09T00:47:52.422Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//android.view.ViewGroup/android.view.View)[5]'
}
2021-04-09T00:47:52.483Z INFO webdriver: COMMAND findElements("xpath", "(*//android.view.ViewGroup/android.view.View)[5]")
2021-04-09T00:47:52.587Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/elements
2021-04-09T00:47:52.588Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//android.view.ViewGroup/android.view.View)[5]'
}
2021-04-09T00:47:52.603Z INFO webdriver: COMMAND findElement("xpath", "(*//com.aimp.skinengine.controls.SkinnedButton)[4]")
2021-04-09T00:47:52.606Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/element
2021-04-09T00:47:52.619Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//com.aimp.skinengine.controls.SkinnedButton)[4]'
}
2021-04-09T00:47:52.633Z INFO webdriver: COMMAND findElement("xpath", "(*//com.aimp.skinengine.controls.SkinnedButton)[1]")
2021-04-09T00:47:52.637Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/element
2021-04-09T00:47:52.639Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//com.aimp.skinengine.controls.SkinnedButton)[1]'
}
2021-04-09T00:47:52.740Z INFO webdriver: COMMAND findElements("xpath", "(*//com.aimp.skinengine.controls.SkinnedButton)[1]")
2021-04-09T00:47:52.779Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/elements
2021-04-09T00:47:52.781Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//com.aimp.skinengine.controls.SkinnedButton)[1]'
}
2021-04-09T00:47:52.801Z INFO webdriver: COMMAND findElement("xpath", "(*//com.aimp.skinengine.controls.SkinnedButton)[1]")
2021-04-09T00:47:52.832Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/element
2021-04-09T00:47:52.857Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//com.aimp.skinengine.controls.SkinnedButton)[1]'
}
2021-04-09T00:47:52.870Z INFO webdriver: RESULT {
  error: 'no such element',
  message: 'An element could not be located on the page using the given search parameters.',
  stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
    '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Administrator\\AppData\\Local\\Programs\\Appium\\resources\\app\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
    '    at runMicrotasks (<anonymous>)\n' +
    '    at processTicksAndRejections (internal/process/task_queues.js:85:5)'
}
2021-04-09T00:47:52.890Z INFO webdriver: RESULT []
2021-04-09T00:47:52.902Z INFO webdriver: RESULT {
  error: 'no such element',
  message: 'An element could not be located on the page using the given search parameters.',
  stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
    '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Administrator\\AppData\\Local\\Programs\\Appium\\resources\\app\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
    '    at runMicrotasks (<anonymous>)\n' +
    '    at processTicksAndRejections (internal/process/task_queues.js:85:5)'
}
2021-04-09T00:47:52.950Z INFO webdriver: COMMAND findElement("xpath", "(*//android.view.ViewGroup/android.view.View)[5]")
2021-04-09T00:47:52.957Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/element
2021-04-09T00:47:52.964Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//android.view.ViewGroup/android.view.View)[5]'
}
2021-04-09T00:47:52.968Z INFO webdriver: COMMAND findElements("xpath", "(*//android.view.ViewGroup/android.view.View)[5]")
2021-04-09T00:47:52.971Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/elements
2021-04-09T00:47:52.973Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//android.view.ViewGroup/android.view.View)[5]'
}
2021-04-09T00:47:52.997Z INFO webdriver: COMMAND findElement("xpath", "(*//com.aimp.skinengine.controls.SkinnedButton)[4]")
2021-04-09T00:47:53.000Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/element
2021-04-09T00:47:53.003Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//com.aimp.skinengine.controls.SkinnedButton)[4]'
}
2021-04-09T00:47:53.016Z INFO webdriver: RESULT {
  error: 'no such element',
  message: 'An element could not be located on the page using the given search parameters.',
  stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
    '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Administrator\\AppData\\Local\\Programs\\Appium\\resources\\app\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
    '    at runMicrotasks (<anonymous>)\n' +
    '    at processTicksAndRejections (internal/process/task_queues.js:85:5)'
}
2021-04-09T00:47:53.083Z INFO webdriver: RESULT []
2021-04-09T00:47:53.093Z INFO webdriver: RESULT {
  error: 'no such element',
  message: 'An element could not be located on the page using the given search parameters.',
  stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
    '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Administrator\\AppData\\Local\\Programs\\Appium\\resources\\app\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
    '    at runMicrotasks (<anonymous>)\n' +
    '    at processTicksAndRejections (internal/process/task_queues.js:85:5)'
}
2021-04-09T00:47:53.167Z INFO webdriver: COMMAND findElement("xpath", "(*//android.view.ViewGroup/android.view.View)[6]")
2021-04-09T00:47:53.170Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/element
2021-04-09T00:47:53.171Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//android.view.ViewGroup/android.view.View)[6]'
}
2021-04-09T00:47:53.182Z INFO webdriver: COMMAND findElement("xpath", "(*//com.aimp.skinengine.controls.SkinnedButton)[1]")
2021-04-09T00:47:53.186Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/element
2021-04-09T00:47:53.188Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//com.aimp.skinengine.controls.SkinnedButton)[1]'
}
2021-04-09T00:47:53.196Z INFO webdriver: COMMAND findElements("xpath", "(*//com.aimp.skinengine.controls.SkinnedButton)[1]")
2021-04-09T00:47:53.197Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/elements
2021-04-09T00:47:53.198Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//com.aimp.skinengine.controls.SkinnedButton)[1]'
}
2021-04-09T00:47:53.205Z INFO webdriver: RESULT {
  error: 'no such element',
  message: 'An element could not be located on the page using the given search parameters.',
  stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
    '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Administrator\\AppData\\Local\\Programs\\Appium\\resources\\app\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
    '    at runMicrotasks (<anonymous>)\n' +
    '    at processTicksAndRejections (internal/process/task_queues.js:85:5)'
}
2021-04-09T00:47:53.262Z INFO webdriver: RESULT []
2021-04-09T00:47:53.302Z INFO webdriver: RESULT {
  error: 'no such element',
  message: 'An element could not be located on the page using the given search parameters.',
  stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
    '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Administrator\\AppData\\Local\\Programs\\Appium\\resources\\app\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
    '    at runMicrotasks (<anonymous>)\n' +
    '    at processTicksAndRejections (internal/process/task_queues.js:85:5)'
}
2021-04-09T00:47:53.329Z INFO webdriver: RESULT {
  error: 'no such element',
  message: 'An element could not be located on the page using the given search parameters.',
  stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
    '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Administrator\\AppData\\Local\\Programs\\Appium\\resources\\app\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
    '    at runMicrotasks (<anonymous>)\n' +
    '    at processTicksAndRejections (internal/process/task_queues.js:85:5)'
}
2021-04-09T00:47:53.385Z INFO webdriver: COMMAND findElement("xpath", "(*//com.aimp.skinengine.controls.SkinnedButton)[4]")
2021-04-09T00:47:53.387Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/element
2021-04-09T00:47:53.389Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//com.aimp.skinengine.controls.SkinnedButton)[4]'
}
2021-04-09T00:47:53.403Z INFO webdriver: COMMAND findElement("xpath", "(*//android.view.ViewGroup/android.view.View)[6]")
2021-04-09T00:47:53.418Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/element
2021-04-09T00:47:53.419Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//android.view.ViewGroup/android.view.View)[6]'
}
2021-04-09T00:47:53.422Z INFO webdriver: COMMAND findElements("xpath", "(*//android.view.ViewGroup/android.view.View)[6]")
2021-04-09T00:47:53.428Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/elements
2021-04-09T00:47:53.428Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//android.view.ViewGroup/android.view.View)[6]'
}
2021-04-09T00:47:53.437Z INFO webdriver: COMMAND findElement("xpath", "(*//com.aimp.skinengine.controls.SkinnedButton)[4]")
2021-04-09T00:47:53.438Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/element
2021-04-09T00:47:53.439Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//com.aimp.skinengine.controls.SkinnedButton)[4]'
}
2021-04-09T00:47:53.456Z INFO webdriver: RESULT {
  error: 'no such element',
  message: 'An element could not be located on the page using the given search parameters.',
  stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
    '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Administrator\\AppData\\Local\\Programs\\Appium\\resources\\app\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
    '    at runMicrotasks (<anonymous>)\n' +
    '    at processTicksAndRejections (internal/process/task_queues.js:85:5)'
}
2021-04-09T00:47:53.482Z INFO webdriver: RESULT []
2021-04-09T00:47:53.511Z INFO webdriver: RESULT {
  error: 'no such element',
  message: 'An element could not be located on the page using the given search parameters.',
  stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
    '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Administrator\\AppData\\Local\\Programs\\Appium\\resources\\app\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
    '    at runMicrotasks (<anonymous>)\n' +
    '    at processTicksAndRejections (internal/process/task_queues.js:85:5)'
}
2021-04-09T00:47:53.537Z INFO webdriver: COMMAND getCurrentActivity()
2021-04-09T00:47:53.554Z INFO webdriver: [GET] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/appium/device/current_activity
2021-04-09T00:47:53.556Z INFO webdriver: COMMAND findElement("xpath", "(*//com.aimp.skinengine.controls.SkinnedButton)[4]")
2021-04-09T00:47:53.572Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/element
2021-04-09T00:47:53.583Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//com.aimp.skinengine.controls.SkinnedButton)[4]'
}
2021-04-09T00:47:53.618Z INFO webdriver: RESULT {
  error: 'no such element',
  message: 'An element could not be located on the page using the given search parameters.',
  stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
    '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Administrator\\AppData\\Local\\Programs\\Appium\\resources\\app\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
    '    at runMicrotasks (<anonymous>)\n' +
    '    at processTicksAndRejections (internal/process/task_queues.js:85:5)'
}
2021-04-09T00:47:53.650Z INFO webdriver: RESULT []
2021-04-09T00:47:53.678Z INFO webdriver: COMMAND findElement("xpath", "(*//com.aimp.skinengine.controls.SkinnedButton)[1]")
2021-04-09T00:47:53.680Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/element
2021-04-09T00:47:53.681Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//com.aimp.skinengine.controls.SkinnedButton)[1]'
}
2021-04-09T00:47:53.685Z INFO webdriver: COMMAND findElements("xpath", "(*//com.aimp.skinengine.controls.SkinnedButton)[1]")
2021-04-09T00:47:53.686Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/elements
2021-04-09T00:47:53.688Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//com.aimp.skinengine.controls.SkinnedButton)[1]'
}
2021-04-09T00:47:53.727Z INFO webdriver: RESULT {
  error: 'no such element',
  message: 'An element could not be located on the page using the given search parameters.',
  stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
    '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Administrator\\AppData\\Local\\Programs\\Appium\\resources\\app\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
    '    at runMicrotasks (<anonymous>)\n' +
    '    at processTicksAndRejections (internal/process/task_queues.js:85:5)'
}
2021-04-09T00:47:53.792Z INFO webdriver: RESULT {
  error: 'no such element',
  message: 'An element could not be located on the page using the given search parameters.',
  stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
    '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Administrator\\AppData\\Local\\Programs\\Appium\\resources\\app\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
    '    at runMicrotasks (<anonymous>)\n' +
    '    at processTicksAndRejections (internal/process/task_queues.js:85:5)'
}
2021-04-09T00:47:53.903Z INFO webdriver: COMMAND findElement("xpath", "(*//android.view.ViewGroup/android.view.View)[6]")
2021-04-09T00:47:53.949Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/element
2021-04-09T00:47:53.949Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//android.view.ViewGroup/android.view.View)[6]'
}
2021-04-09T00:47:53.956Z INFO webdriver: COMMAND findElements("xpath", "(*//android.view.ViewGroup/android.view.View)[6]")
2021-04-09T00:47:53.960Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/elements
2021-04-09T00:47:53.962Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//android.view.ViewGroup/android.view.View)[6]'
}
2021-04-09T00:47:53.966Z INFO webdriver: RESULT .Launcher
Queue ---> .Launcher
2021-04-09T00:47:53.969Z INFO webdriver: COMMAND getCurrentActivity()
2021-04-09T00:47:53.981Z INFO webdriver: [GET] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/appium/device/current_activity
2021-04-09T00:47:53.987Z INFO webdriver: RESULT {
  error: 'no such element',
  message: 'An element could not be located on the page using the given search parameters.',
  stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
    '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Administrator\\AppData\\Local\\Programs\\Appium\\resources\\app\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
    '    at runMicrotasks (<anonymous>)\n' +
    '    at processTicksAndRejections (internal/process/task_queues.js:85:5)'
}
2021-04-09T00:47:54.053Z INFO webdriver: RESULT []
2021-04-09T00:47:54.057Z INFO webdriver: COMMAND findElement("xpath", "(*//com.aimp.skinengine.controls.SkinnedButton)[4]")
2021-04-09T00:47:54.062Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/element
2021-04-09T00:47:54.064Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//com.aimp.skinengine.controls.SkinnedButton)[4]'
}
2021-04-09T00:47:54.108Z INFO webdriver: RESULT {
  error: 'no such element',
  message: 'An element could not be located on the page using the given search parameters.',
  stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
    '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Administrator\\AppData\\Local\\Programs\\Appium\\resources\\app\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
    '    at runMicrotasks (<anonymous>)\n' +
    '    at processTicksAndRejections (internal/process/task_queues.js:85:5)'
}
2021-04-09T00:47:54.170Z INFO webdriver: RESULT []
2021-04-09T00:47:54.179Z INFO webdriver: COMMAND findElement("xpath", "(*//com.aimp.skinengine.controls.SkinnedButton)[1]")
2021-04-09T00:47:54.182Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/element
2021-04-09T00:47:54.183Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//com.aimp.skinengine.controls.SkinnedButton)[1]'
}
2021-04-09T00:47:54.186Z INFO webdriver: COMMAND findElements("xpath", "(*//com.aimp.skinengine.controls.SkinnedButton)[1]")
2021-04-09T00:47:54.187Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/elements
2021-04-09T00:47:54.188Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//com.aimp.skinengine.controls.SkinnedButton)[1]'
}
2021-04-09T00:47:54.265Z INFO webdriver: RESULT .Launcher
    4) test navigating to Queue activity
2021-04-09T00:47:54.269Z INFO webdriver: COMMAND deleteSession()
2021-04-09T00:47:54.273Z INFO webdriver: [DELETE] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44
2021-04-09T00:47:54.332Z INFO webdriver: RESULT {
  error: 'no such element',
  message: 'An element could not be located on the page using the given search parameters.',
  stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
    '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Administrator\\AppData\\Local\\Programs\\Appium\\resources\\app\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
    '    at runMicrotasks (<anonymous>)\n' +
    '    at processTicksAndRejections (internal/process/task_queues.js:85:5)'
}
2021-04-09T00:47:54.387Z WARN webdriver: Request failed with status 500 due to An unknown server-side error occurred while processing the command. Original error: Cannot read property 'jwproxy' of null
2021-04-09T00:47:54.389Z INFO webdriver: Retrying 1/3
2021-04-09T00:47:54.395Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/element
2021-04-09T00:47:54.396Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//com.aimp.skinengine.controls.SkinnedButton)[1]'
}
2021-04-09T00:47:54.404Z WARN webdriver: Request failed with status 500 due to An unknown server-side error occurred while processing the command. Original error: Cannot read property 'jwproxy' of null
2021-04-09T00:47:54.407Z INFO webdriver: Retrying 1/3
2021-04-09T00:47:54.410Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/elements
2021-04-09T00:47:54.412Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//com.aimp.skinengine.controls.SkinnedButton)[1]'
}
2021-04-09T00:47:54.416Z INFO webdriver: COMMAND findElement("xpath", "(*//android.view.ViewGroup/android.view.View)[6]")
2021-04-09T00:47:54.418Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/element
2021-04-09T00:47:54.420Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//android.view.ViewGroup/android.view.View)[6]'
}
2021-04-09T00:47:54.441Z INFO webdriver: COMMAND findElements("xpath", "(*//android.view.ViewGroup/android.view.View)[6]")
2021-04-09T00:47:54.445Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/elements
2021-04-09T00:47:54.447Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//android.view.ViewGroup/android.view.View)[6]'
}
2021-04-09T00:47:54.459Z WARN webdriver: Request failed with status 404 due to A session is either terminated or not started
2021-04-09T00:47:54.462Z INFO webdriver: Retrying 2/3
2021-04-09T00:47:54.463Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/element
2021-04-09T00:47:54.464Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//com.aimp.skinengine.controls.SkinnedButton)[1]'
}
2021-04-09T00:47:54.472Z WARN webdriver: Request failed with status 404 due to A session is either terminated or not started
2021-04-09T00:47:54.498Z INFO webdriver: Retrying 2/3
2021-04-09T00:47:54.499Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/elements
2021-04-09T00:47:54.500Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//com.aimp.skinengine.controls.SkinnedButton)[1]'
}
2021-04-09T00:47:54.505Z WARN webdriver: Request failed with status 404 due to A session is either terminated or not started
2021-04-09T00:47:54.532Z INFO webdriver: Retrying 1/3
2021-04-09T00:47:54.533Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/element
2021-04-09T00:47:54.535Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//android.view.ViewGroup/android.view.View)[6]'
}
2021-04-09T00:47:54.547Z WARN webdriver: Request failed with status 404 due to A session is either terminated or not started
2021-04-09T00:47:54.554Z INFO webdriver: Retrying 1/3
2021-04-09T00:47:54.555Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/elements
2021-04-09T00:47:54.556Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//android.view.ViewGroup/android.view.View)[6]'
}
2021-04-09T00:47:54.561Z INFO webdriver: COMMAND findElement("xpath", "(*//com.aimp.skinengine.controls.SkinnedButton)[4]")
2021-04-09T00:47:54.563Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/element
2021-04-09T00:47:54.564Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//com.aimp.skinengine.controls.SkinnedButton)[4]'
}
2021-04-09T00:47:54.569Z WARN webdriver: Request failed with status 404 due to A session is either terminated or not started
2021-04-09T00:47:54.571Z INFO webdriver: Retrying 3/3
2021-04-09T00:47:54.572Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/element
2021-04-09T00:47:54.573Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//com.aimp.skinengine.controls.SkinnedButton)[1]'
}
2021-04-09T00:47:54.638Z WARN webdriver: Request failed with status 404 due to A session is either terminated or not started
2021-04-09T00:47:54.699Z INFO webdriver: Retrying 3/3
2021-04-09T00:47:54.732Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/elements
2021-04-09T00:47:54.735Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//com.aimp.skinengine.controls.SkinnedButton)[1]'
}
2021-04-09T00:47:54.749Z WARN webdriver: Request failed with status 404 due to A session is either terminated or not started
2021-04-09T00:47:54.760Z INFO webdriver: Retrying 2/3
2021-04-09T00:47:54.779Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/element
2021-04-09T00:47:54.781Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//android.view.ViewGroup/android.view.View)[6]'
}
2021-04-09T00:47:54.820Z WARN webdriver: Request failed with status 404 due to A session is either terminated or not started
2021-04-09T00:47:54.873Z INFO webdriver: Retrying 2/3
2021-04-09T00:47:54.906Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/elements
2021-04-09T00:47:54.937Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//android.view.ViewGroup/android.view.View)[6]'
}
2021-04-09T00:47:54.949Z WARN webdriver: Request failed with status 404 due to A session is either terminated or not started
2021-04-09T00:47:55.007Z INFO webdriver: Retrying 1/3
2021-04-09T00:47:55.068Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/element
2021-04-09T00:47:55.133Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//com.aimp.skinengine.controls.SkinnedButton)[4]'
}
2021-04-09T00:47:55.769Z ERROR webdriver: Request failed with status 404 due to invalid session id: A session is either terminated or not started
2021-04-09T00:47:55.861Z ERROR webdriver: Request failed with status 404 due to invalid session id: A session is either terminated or not started
2021-04-09T00:47:55.933Z INFO webdriver: COMMAND findElement("xpath", "(*//com.aimp.skinengine.controls.SkinnedButton)[1]")
2021-04-09T00:47:55.983Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/element
2021-04-09T00:47:55.985Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//com.aimp.skinengine.controls.SkinnedButton)[1]'
}
2021-04-09T00:47:55.989Z INFO webdriver: COMMAND findElements("xpath", "(*//com.aimp.skinengine.controls.SkinnedButton)[1]")
2021-04-09T00:47:56.027Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/elements
2021-04-09T00:47:56.029Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//com.aimp.skinengine.controls.SkinnedButton)[1]'
}
2021-04-09T00:47:56.175Z WARN webdriver: Request failed with status 404 due to A session is either terminated or not started
2021-04-09T00:47:56.179Z INFO webdriver: Retrying 3/3
2021-04-09T00:47:56.180Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/element
2021-04-09T00:47:56.181Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//android.view.ViewGroup/android.view.View)[6]'
}
2021-04-09T00:47:56.188Z WARN webdriver: Request failed with status 404 due to A session is either terminated or not started
2021-04-09T00:47:56.195Z INFO webdriver: Retrying 3/3
2021-04-09T00:47:56.196Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/elements
2021-04-09T00:47:56.197Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//android.view.ViewGroup/android.view.View)[6]'
}
2021-04-09T00:47:56.202Z WARN webdriver: Request failed with status 404 due to A session is either terminated or not started
2021-04-09T00:47:56.203Z INFO webdriver: Retrying 2/3
2021-04-09T00:47:56.208Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/element
2021-04-09T00:47:56.217Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//com.aimp.skinengine.controls.SkinnedButton)[4]'
}
2021-04-09T00:47:56.236Z WARN webdriver: Request failed with status 404 due to A session is either terminated or not started
2021-04-09T00:47:56.302Z INFO webdriver: Retrying 1/3
2021-04-09T00:47:56.303Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/element
2021-04-09T00:47:56.305Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//com.aimp.skinengine.controls.SkinnedButton)[1]'
}
2021-04-09T00:47:56.360Z WARN webdriver: Request failed with status 404 due to A session is either terminated or not started
2021-04-09T00:47:56.363Z INFO webdriver: Retrying 1/3
2021-04-09T00:47:56.365Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/elements
2021-04-09T00:47:56.370Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//com.aimp.skinengine.controls.SkinnedButton)[1]'
}

2021-04-09T00:47:56.395Z ERROR webdriver: Request failed with status 404 due to invalid session id: A session is either terminated or not started
2021-04-09T00:47:56.402Z ERROR webdriver: Request failed with status 404 due to invalid session id: A session is either terminated or not started
2021-04-09T00:47:56.404Z WARN webdriver: Request failed with status 404 due to A session is either terminated or not started
2021-04-09T00:47:56.405Z INFO webdriver: Retrying 3/3
2021-04-09T00:47:56.406Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/element
2021-04-09T00:47:56.411Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//com.aimp.skinengine.controls.SkinnedButton)[4]'
}

  1 passing (52s)
  4 failing

  1) Home Screen Suite
       test navigating to Sleep Timer activty:

      AssertionError: expected '.Launcher' to equal '.views.MainActivity.MainActivity'
      + expected - actual

      -.Launcher
      +.views.MainActivity.MainActivity

      at Object.validateCurrentActivity (helpers\homeScreen.js:37:20)
      at processTicksAndRejections (internal/process/task_queues.js:93:5)
      at async Context.<anonymous> (test\basic\homeScreen.test.js:36:5)

  2) Home Screen Suite
       test navigating to Bookmarks activity:

      AssertionError: expected '.Launcher' to equal '.views.MainActivity.MainActivity'
      + expected - actual

      -.Launcher
      +.views.MainActivity.MainActivity

      at Object.validateCurrentActivity (helpers\homeScreen.js:37:20)
      at processTicksAndRejections (internal/process/task_queues.js:93:5)
      at async Context.<anonymous> (test\basic\homeScreen.test.js:48:5)

  3) Home Screen Suite
       test navigating to Favorites activity:

      AssertionError: expected '.Launcher' to equal '.views.MainActivity.MainActivity'
      + expected - actual

      -.Launcher
      +.views.MainActivity.MainActivity

      at Object.validateCurrentActivity (helpers\homeScreen.js:37:20)
      at processTicksAndRejections (internal/process/task_queues.js:93:5)
      at async Context.<anonymous> (test\basic\homeScreen.test.js:60:5)

  4) Home Screen Suite
       test navigating to Queue activity:

      AssertionError: expected '.Launcher' to equal '.views.MainActivity.MainActivity'
      + expected - actual

      -.Launcher
      +.views.MainActivity.MainActivity

      at Object.validateCurrentActivity (helpers\homeScreen.js:37:20)
      at processTicksAndRejections (internal/process/task_queues.js:93:5)
      at async Context.<anonymous> (test\basic\homeScreen.test.js:72:5)



2021-04-09T00:47:56.469Z WARN webdriver: Request failed with status 404 due to A session is either terminated or not started
2021-04-09T00:47:56.469Z INFO webdriver: Retrying 2/3
2021-04-09T00:47:56.470Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/element
2021-04-09T00:47:56.471Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//com.aimp.skinengine.controls.SkinnedButton)[1]'
}
2021-04-09T00:47:56.479Z WARN webdriver: Request failed with status 404 due to A session is either terminated or not started
2021-04-09T00:47:56.486Z INFO webdriver: Retrying 2/3
2021-04-09T00:47:56.496Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/elements
2021-04-09T00:47:56.499Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//com.aimp.skinengine.controls.SkinnedButton)[1]'
}
2021-04-09T00:47:56.527Z ERROR webdriver: Request failed with status 404 due to invalid session id: A session is either terminated or not started
2021-04-09T00:47:56.537Z WARN webdriver: Request failed with status 404 due to A session is either terminated or not started
2021-04-09T00:47:56.539Z INFO webdriver: Retrying 3/3
2021-04-09T00:47:56.539Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/element
2021-04-09T00:47:56.546Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//com.aimp.skinengine.controls.SkinnedButton)[1]'
}
2021-04-09T00:47:56.551Z INFO webdriver: COMMAND findElement("xpath", "(*//com.aimp.skinengine.controls.SkinnedButton)[4]")
2021-04-09T00:47:56.566Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/element
2021-04-09T00:47:56.567Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//com.aimp.skinengine.controls.SkinnedButton)[4]'
}
2021-04-09T00:47:56.571Z WARN webdriver: Request failed with status 404 due to A session is either terminated or not started
2021-04-09T00:47:56.572Z INFO webdriver: Retrying 3/3
2021-04-09T00:47:56.581Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/elements
2021-04-09T00:47:56.583Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//com.aimp.skinengine.controls.SkinnedButton)[1]'
}
2021-04-09T00:47:56.603Z ERROR webdriver: Request failed with status 404 due to invalid session id: A session is either terminated or not started
2021-04-09T00:47:56.616Z WARN webdriver: Request failed with status 404 due to A session is either terminated or not started
2021-04-09T00:47:56.617Z INFO webdriver: Retrying 1/3
2021-04-09T00:47:56.618Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/element
2021-04-09T00:47:56.620Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//com.aimp.skinengine.controls.SkinnedButton)[4]'
}
2021-04-09T00:47:56.638Z ERROR webdriver: Request failed with status 404 due to invalid session id: A session is either terminated or not started
2021-04-09T00:47:56.646Z WARN webdriver: Request failed with status 404 due to A session is either terminated or not started
2021-04-09T00:47:56.649Z INFO webdriver: Retrying 2/3
2021-04-09T00:47:56.651Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/element
2021-04-09T00:47:56.652Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//com.aimp.skinengine.controls.SkinnedButton)[4]'
}
2021-04-09T00:47:56.670Z WARN webdriver: Request failed with status 404 due to A session is either terminated or not started
2021-04-09T00:47:56.671Z INFO webdriver: Retrying 3/3
2021-04-09T00:47:56.672Z INFO webdriver: [POST] http://127.0.0.1:4723/wd/hub/session/ea8d884d-fb0f-419e-82c6-1f25d6e6df44/element
2021-04-09T00:47:56.673Z INFO webdriver: DATA {
  using: 'xpath',
  value: '(*//com.aimp.skinengine.controls.SkinnedButton)[4]'
}
2021-04-09T00:47:56.685Z ERROR webdriver: Request failed with status 404 due to invalid session id: A session is either terminated or not started
npm ERR! code ELIFECYCLE
npm ERR! errno 4
npm ERR! @1.0.0 test: `mocha test/basic`
npm ERR! Exit status 4
npm ERR!
npm ERR! Failed at the @1.0.0 test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\Administrator\AppData\Roaming\npm-cache\_logs\2021-04-09T00_47_56_882Z-debug.log

```
![image](https://user-images.githubusercontent.com/16255228/114112311-6a628280-98dc-11eb-95f3-4cadcc359c07.png)