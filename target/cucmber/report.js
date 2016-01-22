$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Ios_Poc.feature");
formatter.feature({
  "line": 1,
  "name": "Ios_Poc",
  "description": "",
  "id": "ios-poc",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 25,
  "name": "Simulator",
  "description": "",
  "id": "ios-poc;simulator",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@Test3"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "Launch Url and Sign in",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "Select Flight Details and Continue",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Select Flights and Continue",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Fill passenger details and book flight",
  "keyword": "Then "
});
formatter.match({
  "location": "Test3_New.launch_Url_and_Sign_in()"
});
formatter.result({
  "duration": 167044117677,
  "status": "passed"
});
formatter.match({
  "location": "Test3_New.select_Flight_Details_and_Continue()"
});
formatter.result({
  "duration": 5029107707,
  "status": "passed"
});
formatter.match({
  "location": "Test3_New.select_Flights_and_Continue()"
});
formatter.result({
  "duration": 5010820349,
  "status": "passed"
});
formatter.match({
  "location": "Test3_New.fill_passenger_details_and_book_flight()"
});
formatter.result({
  "duration": 21753187,
  "error_message": "org.openqa.selenium.remote.SessionNotFoundException: \nCommand duration or timeout: 7 milliseconds\nBuild info: version: \u00272.45.0\u0027, revision: \u00275017cb8e7ca8e37638dc3091b2440b90a1d8686f\u0027, time: \u00272015-02-27 09:10:26\u0027\nSystem info: host: \u00275CG43934LK\u0027, ip: \u002710.31.128.71\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_45\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, chrome\u003d{}, takesHeapSnapshot\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d33.0.0.0, platform\u003dANDROID, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 53ac6540366e2fd2326606365e798f81\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:162)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:27)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:272)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.quit(RemoteWebDriver.java:468)\r\n\tat Test_Ios_POC.Test3_New.fill_passenger_details_and_book_flight(Test3_New.java:306)\r\n\tat ✽.Then Fill passenger details and book flight(Ios_Poc.feature:29)\r\n",
  "status": "failed"
});
});