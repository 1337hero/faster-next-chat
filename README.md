# ⚡ Faster Chat
<p align="left">
  <!-- Framework -->
  <a href="https://nextjs.org/">
    <img src="https://img.shields.io/badge/Next.js-15-black?logo=nextdotjs" alt="Next.js" />
  </a>
  <!-- Language -->
  <a href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/TypeScript-Strict-blue?logo=typescript" alt="TypeScript" />
  </a>
  <!-- Database -->
  <a href="https://dexie.org/">
    <img src="https://img.shields.io/badge/Dexie-IndexedDB-orange?logo=javascript" alt="Dexie" />
  </a>
  <!-- Styling -->
  <a href="https://tailwindcss.com/">
    <img src="https://img.shields.io/badge/TailwindCSS-Catppuccin-38B2AC?logo=tailwindcss" alt="TailwindCSS" />
  </a>
  <!-- AI SDK -->
  <a href="https://sdk.vercel.ai/">
    <img src="https://img.shields.io/badge/Vercel%20AI%20SDK-Edge%20Streaming-black?logo=vercel" alt="Vercel AI SDK" />
  </a>
  <!-- Package Manager -->
  <a href="https://bun.sh/">
    <img src="https://img.shields.io/badge/Bun-Fast%20Builds-yellow?logo=bun" alt="Bun" />
  </a>
  <!-- License -->
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-green" alt="MIT License" />
  </a>
</p>

## About
A blazing-fast, local-first AI chat application inspired by T3 Chat's performance philosophy. Built with Next.js 15, TypeScript, and IndexedDB for instant responses and seamless offline functionality.

This project takes T3 Chat's core insights - that local-first architecture can deliver 2x ChatGPT speed - and implements them with modern tooling. Special thanks to [@t3dotgg](https://github.com/t3dotgg) for the inspiration and the excellent breakdown in [How I Built T3 Chat in 5 Days](https://youtu.be/QLvIoi2s1zY?si=tseIII4RsH2ZX-1o).

## Current Status

I decided to abandon this project. It was a fun learning experince. I also wanted my own chat interface on my local network - but the fact remains that for me, Open Web UI works best for my personal goals than me spending a large amount of time building a custom project. Anyone else is welcome to this code base.

## Features
- ⚡ **Instant Navigation** - Local-first architecture with IndexedDB via Dexie
- 🤖 **Multi-Provider Support** - Anthropic, OpenAI, Groq, DeepSeek with easy model switching
- 🎨 **Beautiful UI** - Tailwind CSS with Catppuccin Macchiato theme
- 📝 **System Prompts** - Customizable prompts for different use cases
- 🔄 **Real-time Streaming** - Vercel AI SDK with edge runtime support
- 💾 **Persistent Storage** - All chats and messages stored locally
- 🚀 **Optimized Performance** - React optimizations for 60+ FPS rendering

