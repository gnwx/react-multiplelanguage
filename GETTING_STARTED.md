Let's imagine you have a company called Brand, and you have created your website in English. After a few months, you start gaining a lot of customers from Turkey and Germany. That's when
`react-multipleLanguage` comes to your rescue.

<br>

First, let's download the code of your website.

```
git clone https://github.com/gnwx/react-multiplelanguage-starter.git
```

<br>

To proceed, navigate to the project folder by using the command `cd react-multiplelanguage-starter`. Once you're inside the project folder, you can install the dependencies by running one of these
commands:

```
npm install react-multiplelanguage

//or

yarn add react-multiplelanguage

```

<br>

Here, you can see a file named `translations.js` which contains the necessary texts required by your company. Let's wrap your entire app with `LanguageContext` so that we can utilize this
`translations` within the app.

```javascript
import { LanguageContext } from 'react-multiplelanguage';
import { translations } from './translations.js';

<LanguageContext texts={translations}>
    <App />
</LanguageContext>;
```

<br>

Now let's start localization for your app with Navbar. Go to `components/Navbar.jsx` and import `useLanguage` hook and retrieve texts.

```javascript
import { useLanguage } from 'react-multiplelanguage';
const { texts } = useLanguage();
```

<br>

Now we have the ability to replace the hard-coded English texts with our flexible translations. To make it more convenient, let's extract the `navbar` object from the `texts`.

```
const {navbar} = texts
```

Next, modify the text of the items in the navigation bar. (Removed class names and other specific texts for the sake of this example.)

```javascript
<nav>
    <button>Menu</button>
    <ul>
        <li>
            <a>{navbar.home}</a>
        </li>
        <li>
            <a>{navbar.about}</a>
        </li>
        <li>
            <a>{navbar.products}</a>
        </li>
        <li>
            <a>{navbar.contact}</a>
        </li>
    </ul>
</nav>
```

<br>

Let's localize the hero component as well. We will follow the same steps for other components too. First, import the `useLanguage` hook, and then extract the texts from it.

```javascript
import { useLanguage } from 'react-multiplelanguage';

const { texts } = useLanguage();
const { hero } = texts;

return (
    <div>
        <h1>{hero.title}</h1>
        <p>{hero.description}</p>
        <button>{hero.ctaButton}</button>
    </div>
);
```

<br>

Once again, we will utilize the `useLanguage` function, and our translations feature will be an array, allowing us to iterate over it and utilize our Feature component. We will apply the same approach
for both the features and testimonials.

```javascript
//Features.jsx
import { useLanguage } from 'react-multiplelanguage';

const { texts } = useLanguage();

const { features } = texts;
return features.map((feature) => <Feature feature={feature} />);
```

```javascript
//Testimonials.jsx
import { useLanguage } from 'react-multiplelanguage';

const { texts } = useLanguage();
const { testimonials } = texts;
return testimonials.map((testimonial) => <Testimonial testimonial={testimonial} />);
```

<br>

We need to make changes to our `Feature` and `Testimonial` components now.

```javascript
// Feature
const Feature = ({ feature }) => {
    return (
        <div>
            <p>{feature.title}</p>
            <p>{feature.description}</p>
            <button>{feature.ctaButton} </button>
        </div>
    );
};
```

```javascript
//Testimonial
const Testimonial = ({ testimonial }) => {
    return (
        <div>
            <p>{testimonial.testimonial}</p>
            <cite>{testimonial.author} </cite>
        </div>
    );
};
```

<br>

Now we have made a change to the hardcoded texts by making them dynamic. To switch languages, we will utilize the `Flags` component from the `react-multiplelanguage`. You are welcome to use the
`changeLanguage` function to create your own custom language change component.

Let's add our component to the navbar for easy accessibility.

```javascript
// Navbar.jsx

import { Flags } from 'react-multiplelanguage';

 <nav>
 <Flags />
 ...

```

<br>

Your website is now complete! There is just one more step remaining: please click on the Flags component and select the desired language!
