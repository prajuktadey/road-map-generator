# Road Map Generator

This project is designed to generate a comprehensive roadmap for achieving proficiency in a given job role. Utilizing advanced AI models and web scraping tools, it gathers information from multiple sources to provide a detailed plan, including necessary skills, resources, and learning materials. The project leverages Flowise AI to create an interactive, automated workflow.

## Overview

In this system, agents are configured to work together to complete a software development cycle. Each agent has a distinct role and set of tasks, contributing to the overall process.

Below is a visual representation of the workflow:

![Workflow](flowise-roadmap.png)

## Features

- **ChatMistralAI**: Utilizes the Mistral language model to provide conversational AI capabilities.
- **Supervisor**: Manages the flow and coordinates tasks among different workers.
- **Roadmap Generator**: Develops a structured roadmap for achieving job proficiency.
- **Web Scraper**: Collects online resources, articles, and courses related to the job.
- **Research Articles**: Searches for recent research papers and academic journals.
- **YouTube Link Generator**: Finds educational YouTube videos related to job skills.

## Workflow

1. **ChatMistralAI**: Initiates the conversation and gathers input.
2. **Supervisor**: Moderates the input and coordinates with the Roadmap Generator.
3. **Roadmap Generator**: Creates a detailed roadmap based on the job role and required skills.
4. **Web Scraper**: Finds and compiles relevant online resources.
5. **Research Articles**: Searches for and includes recent academic research.
6. **YouTube Link Generator**: Adds educational YouTube video links to the roadmap.
