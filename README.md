# Hono + Better Auth + Drizzle + Bun SQLite 示例项目

这是一个使用 Hono、Better Auth、Drizzle ORM 和 Bun SQLite 构建的身份验证示例项目。

## ✨ 特性

*   🚀 **Hono**: 快速、轻量级的 Web 框架。
*   🔒 **Better Auth**: 简单易用的身份验证库。
*   🐘 **Drizzle ORM**: TypeScript ORM，提供类型安全的数据库操作。
*   📦 **Bun SQLite**: 使用 Bun 运行时和 SQLite 数据库。

## 🛠️ 技术栈

*   **框架**: [Hono](https://hono.dev/)
*   **身份验证**: [Better Auth](https://github.com/pilcrowonpaper/better-auth)
*   **ORM**: [Drizzle ORM](https://orm.drizzle.team/)
*   **数据库**: [SQLite](https://www.sqlite.org/index.html) (通过 [Bun SQLite](https://bun.sh/docs/api/sqlite))
*   **运行时**: [Bun](https://bun.sh/)

## 🚀 快速开始

### 1. 克隆仓库

```bash
git clone <your-repository-url>
cd auth-test
```

### 2. 安装依赖

确保你已经安装了 [Bun](https://bun.sh/)。

```bash
bun install
```

### 3. 配置环境变量

复制 `.env.example` 文件并重命名为 `.env`。

```bash
cp .env.example .env
```

根据需要修改 `.env` 文件中的配置（如果需要的话，默认配置通常可以直接运行）。

### 4. 设置数据库

按顺序执行以下命令来生成数据库 schema、创建迁移文件并应用迁移。

1.  **生成 Schema:**
    ```bash
    bun run generate-schema
    ```

2.  **生成迁移文件:**
    ```bash
    bun run db:generate
    ```

3.  **应用迁移:**
    ```bash
    bun run db:migrate
    ```

### 5. 运行开发服务器

```bash
bun run dev
```

服务将在 `http://localhost:3000` 上启动。

## 📁 项目结构

```
.
├── .env.example        # 环境变量示例文件
├── .gitignore
├── README.md           # 项目说明文件
├── bun.lock            # Bun 锁文件
├── drizzle.config.ts   # Drizzle ORM 配置文件
├── drizzle/            # Drizzle 迁移文件目录
├── eslint.config.mjs   # ESLint 配置文件
├── mydb.sqlite         # SQLite 数据库文件 (自动生成)
├── package.json        # 项目依赖和脚本
├── src/
│   ├── app.ts          # Hono 应用入口
│   ├── db/
│   │   ├── auth-schema.ts # Drizzle 数据库 Schema
│   │   ├── index.ts       # Drizzle 客户端实例
│   │   └── migrate.ts     # Drizzle 迁移脚本
│   ├── lib/
│   │   └── auth.ts        # Better Auth 配置
│   ├── middlewares/
│   │   └── auth.middleware.ts # 身份验证中间件
│   └── routes/
│       └── auth.ts        # 身份验证相关路由
└── tsconfig.json       # TypeScript 配置文件
```

## 📜 License

[MIT](./LICENSE) (如果需要，请添加 LICENSE 文件)
