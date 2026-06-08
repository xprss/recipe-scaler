# recipe-scaler

A fast, ad-free, clear and user-friendly tool to scale ingredients of a recipe. Supporting multiple languages from all over the world — planning to support all the existing ones!

**Live Demo:** [https://recipe.ottonovembre.it](https://recipe.ottonovembre.it)

## Features

- 🚀 **Fast & Efficient** - Quickly scale recipe ingredients up or down
- 📱 **User-Friendly** - Clean and intuitive interface
- 🌍 **Multi-Language Support** - Growing list of supported languages worldwide
- 📺 **Ad-Free** - No ads, no distractions
- 🎯 **Precise Scaling** - Accurate ingredient calculations

## Tech Stack

- **Frontend:** Angular (TypeScript)
- **License:** MIT License
- **Language:** TypeScript

## Getting Started

### Prerequisites

- Node.js and npm installed
- Angular CLI installed globally

### Installation

1. Clone the repository:
```bash
git clone https://github.com/xprss/recipe-scaler.git
cd recipe-scaler
```

2. Install dependencies:
```bash
npm install
```

### Development

Navigate to the frontend directory and start the development server:

```bash
cd frontend
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

### Building

To build the project for production:

```bash
cd frontend
ng build
```

This will compile the project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

### Testing

#### Unit Tests

To execute unit tests with [Karma](https://karma-runner.github.io):

```bash
cd frontend
ng test
```

#### End-to-End Tests

For end-to-end (e2e) testing:

```bash
cd frontend
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Code Scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to help improve the recipe-scaler.

### Adding New Languages

We welcome contributions to expand language support! Here's how to add a new language:

#### Steps to Add a New Language:

1. **Check Existing Languages** - First, verify that the language you want to add is not already supported by checking the `src/assets/i18n/` directory.

2. **Create a Translation File** - Create a new JSON translation file in the `src/assets/i18n/` directory following the naming convention: `{language-code}.json` (e.g., `es.json` for Spanish, `fr.json` for French, `de.json` for German).

3. **Translate All Keys** - Copy an existing translation file (such as `en.json`) and translate all key-value pairs to your target language. Ensure:
   - All keys remain identical to the source file
   - All string values are accurately translated
   - Special characters and formatting are preserved
   - Pluralization rules (if applicable) are correctly handled

4. **Register the Language** - Add the new language to the language list in the application configuration:
   - Update `src/app/services/language.service.ts` or the relevant configuration file
   - Add the language code and display name to the language selection dropdown

5. **Test the Translation** - 
   - Run the development server: `ng serve`
   - Test the application with your new language selected
   - Verify all UI text is properly translated
   - Check for any layout issues caused by longer text strings

6. **Submit Your Changes** -
   - Create a feature branch: `git checkout -b add-{language-code}-language`
   - Commit your changes with a clear message: `git commit -m "Add {language-name} language support"`
   - Push to your fork and open a pull request

#### Translation File Format Example:

```json
{
  "app.title": "Recipe Scaler",
  "app.description": "Scale your recipes",
  "ingredients.label": "Ingredients",
  "scale.factor": "Scale Factor"
}
```

#### Guidelines for Translators:

- Maintain consistency in terminology throughout the translation
- Use formal or informal language appropriately for your language/region
- Avoid machine-only translations; human review is preferred
- Test your translation in the actual application
- Provide context if uncertain about a translation (add comments in your PR)

#### Quality Assurance:

Before submitting a PR with a new language:
- Verify all text is visible and properly formatted
- Test on different screen sizes (mobile, tablet, desktop)
- Ensure no hardcoded English text remains in your translation context
- Check for any broken links or formatting issues

Thank you for helping make recipe-scaler accessible to more people around the world! 🌍

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Support

For issues, feature requests, or questions, please open an issue on the [GitHub repository](https://github.com/xprss/recipe-scaler/issues).
