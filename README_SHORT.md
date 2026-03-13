**EnergyGuard** is an AI-powered assistant designed to help professionals better understand their workload and **protect their energy** throughout the day.

Modern work environments rely on multiple digital tools, but they rarely provide a holistic view of how workload affects our mental energy. EnergyGuard analyzes signals from daily work activities to provide insights that help people work in a **more sustainable way**.

## The Vision

We have many tools to manage work, but almost none that help us manage our **energy**.

**How is my workload affecting my energy today?**

EnergyGuard explores how AI can analyze work signals to detect patterns of overload and provide recommendations **before burnout happens**. The goal is to promote **sustainable work habits**.

## Why This Matters

Burnout has become increasingly common. Knowledge workers juggle meetings, tasks, messages, and deadlines scattered across multiple tools.

Patterns such as **back-to-back meetings**, **lack of focus time**, and **growing task lists** indicate cognitive overload. EnergyGuard transforms these fragmented signals into **actionable insights**.

## How It Works

EnergyGuard is a cloud-native application with three main components:

**Frontend Dashboard** — Visualizes key workload signals:
- Energy Score
- Cognitive Load
- Meeting density
- Focus time availability
- **AI assistant panel** for natural language interaction

**Backend Integration** — Connects with **Google Calendar** via OAuth to analyze:
- Meeting density
- Back-to-back meetings
- Available focus time

**AI Assistant (AWS)** — Powered by serverless architecture:
- **AWS Lambda functions** process user requests
- Retrieves calendar events and workload metrics
- **Amazon Bedrock** with Claude 3 Haiku generates contextual recommendations
- Identifies overloaded schedules, suggests focus blocks, recommends breaks

## Architecture

The solution uses **serverless architecture** combining:
- **Next.js** frontend dashboard
- **FastAPI** backend integration
- **AWS Lambda** functions
- **Amazon Bedrock** for AI reasoning
- **Google Calendar API** integration

This allows EnergyGuard to analyze real workload signals and generate intelligent recommendations.

## Demo

Watch the demo: **https://youtu.be/EKgIfPEBWvI**

EnergyGuard provides a unified dashboard with:
- **Energy Dashboard** — Overview of energy levels and cognitive load
- **AI Assistant** — Conversational interface for workload analysis
- **Integrations** — Google Calendar (with future Jira and Slack support)
- **Insights** — Productivity patterns and meeting distribution analysis
- **Tasks** — Task management with cognitive load estimation
- **Reports** — Long-term trends in workload and productivity

## Key Learnings

**AI can support human wellbeing**, not just automate processes. By combining contextual signals from calendars, tasks, and user interactions, AI assistants help people make better decisions about managing their time.

**Serverless architectures** are powerful for AI-driven systems. Using **AWS Lambda** and **Amazon Bedrock** made it possible to build an intelligent assistant without managing complex infrastructure.

EnergyGuard explores how AI can help protect one of our most valuable resources: **our energy**.
