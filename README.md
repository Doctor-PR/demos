Let Proton fix your pull request, so you can focus on the next feature.

## 🚀 What Proton Does

Proton listens to review feedback on your PRs and automatically address them with code changes.

![workflow](https://github.com/user-attachments/assets/a94e5732-d7d1-4d62-b0e1-956def2b0d51)

1. When a review is submitted, an "Address with Proton" button gets added
2. Click the button to tell Proton to address the review
3. Proton creates a new PR with the fixes
4. Review the changes and merge into to your branch if you're happy with them

## 🔥 Why You'll Love It

- **Save time**: Stop context-switching between reviews and fixing issues
- **Learn faster**: See how AI solves the problems in your code
- **Ship quicker**: Address review feedback without delay
- **Secure by design**: We prioritize the security and privacy of your code

## 🔒 Security and Privacy

We understand the importance of code security and privacy. Here's how we protect your code:

- **Server-Side Processing**: Proton processes review feedback on our secure servers to provide fixes.
- **Isolated Execution**: Each code generation task runs in an isolated, ephemeral container using Azure Container Apps jobs. The container is destroyed after the task completes.
- **Open Source Agent**: The core code modification agent is open-source ([Aider](https://github.com/Aider-AI/aider)), allowing for transparency.
- **Data Handling**: We temporarily clone relevant parts of your repository into the isolated container for analysis and modification. The code and the container are deleted immediately after processing. We'll never store your code.
- **AI Model**: We utilize Google's Gemini 2.5 Pro as the foundation model, which offers best-in-class coding performance and privacy. (Read more about privacy [here](https://cloud.google.com/vertex-ai/generative-ai/docs/data-governance))

## 💬 Questions?

Have questions or feedback? Reach out to us at [support@proton.codes](mailto:support@proton.codes).
