# URL Validator

This is a simple URL validator that checks the status of a website and provides some security insights. It was created to have an easy way to validate links and gain some high-level security information.

## What it does

The validator does the following:

- Checks if the URL resolves and the site is active
- Retrieves all the endpoints found on the site 
- Validates if the site uses SSL 
- Calculates a security score from 1-10 based on various checks

It provides the results in an easy to read format using Tailwind CSS for styling.

## How to use

The main functionality is provided by the `validateUrl` async function:

```js
const result = await validateUrl("https://example.com"); 
```

This returns a promise that resolves to an object containing:

- url - The original url
- status - Either "active" or "inactive"
- endpoints - List of all endpoints found
- sslValid - Boolean indicating if SSL is used
- securityRank - Score from 1-10 (10 being most secure)

The results can then be printed or used as needed.

There is also example usage provided that prints the results in a styled card using Tailwind CSS.

## Why it was built

This was built to have a simple way to:

- Quickly validate if a site/link is still active
- Get an idea of the structure of the site via the endpoints
- Identify if the site is using SSL
- Have an automated way to generate a security score for sites

It provides these useful insights quickly without needing to manually check each site.

The scored security ranking also allows sites to be compared to each other from a high-level perspective.

## Contributions

Contributions are welcome! Some ideas:

- Additional security checks for better score calculation
- More detailed endpoint analysis
- Testing validity of SSL cert
- Browser automation for JavaScript interaction

Please open issues for discussion and submit PRs for any enhancements.
