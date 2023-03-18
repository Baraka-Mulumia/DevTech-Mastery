# The-Ultimate-React-Native-Series

What You'll Learn
This course is divided into two parts: basics and advanced topics.

### In the first part, you'll learn how to:

- Use the essential tools for React Native development
- Properly structure your React Native projects
- Run and debug your React Native apps
- Understand and troubleshoot common errors
- Work with the core components and APIs
- Build layouts with Flexbox
- Build reusable components
- Apply beautiful styles to your components
- Get input from the user
- Build forms with Formik
- Implement data validation with Yup
- Publish your apps to Expo
- Apply React Native best practices
- Write clean code like a pro
- Use shortcuts to write code fast

### The second part covers advanced topics. You'll learn how to:

- Access native device features
- Implement navigation using React Navigation
- Add beautiful tabs
- Communicate with REST APIs
- Upload images and show progress bars
- Build offline capable apps
- Cache data and images
- Implement authentication and authorization
- Send and receive push notifications
- Log and monitor errors
- Manage configuration settings across different environments
- Build and distribute your apps

### How do i get set up?

```bash
gh repo clone iambaraka/The-Ultimate-React-Native-Series

yarn install

yarn start

# in another window
cd Backend

npm install

npm start
```

### Key takeaways

1. Hide non-ui implementations from components, let components be solemnly used for displaying data and reacting according to how a user interacts with data
2. Create an api layer to abstract data fetching capabilities
3. For caching, create a cache-layer to:

   - serialize/deserialize (stringify/parse) data
   - apply a timestamp
   - remove expired items

4. Read on push notifications - with expo and without expo
   - **with expo**
     - get push notification token
     - store in the server
     - send notification using suitable SDK
     - Set notification listener to when a user taps on the notification (Encapsulate in a useNotification hook)
     - if cant access to navigate in the root of the app then use the createRef hack
   - Look into local notifications

Apple Icon Design Guideline:

https://developer.apple.com/design/human-interface-guidelines/ios/icons-and-images/app-icon/

Android Icon Design Guideline:

https://developer.android.com/guide/practices/ui_guidelines/icon_design_adaptive

### Distribution

- optimize assets with sharp cli and expo-optimize
- optimize javascript bundle by using packages with lightweight size
- If a library has sub packages, import from that i.e `import uniqueID from 'lodash/uniqueID'`

- Error reporting using bug snack or sentry

Expo's documentation is your first step to distributing your apps. Always check the documentation for the updated instructions:

https://docs.expo.io/distribution/introduction/

If you want to automate your app deployment, consider FastLane:

https://fastlane.tools/

This blog posts shows how you can use Fastlane to deploy Expo apps:

https://blog.expo.io/automating-standalone-expo-app-builds-and-deployments-with-fastlane-exp-and-exptool-9b2f5ad0a2cd
