## 1. Install Firefox
Visit the Mozilla Firefox website: https://www.mozilla.org/en-US/firefox/new/

## 2. git clone

```sh
$ git clone <project>
$ cd gk/web
$ npm install
```

## 3. Run tests
To run the tests using Firefox simply run the command:

```sh
$ npm run test-chrome-end2end
```

## 4. Output
cli
```sh
C:\Users\Administrator\Documents\Emmanuel Project\gk\gk-assessment\web>npm run test-chrome-end2end

> web@0.0.1 test-chrome-end2end C:\Users\Administrator\Documents\Emmanuel Project\gk\gk-assessment\web
> nightwatch -e chrome -a endToEndSuite


[End To End] Test Suite
=======================
| Connecting to localhost on port 9515...

i Connected to localhost on port 9515 (8663ms).
  Using: chrome (89.0.4389.114) on Windows platform.

Running:  test standard user is granted access

√ Element <//*[@id="user-name"]> was visible after 89 milliseconds.

OK. 1 assertions passed. (5.828s)
Running:  as a user I can add item to cart

[10120:4460:0409/025201.834:ERROR:device_event_log_impl.cc(214)] [02:52:01.833] USB: usb_device_handle_win.cc:1056 Failed to read descriptor from node connection: A device attached to the system is not functioning. (0x1F)
√ Element <(//*[text()="Add to cart"])[1]> was visible after 84 milliseconds.

OK. 1 assertions passed. (4.332s)
Running:  as a user I can checkout existing items on cart

√ Element <checkout> was visible after 52 milliseconds.

OK. 1 assertions passed. (1.227s)
Running:  as a user I can able to enter shipping details

√ Element <first-name> was visible after 57 milliseconds.

OK. 1 assertions passed. (1.613s)
Running:  as a user I need to ensure I am checking out correct item

× Testing if element <Element [name=@lblItemPrice]> contains text 'Sauce Labs Backpack' in 10000ms - expected "contains text 'Sauce Labs Backpack'" but got: "does not contain 'Sauce Labs Backpack'" (12592ms)
    at Page.overviewValidation (C:\Users\Administrator\Documents\Emmanuel Project\gk\gk-assessment\web\lib\pages\web\checkoutOverview.js:8:17)
    at Object.as a user I need to ensure I am checking out correct item (C:\Users\Administrator\Documents\Emmanuel Project\gk\gk-assessment\web\test\web\end-to-end.js:54:8)


FAILED: 1 assertions failed (14.104s)
_________________________________________________

TEST FAILURE:  1 assertions failed, 4 passed (45.051s)

 × end-to-end
 – as a user I need to ensure I am checking out correct item (14.104s)
   Testing if element <Element [name=@lblItemPrice]> contains text 'Sauce Labs Backpack' in 10000ms - expected "contains text 'Sauce Labs Backpack'" but got: "does not contain 'Sauce Labs Backpack'" (12592ms)
       at Page.overviewValidation (C:\Users\Administrator\Documents\Emmanuel Project\gk\gk-assessment\web\lib\pages\web\checkoutOverview.js:8:17)
       at Object.as a user I need to ensure I am checking out correct item (C:\Users\Administrator\Documents\Emmanuel Project\gk\gk-assessment\web\test\web\end-to-end.js:54:8)
```