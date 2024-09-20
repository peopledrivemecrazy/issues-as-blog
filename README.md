# GitHub Issues Blog

A minimalist blogging platform that leverages GitHub Issues as a backend.

[Video Demo](https://youtu.be/UML33lIcEOc)

## Key Features

- Uses GitHub Issues as a content management system
- No need to commit Markdown files to the repository
- Closing an issue automatically publishes the content
- Triggers a webhook to Vercel for automatic builds - Adjust vercel to stop triggering on push.

## How It Works

1. Create a new issue for each blog post
2. Write your content in the issue body using Markdown
3. Close the issue to publish the post
4. Webhook notifies Vercel to rebuild and deploy the site