## Structure
I am using a local-first streaming approach with IndexedDB via [Dexie.js](https://dexie.org/) and making use of the [Vercel AI SDK](https://sdk.vercel.ai/).

**Here's how it's implemented:**

1. **Database Layer (db.ts):**
   - Using Dexie to manage IndexedDB
   - Two tables: chats and messages
   - Full CRUD operations for chats and messages
   - Proper indexing for efficient queries

2. **Reactive Data Layer (usePersistentChat.ts)**
   - Using useLiveQuery from dexie-react-hooks for reactive queries
   - Automatic UI updates when data changes in IndexedDB
   - Real-time chat and message loading
   - Proper message persistence

3. **Message Flow:**
   - Messages are stored locally in IndexedDB
   - UI renders directly from IndexedDB data
   - New messages are immediately persisted
   - Changes trigger automatic UI updates

4. **Local-First Benefits:**
  - Instant data availability
  - Real-time UI updates 
  - Smooth user experience

The local first approach is what makes the interface feel fast, especially switching between chats.

## Tech Stack

- **Framework**: Next.js 15 with App Router and Turbopack
- **Language**: TypeScript with strict mode
- **Styling**: Tailwind CSS with Catppuccin Macchiato theme
- **Database**: IndexedDB via Dexie.js for local-first persistence
- **AI Integration**: Vercel AI SDK with multiple provider support
- **State Management**: React hooks with reactive Dexie queries
- **Package Manager**: Bun for fast installs and builds

## Prerequisites

- Node.js 20+ (LTS recommended)
- Bun package manager (`npm install -g bun`)
- API keys for the AI providers you want to use:
  - `ANTHROPIC_API_KEY` - [Get from Anthropic Console](https://console.anthropic.com/)
  - `OPENAI_API_KEY` - [Get from OpenAI Platform](https://platform.openai.com/)
  - `GROQ_API_KEY` - [Get from Groq Cloud](https://console.groq.com/)
  - `DEEPSEEK_API_KEY` - [Get from DeepSeek Platform](https://platform.deepseek.com/)

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/mk3y-chat.git
cd mk3y-chat
```

2. Install dependencies:
```bash
bun install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Add your API keys to `.env`:
```env
# Required: At least one AI provider key
ANTHROPIC_API_KEY=your_anthropic_key
OPENAI_API_KEY=your_openai_key
GROQ_API_KEY=your_groq_key
DEEPSEEK_API_KEY=your_deepseek_key

# Optional: Analytics (if you want metrics)
# POSTHOG_API_KEY=your_posthog_key
# AXIOM_API_KEY=your_axiom_key
```

5. Start the development server:
```bash
bun run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

> **Note**: The app works with just one API key. Add multiple providers for model variety and fallback options.

## Development Commands

- `bun run dev` - Start development server with Turbopack
- `bun run build` - Create production build
- `bun run start` - Start production server
- `bun run lint` - Run ESLint
- `bun run format` - Format code with Prettier
- `bun run test:format` - Check code formatting

## Project Structure

```
faster-chat/
├── src/
│   ├── app/              # Next.js app router pages and API routes
│   │   ├── api/chat/     # Streaming AI endpoint with edge runtime
│   │   └── page.tsx      # Main chat interface
│   ├── components/       # React components
│   │   ├── chat/         # Chat-related components
│   │   ├── ui/           # Reusable UI components
│   │   └── settings/     # Settings and configuration
│   ├── hooks/            # Custom React hooks
│   │   └── usePersistentChat.ts  # Main chat data hook
│   ├── lib/              # Core utilities
│   │   ├── db.ts         # Dexie database configuration
│   │   └── constants/    # Models and prompts configuration
│   └── types/            # TypeScript definitions
```

## Performance Features

Based on T3 Chat's architecture, this project implements several performance optimizations:

- **Local-First Architecture**: All data operations happen locally first via IndexedDB
- **Reactive Queries**: UI renders directly from local data using Dexie's reactive hooks
- **Optimistic Updates**: Changes appear immediately without waiting for network
- **Smart Prefetching**: Preload data for instant navigation
- **Markdown Chunking**: Stream and render markdown in blocks for smooth updates
- **Edge Runtime**: API routes use edge runtime for faster streaming

## Deployment

### Quick Deploy to Vercel
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/mk3y-chat)

### Docker
```bash
docker build -t mk3y-chat .
docker run -p 3000:3000 --env-file .env mk3y-chat
```

### Self-Hosted
See the [deployment guide](docs/plans/250116-01a-multifeature-enhancement.md#feature-4-easy-deployment-method) for detailed instructions.

## Contributing

I welcome contributions!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Acknowledgments

- [T3 Chat](https://t3.chat) by [@t3dotgg](https://github.com/t3dotgg) - Performance inspiration and architecture patterns
- [Dexie.js](https://dexie.org/) - Making IndexedDB actually usable
- [Vercel AI SDK](https://sdk.vercel.ai/) - Streaming AI responses
- [Catppuccin](https://github.com/catppuccin/catppuccin) - Beautiful color scheme

## License

MIT License - Build something awesome!

---

<p align="center">
  Made with ❤️ by 1337Hero
  <br>
  <a href="https://github.com/yourusername/mk3y-chat/stargazers">⭐ Star us on GitHub</a>
</p>
