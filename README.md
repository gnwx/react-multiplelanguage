# react-multiplelanguage

<br>

[`react-multiplelanguage`](https://www.npmjs.com/package/react-multiplelanguage) allows you to easily implement localization in React.

![Recording 2023-06-04 at 01 57 26](https://github.com/gnwx/react-multiplelanguage/assets/77449139/d863dcac-697e-491c-9c5e-521c44dcace1)

Localize your application right away [getting started](./GETTING_STARTED.md)

<br>

## Install

```zsh
npm install react-multiplelanguage

// or

yarn add react-multiplelanguage
```

<br>

# APIs and Components

## LanguageContext

Makes your texts accessible throughout the application. You must wrap your entire app with this element and give a `texts` object.

```javascript
<LanguageContext texts={myTexts}>
    <App />
</LanguageContext>
```

```javascript
const myTexts= {
  US: {
      home: "Home",
      about: "About",

    },
  TR: {
      home: "Ana Sayfa",
      about: "Hakkımızda",
    }

```

<br>

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">Name</th>
        <th style="width: 50px;">Type</th>
        <th style="width: 50px;">Required</th>
        <th style="width: 50px;">Default</th>
        <th style="width: 200px;">Description</th>
    </tr>
    </thead>
    <tbody>
        <tr>
          <td>values</td>
          <td>Object || JSON</td>
          <td>true</td>
          <td>null</td>
           <td>It takes a object that contains different languages texts.</td>
        </tr>
        <tr>
          <td>primary</td>
          <td>Number</td>
          <td>false</td>
          <td>0</td>
          <td> Indicating the index of the text element to be selected as the primary language.</td>
        </tr>
        <tr>
          <td>useSessionStorage</td>
          <td>Boolean</td>
          <td>false</td>
          <td>true</td>
          <td>Uses session storage to store current language.</td>
        </tr>
    
</table>

<br><br>

## Flags

The `Flags` component is a customizable language selector component that allows users to switch between avaiable languages.

![Screenshot from 2023-06-04 01-49-31](https://github.com/gnwx/react-multiplelanguage/assets/77449139/d38ba67a-ec38-4a6a-8fe3-2fcd664e2688)
![Screenshot from 2023-06-04 01-49-41](https://github.com/gnwx/react-multiplelanguage/assets/77449139/6a99cbe4-70b3-4f08-b46c-1e484893ab44)


```javascript
<Flags />
```

<br>

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">Name</th>
        <th style="width: 50px;">Type</th>
        <th style="width: 50px;">Required</th>
        <th style="width: 50px;">Default</th>
        <th style="width: 200px;">Description</th>
    </tr>
    </thead>
    <tbody>
        <tr>
          <td>size</td>
          <td>String</td>
          <td>false</td>
          <td>md</td>
          <td>This property affects the visual appearance and dimensions of the component. "sm","md","lg"</td>
        </tr>
        <tr>
          <td>color</td>
          <td>String</td>
          <td>false</td>
          <td>#555555</td>
          <td>Sets the text color of the component.</td>
        </tr>
        <tr>
          <td>backgroundColor</td>
          <td>String</td>
          <td>false</td>
          <td>#ebebeb</td>
          <td>Sets the background color of the component.</td>
        </tr>
</table>

<br><br>

## useLanguage

You can access the LanguageContext values by using this hook. It provides:

<br>

`texts`: It represents the texts object that contains the localized strings for different languages.

```javascript
const { texts } = useLanguage();
console.log(texts); // if current language is EN then it will return the EN texts object. { home: { title: "Welcome to My Website", description: ...},
```

<br>

`language`: It is a variable that holds the currently selected language. It represents the language code (e.g., 'EN' for English, 'FR' for French) that is being used for localization. This value
determines which localized strings from the texts object will be displayed.

```javascript
const { language } = useLanguage();
console.log(language); // if current language EN then it returns "EN"
```

<br>

`changeLanguage`: It is a function that allows you to change the current language. When called with a language code as an argument, it updates the language value to the specified language, triggering
a re-render of the component with the new language.

```javascript
const { changeLanguage } = useLanguage();
changeLanguage('TR'); // sets the language TR
```

<br>

`flags`: It is a variable that holds an array of flag objects. This flags element is determined based on the language codes provided in your `texts` within the `LanguageContext`. It returns an array
consisting of objects.

```javascript
[
    { code: 'US', emoji: '🇺🇸' },
    { code: 'TR', emoji: '🇹🇷' }
];
```

<br>

`getFlags`: It also provides flags, but the order is always such that the current language is the first item.

```javascript
const avaiableFlags = getFlags();
console.log(avaiableFlags); // [ {code: 'TR', emoji: '🇹🇷'}, {code: 'US', emoji: '🇺🇸'} ]
```

<br><br>

## Countries

This file contains country flag emojis and codes. If your language code and emoji are not included in this file, please feel free to create an issue to request their addition.

```javascript

 const codeAndEmojiArray = [
    {
        code: 'AD',
        emoji: '🇦🇩'
    },
    {
        code: 'AE',
        emoji: '🇦🇪'
    },
    {
        code: 'AF',
        emoji: '🇦🇫'
    },
...]
```
