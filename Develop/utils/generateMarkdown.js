// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== `None`) {
    return `https://img.shields.io/badge/license-${license}-green)`;
  } else {
    return ``;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === `Apache2.0`) {
    return `https://opensource.org/licenses/Apache-2.0`;
  } else if (license === `MIT`) {
    return `https://opensource.org/licenses/MIT`;
  } else if (license === `AGPLv3`) {
    return `https://www.gnu.org/licenses/agpl-3.0`;
  } else return ``;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `[![Project license](${renderLicenseBadge(
      license
    )})](${renderLicenseLink(String(license))})`;
  } else {
    return ``;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
## License
${renderLicenseSection(data.License)}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Testing](#testing)
- [Contact Information](#contact-information)

## Description
${data.Description}

## Installation
${data.Installation}

## Usage
${data.Usage}

## License
${data.License}

## Contribution
${data.Contributing}

## Testing
${data.Test}

## Contact Information
- GitHub: [${data.Github}](https://github.com/${data.Github})
- Email: [${data.Email}](mailto:${data.Email})
`;
}

module.exports = generateMarkdown;
