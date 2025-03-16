## You favorite next-boilerplate

Do you want a next project? Start here.

Yea, setting up authentication and validation from scratch in every new project is time-consuming and repetitive. This is an all-in-one boilerplate to quickly start Next.js projects with the most common configurations and dependencies.

### Stacks

- Next.js 
- TypeScript 
- Middleware
- Tailwind CSS
- shadcn/ui 
- Geist
- Framer Motion 
- Lucide-react 
- js-cookie
- [Validation-Box](https://vbox.euotiniel.com/docs/introduction) 

### Installation

Clone the repository:

```bash
git clone https://github.com/euotiniel/next-boilerplate.git
```

&

```bash
cd next-boilerplate
```

You can use a dependency manager of your choice.

```bash
npm install
```

Runs the application in development mode. Open http://localhost:3000 to view in your browser.

```bash
npm run dev
```

Remove the ```.git``` and enable ```.env*``` (file: .gitignore). Done? Yes, you're done!

### Other features to add

- support for mdx;
- react-query.

### Project Structure

```
├── app
|   ├── auth
|   |   ├── login
|   |   |   |   ├── page.tsx
|   ├── dashboard
|   |   |   ├── page.tsx
|   |   ├── favicon.ico
|   |   ├── layout.tsx
|   |   ├── page.tsx
├── components
|   ├── layout
|   |   |   ├── footer.tsx
|   |   |   ├── header.tsx
|   |   |   ├── index.tsx
|   ├── ui
|   |   |   ├── button.tsx
|   |   |   ├── dropdown-menu.tsx
|   |   |   ├── input.tsx
|   |   ├── theme-provider.tsx
|   |   ├── toggle.tsx
├── config
|   |   ├── seo.config.ts
├── hooks
|   |   ├── useAuth.ts
|   |   ├── useValidationBox.tsx
├── lib
|   |   ├── auth.ts
|   |   ├── constants.ts
|   |   ├── utils.ts
├── public
|   |   ├── file.svg
|   |   ├── globe.svg
|   |   ├── next.svg
|   |   ├── vercel.svg
|   |   ├── window.svg
├── styles
|   |   ├── globals.css
|   ├── .env.local
|   ├── .gitignore
|   ├── components.json
|   ├── LICENSE
|   ├── middleware.ts
|   ├── next.config.ts
|   ├── package-lock.json
|   ├── package.json
|   ├── postcss.config.mjs
|   ├── README.md
|   ├── tsconfig.json
```

### Contribution

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the repository
2. Create your feature branch (git checkout -b feature/AmazingFeature)
3. Commit your changes (git commit -m 'Add some AmazingFeature')
4. Push to the branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

## License

Distributed under the MIT license. See LICENSE for more information.