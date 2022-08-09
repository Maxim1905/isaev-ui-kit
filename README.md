MUI Core contains foundational React UI component libraries for shipping new features faster.

Material UI is a comprehensive library of components that features our implementation of Google's Material Design system.

Joy UI is a beautifully designed library of React UI components.

MUI Base is our library of "unstyled" components and low-level hooks. With Base, you gain complete control over your app's CSS and accessibility features.

MUI System is a collection of CSS utilities to help you rapidly lay out custom designs.

Stable channel v5

license npm latest package npm next package npm downloads CircleCI Coverage Status Follow on Twitter Renovate status Average time to resolve an issue Crowdin Open Collective backers and sponsors

Installation
Material UI
Material UI is available as an npm package.

npm:

npm install @mui/material @emotion/react @emotion/styled
yarn:

yarn add @mui/material @emotion/react @emotion/styled
Older versions
Note: @next only points to pre-releases. Use @latest for the latest stable release.

MUI Base
MUI Base is available as an npm package.

npm:

npm install @mui/base
yarn:

yarn add @mui/base
Note: MUI Base is still in alpha. We are adding new components regularly and you're welcome to contribute!

MUI System
MUI System is available as an npm package.

npm:

npm install @mui/system @emotion/react @emotion/styled
yarn:

yarn add @mui/system @emotion/react @emotion/styled
Or if you want to use styled-components as a styling engine:

npm:

npm install @mui/material @mui/styled-engine-sc styled-components
yarn:

yarn add @mui/material @mui/styled-engine-sc styled-components
Visit our styled-engine guide for more information about how to configure styled-components as the style engine.

Sponsors
Diamond 💎
octopus doit-intl zesty.io

Diamond Sponsors are those who have pledged $1,500/month or more to MUI.

Gold 🏆
via OpenCollective or via Patreon

tidelift.com bit.dev text-em-all.com online-aussie-casino.com sumatosoft.com megafamous.com dialmycalls.com goread.io

Gold Sponsors are those who have pledged $500/month or more to MUI.

More backers
See the full list of our backers.

Getting started with Material UI
Here is an example of a basic app using Material UI's Button component:

import * as React from 'react';
import Button from '@mui/material/Button';

function App() {
  return <Button variant="contained">Hello World</Button>;
}
In the interactive demo below, try changing the code and see how it affects the output. (Hint: change variant to "outlined" and color to "secondary". For more options, see the Button component page in our docs.)

Edit Button

Questions
For how-to questions that don't involve making changes to the code base, please use Stack Overflow instead of GitHub issues. Use the "mui" tag on Stack Overflow to make it easier for the community to find your question.

Examples
Our documentation features a collection of example projects using Material UI.

Documentation
Material UI
Joy UI
MUI Base
MUI System
Premium themes
You can find complete templates and themes in the MUI Store.

Contributing
Read the contributing guide to learn about our development process, how to propose bug fixes and improvements, and how to build and test your changes.

Contributing to MUI Core is about more than just issues and pull requests! There are many other ways to support MUI beyond contributing to the code base.

Changelog
The changelog is regularly updated to reflect what's changed in each new release.

Roadmap
Future plans and high-priority features and enhancements can be found in our roadmap.

License
This project is licensed under the terms of the MIT license.

Security
For details of supported versions and contact details for reporting security issues, please refer to the security policy.

Sponsoring services
These great services sponsor MUI's core infrastructure:
